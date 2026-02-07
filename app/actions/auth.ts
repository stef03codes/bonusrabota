'use server'

import { LoginFormSchema, LoginFormState, SignupFormSchema, SignupFormState } from '@/lib/definitions'
import { createSession, deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation';
import { getUser } from '@/lib/api/user';

export async function login(state: LoginFormState, formData: FormData) {
    const validatedFields = LoginFormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { email, password } = validatedFields.data;

    const xanoResponse = await fetch(`${process.env.XANO_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    
    const data = await xanoResponse.json();

    if (!xanoResponse.ok) {
        return {
            message: 'Невалиден email или лозинка!',
        }
    }

    await createSession(data.authToken);
    const user = await getUser(data.authToken);

    if(user.role === 'both') {
        redirect('/welcome');
    } else {
        redirect(`/${user.role}/dashboard`);
    }
}

export async function signup(state: SignupFormState, formData: FormData) {
    console.log('Form data received in server action:', formData);

    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        phone: formData.get('phone'),
        business: formData.get('business'),
        role: formData.get('role'),
        company_name: formData.get('company_name') || '',
        niches: JSON.parse(formData.get('niches') as string)
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    console.log('Validated fields:', validatedFields.data);

    const { name, email, password, phone, business, role, company_name, niches } = validatedFields.data;

    console.log(JSON.stringify({ 
            name, 
            email, 
            password,
            phone,
            business,
            role,
            company_name,
            niches
        }))

    const xanoResponse = await fetch(`${process.env.XANO_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            name, 
            email, 
            password,
            phone,
            business,
            role,
            company_name,
            niches
        }),
    });

    console.log(xanoResponse)

    const data = await xanoResponse.json();

    if (!xanoResponse.ok) {
        return {
            message: 'Грешка при регистрација!',
        }
    }

    await createSession(data.authToken);

    if(role === 'both') {
        redirect('/welcome');
    } else {
        redirect(`/${role}/dashboard`);
    }
}

export async function logout() {
    await deleteSession();
    redirect('/login');
}
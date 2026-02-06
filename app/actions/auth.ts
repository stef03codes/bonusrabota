'use server'

import { LoginFormSchema, LoginFormState, SignupFormSchema, SignupFormState } from '@/lib/definitions'
import { createSession, deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation';
import { getUser, UserSchema } from '@/lib/api/user';

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

    createSession(data.authToken).then(async () => {
        const user = UserSchema.parse(await getUser());
        
        if(user.role === 'both') {
            redirect('/welcome');
        } else {
            redirect(`/${user.role}/dashboard`);
        }
        
    });
}

export async function signup(state: SignupFormState, formData: FormData) {
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        tel: formData.get('tel'),
        business: formData.get('business'),
        role: formData.get('role')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, password, tel, business, role } = validatedFields.data;

    const xanoResponse = await fetch(`${process.env.XANO_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            name, 
            email, 
            password,
            tel,
            business,
            role
        }),
    });

    const data = await xanoResponse.json();

    if (!xanoResponse.ok) {
        return {
            message: 'Невалиден email или лозинка!',
        }
    }

    createSession(data.authToken).then(async () => {
        const user = UserSchema.parse(await getUser());
        
        if(user.role === 'both') {
            redirect('/welcome');
        } else {
            redirect(`/${user.role}/dashboard`);
        }
        
    });

    // redirect('/dashboard')
}

export async function logout() {
    await deleteSession()
    redirect('/login')
}
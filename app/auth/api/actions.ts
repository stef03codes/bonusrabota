'use server'

import { redirect } from "next/navigation";
import { LoginFormSchema, LoginFormState, SignupFormSchema, SignupFormState } from "./definitions";
import { createSession, deleteSession } from "./session";
import { getUser } from "./user";

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

    if (!xanoResponse.ok) {
        return {
            message: 'Невалиден email или лозинка!',
        }
    }
    
    const data = await xanoResponse.json();

    await createSession(data.authToken);
    const user = await getUser(data.authToken);

    if(user.role === 'both') {
        redirect('/welcome');
    } else {
        redirect(`/${user.role}/dashboard`);
    }
}

export async function signup(state: SignupFormState, formData: FormData) {
    // console.log('Form data received in server action:', formData);

    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
        role: formData.get('role')
    });

    if (!validatedFields.success) {
        console.log(validatedFields.success)
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, password, role } = validatedFields.data;

    const xanoResponse = await fetch(`${process.env.XANO_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role })
    });

    if (!xanoResponse.ok) {
        return {
            message: 'Грешка при регистрација!',
        }
    }

    const data = await xanoResponse.json();

    await createSession(data.authToken);

    redirect('/profile/create')
}

export async function logout() {
    await deleteSession();
    redirect('/login');
}
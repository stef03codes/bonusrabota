'use server'

import { redirect } from "next/navigation";
import { LoginFormSchema, LoginFormState, SignupFormSchema, SignupFormState } from "./definitions";
import { createSession, deleteSession } from "./session";
import {getUserFromApi, User} from "./user";

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

    const xanoResponse = await fetch(`${process.env.XANO_BASE_URL}/api:QqYQmNog/auth/login`, {
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

    const user: User = await getUserFromApi(data.authToken);
    await createSession(data.authToken, JSON.stringify(user));

    redirect(`/${user.role}/dashboard`);
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

    const xanoResponse = await fetch(`${process.env.XANO_BASE_URL}/api:QqYQmNog/auth/signup`, {
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

    const user: User = await getUserFromApi(data.authToken);
    await createSession(data.authToken, JSON.stringify(user));

    redirect('/profile/create');
}

export async function logout() {
    await deleteSession();
    redirect('/auth');
}
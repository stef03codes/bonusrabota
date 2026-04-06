import 'server-only'
import { cookies } from 'next/headers'

export async function getSession() {
    const cookieStore = await cookies();
    return cookieStore.get('user_data')?.value;
}

export async function getAuthToken() {
    const cookieStore = await cookies();
    return cookieStore.get('xano_auth_token')?.value;
}

export async function createSession(authToken: string, userData: string) {
    const cookieStore = await cookies();
    cookieStore.set('xano_auth_token', authToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
    });
    cookieStore.set('user_data', userData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
    });
}

export async function updateSession() {
    const session = (await cookies()).get('xano_auth_token')?.value;

    if (!session) {
        return null
    }

    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const cookieStore = await cookies()
    cookieStore.set('xano_auth_token', session, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: 'lax',
        path: '/',
    });
}

export async function deleteSession() {
    const cookieStore = await cookies();
    cookieStore.delete('xano_auth_token');
    cookieStore.delete('user_data');
}
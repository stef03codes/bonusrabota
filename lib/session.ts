import 'server-only'
import { cookies } from 'next/headers'

export async function createSession(authToken: string) {
    const cookieStore = await cookies();
    cookieStore.set('xano_auth_token', authToken, {
        httpOnly: true, // Prevents JS access (prevents XSS)
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
    });    
}

export async function updateSession() {
    const session = (await cookies()).get('session')?.value

    if (!session) {
        return null
    }

    const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

    const cookieStore = await cookies()
    cookieStore.set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expires,
        sameSite: 'lax',
        path: '/',
    })
}

export async function deleteSession() {
    const cookieStore = await cookies()
    cookieStore.delete('session')
}
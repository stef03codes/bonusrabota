import { z } from 'zod';

export const UserSchema = z.object({
    name: z.string(),
    email: z.email(),
    tel: z.string(),
    role: z.string()
});

export async function getUser() {
    const xanoResponse = await fetch(`${process.env.XANO_BASE_URL}/auth/me`);

    if (!xanoResponse.ok) {
        return {
            message: 'Грешка при обид за преземање на вашиот профил!',
        }
    }

    const data = await xanoResponse.json();

    return data;
}
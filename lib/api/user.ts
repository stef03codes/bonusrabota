import { cookies } from 'next/headers';
import { z } from 'zod';

export const UserSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    role: z.enum(["poster", "tasker", "both"]),
});

export async function getUser(authToken: string) {
    const xanoResponse = await fetch(`${process.env.XANO_BASE_URL}/auth/me`, {
        headers: {
            'Authorization': `Bearer ${authToken}` 
        }
    });

    if (!xanoResponse.ok) {
        throw new Error('Грешка при обид за преземање на вашиот профил!');
    }

    const data = await xanoResponse.json();
    const parsedData = UserSchema.safeParse({
        name: data.name,
        email: data.email,
        role: data.role
    });

    if(!parsedData.success) {
        throw new Error('Грешка при обид за преземање на вашиот профил!');
    }

    return parsedData.data;
}

export async function getUserRole() {
    const session = (await cookies()).get('xano_auth_token')?.value;
    if(!session) {
        return null;
    }
    const user = await getUser(session);
    return user.role;
}
import { z } from 'zod';
import {getSession} from "@/app/auth/api/session";
import {redirect} from "next/navigation";

export interface User {
    name: string;
    email: string;
    role: string;
    account_id: number;
}

export const UserSchema = z.object({
    name: z.string().min(1),
    email: z.email(),
    role: z.enum(["poster", "tasker", "both"]),
    account_id: z.number(),
});

export async function getUserFromSession() {
    const session = await getSession();

    if(!session) {
        redirect('/auth')
    }

    const user: User = JSON.parse(session);
    return user;
}

export async function getUserFromApi(authToken: string) {
    const xanoResponse = await fetch(`${process.env.XANO_BASE_URL}/api:QqYQmNog/auth/me`, {
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
        role: data.role,
        account_id: data.account_id,
    });

    if(!parsedData.success) {
        console.log(parsedData.error)
        throw new Error(`${parsedData.error}`);
    }

    return parsedData.data;
}
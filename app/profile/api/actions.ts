"use server";

import {ProfileFormSchema, ProfileFormState} from "@/app/profile/api/definitions";
import {getUserFromSession, User} from "@/app/auth/api/user";
import {redirect} from "next/navigation";
import {getAuthToken} from "@/app/auth/api/session";

export async function createProfile(state: ProfileFormState, formData: FormData) {
    const validatedFields = ProfileFormSchema.safeParse({
        tel: formData.get("tel"),
        business: formData.get("business"),
        niches: formData.get("niches"),
        legal_name: formData.get("legal_name")
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            success: false
        }
    }

    const { tel, business, legal_name, niches } = validatedFields.data;

    const authToken = await getAuthToken();
    const xanoResponse = await fetch(`${process.env.XANO_BASE_URL}/api:n1yrZCo3/account`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({
            "tel": tel,
            "business": business,
            "legal_name": legal_name,
            "niches": niches
        }),
    });

    if (!xanoResponse.ok) {
        console.log(xanoResponse)
        return {
            message: 'Неуспешен обид за креирање на профил!',
            success: false
        }
    }

    console.log({ tel, business, legal_name, niches });
    const user: User = await getUserFromSession();
    redirect(`/${user.role}/dashboard`);
}
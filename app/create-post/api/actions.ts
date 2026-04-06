'use server';

import {CreatePostSchema, CreatePostState} from "@/app/create-post/api/definitions";

export async function createPost(state: CreatePostState, formData: FormData) {
    const validatedFields = CreatePostSchema.safeParse({
        description: formData.get('description'),
        category: formData.get('category'),
        city: formData.get('city'),
        // image: formData.get('image')
    });

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten().fieldErrors)
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    // const { description, category, city, image } = validatedFields.data;
    console.log(validatedFields.data);
}
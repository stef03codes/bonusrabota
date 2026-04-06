import * as z from 'zod'

export const CreatePostSchema = z.object({
    description: z
        .string()
        .min(10, { error: 'Описот треба да содржи најмалку 200 букви!' })
        .trim(),
    category: z.string(),
    city: z.string(),
    // image: z.string()
})

export type CreatePostState =
    | {
    errors?: {
        description?: string[]
        category?: string[]
        city?: string[]
        // image?: string[]
    }
    message?: string
}
    | undefined
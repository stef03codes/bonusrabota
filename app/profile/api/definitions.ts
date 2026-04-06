import * as z from 'zod'

export const ProfileFormSchema = z.object({
    tel: z
      .string()
      .min(1, { message: "*Телефонскиот број е задолжителен" })
      .min(9, {error: 'Внесете валиден телфонски број'})
      .trim(),
    business: z
        .string()
        .min(1, { error: "Бизнис полето е задолжително!" }),
    niches: z
        .string()
        .nullable()
        .optional(),
    legal_name: z
        .string()
        .nullable()
        .optional()
})

export type ProfileFormState =
    | {
    errors?: {
        tel?: string[]
        business?: string[]
        niches?: string[]
        legal_name?: string[]
    }
    message?: string
}
    | undefined


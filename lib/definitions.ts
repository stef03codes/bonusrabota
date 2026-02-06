import * as z from 'zod'
 
const BusinessEnum = z.enum(['Физичко лице', 'Компанија', 'Мал бизнис'])
const UserRole = z.enum(['Постер', 'Таскер', 'И двете'])

export const LoginFormSchema = z.object({
  email: z.string().trim().min(1, { message: "*Email-от е задолжителен" }),
  password: z.string().trim().min(1, { message: "*Лозинката е задолжителна" })
})

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { error: 'Името треба да содржи најмалку две букви.' })
    .trim(),
  email: z.email({ error: 'Внесете валиден email.' }).trim(),
  password: z
    .string()
    .min(8, { error: 'Лозинката треба да виде најмалку 8 карактери' })
    .regex(/[a-zA-Z]/, { error: 'Да содржи најмалку една буква.' })
    .regex(/[0-9]/, { error: 'Најмалку една бројка.' })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'И најмалку еден специјален знак.',
    })
    .trim(),
  tel: z.string().min(9, {error: 'Внесете валиден телфонски број'}),
  business: BusinessEnum,
  role: UserRole
})
 
export type LoginFormState =
  | {
      errors?: {
        email?: string[]
        password?: string[]
      }
      message?: string
    }
  | undefined

export type SignupFormState =
| {
    errors?: {
        name?: string[]
        email?: string[]
        password?: string[],
        tel?: string[],
        business: string[],
        role: string[]
    }
    message?: string
}
| undefined
import * as z from 'zod'

// Schemas
export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { error: 'Името треба да содржи најмалку две букви!' })
    .trim(),
  email: z
    .email({ error: 'Внесете валиден email!' }).trim(),
  password: z
    .string()
    .min(8, { error: 'Лозинката треба да виде најмалку 8 карактери.' })
    .regex(/[a-zA-Z]/, { error: 'Лозинката треба да содржи најмалку една буква.' })
    .regex(/[0-9]/, { error: 'Лозинката треба да содржи ајмалку една бројка.' })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'Лозинката треба да содржи најмалку еден специјален знак.',
    })
    .trim(),
    role: z
      .string({error: 'Задолжително изберете улога!'})
      .trim()
})

export const LoginFormSchema = z.object({
  email: z.string().trim().min(1, { message: "*Email-от е задолжителен" }),
  password: z.string().trim().min(1, { message: "*Лозинката е задолжителна" })
})

//  FormStates 

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
        password?: string[]
    }
    message?: string
}
| undefined

export type LogoutState = | { errors?: { message: string } } | undefined

// Interfaces
export interface LoginFormProps {
  state: LoginFormState;
  action: (payload: FormData) => void; 
  pending: boolean;
}

export interface SignupFormProps {
  state: SignupFormState;
  action: (payload: FormData) => void; 
  pending: boolean;
}

export interface LogoutFormProps {
  state: LogoutState | void | undefined;
  action: (payload: FormData) => void; 
  pending: boolean;
}

// const BusinessEnum = z.enum(['individual', 'company', 'small_business'], { 
//   error: 'Типот на бизнис е задолжително поле!' 
// })
// const UserRole = z.enum(['poster', 'tasker', 'both'], {
//   error: 'Типот на корисник е задолжително поле!'
// })

// phone?: string[],
//         business?: string[],
//         role?: string[],
//         niches?: string[],
//         company_name?: string[]

  // phone: z
  //   .string()
  //   .min(1, { message: "*Телефонскиот број е задолжителен" })
  //   .min(9, {error: 'Внесете валиден телфонски број'})
  //   .trim(),
  // business: BusinessEnum,
  // company_name: z.string().optional(),
  // role: UserRole,
  // niches: z.array(z.string()).min(2, { error: 'Одберете најмалку две ниши.' })
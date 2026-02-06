'use client';

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import Link from "next/link"
import { useActionState } from 'react'
import { login } from '@/app/actions/auth'

export default function LoginPage() {
  const [state, action, pending] = useActionState(login, undefined)

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-5xl font-bold">Бонус Работа</h1>
      <form action={action} className="w-96 mt-14">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
            <Input
              id="fieldgroup-email"
              type="email"
              name="email"
              placeholder="name@example.com"
            />
            {state?.errors?.email && <FieldError>{state.errors.email}</FieldError>}
          </Field>
          <Field>
            <FieldLabel htmlFor="fieldgroup-name">Лозинка</FieldLabel>
            <Input 
              id="fieldgroup-password" 
              type="password"
              name="password"
              placeholder="Внесете лозинка..."
            />
            {state?.errors?.password && <FieldError>{state.errors.password}</FieldError>}
          </Field>
          <Field>
            <Button 
              type="submit" 
              className="w-full cursor-pointer"
              disabled={pending}
            >
              {pending && <>
                <Spinner data-icon="inline-start" /> 
                <span>Ве најавуваме...</span>
              </> }
              {!pending && <span>Најави се</span>} 
            </Button>
            {state?.message && <FieldError>{state.message}</FieldError>}
          </Field>
          <hr />
          <Field>
            <FieldLabel htmlFor="fieldgroup-name">Сеуште немате сметка?</FieldLabel>
            <Link href='/signup'>
              <Button 
                type="button" 
                className="w-full bg-green-400 cursor-pointer hover:bg-green-300"
              >
                Регистрирај се
              </Button>
            </Link>
          </Field>
          {/* <Field>
            <Link href="/privacy-policy" className="text-blue-300 underline">
              Прочитајте ја нашата политика на приватност.
            </Link>
          </Field> */}
        </FieldGroup>
      </form>
    </div>
  );
}
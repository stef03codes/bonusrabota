'use client'

import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { LoginFormProps } from "../api/definitions"
import { login } from "../api/actions";
import { useActionState } from "react"

export default function LoginForm() {

    const [state, action, pending] = useActionState(login, undefined);

    return (
        <form action={action}>
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
                        </>}
                        {!pending && <span>Најави се</span>}
                    </Button>
                    {state?.message && <FieldError>{state.message}</FieldError>}
                </Field>
            </FieldGroup>
        </form>
    )
}
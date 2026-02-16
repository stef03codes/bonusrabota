'use client'

import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { signup } from "../api/actions";
import { useActionState, useState } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SignupForm() {

    const [state, action, pending] = useActionState(signup, undefined);
    const [role, setRole] = useState("");

    return (
        <form action={action}>
            <FieldGroup>
                <Field>
                    <FieldLabel htmlFor="name">Име и Презиме</FieldLabel>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Внесете име"
                        name="name"
                    />
                    {state?.errors?.name && <FieldError>{state.errors.name}</FieldError>}
                </Field>
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
                    {state?.errors?.password && state.errors.password.map(error => (
                        <FieldError key={error}>{error}</FieldError>
                    ))}
                </Field>
                <Field>
                    <FieldLabel htmlFor="business">Улога</FieldLabel>
                    <Select onValueChange={setRole}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Одбери улога" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="poster">Постер</SelectItem>
                                <SelectItem value="tasker">Таскер</SelectItem>
                                <SelectItem value="both">Двете улоги</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <input type="hidden" name="role" value={role} />
                    {state?.errors?.role && <FieldError>{state.errors.role}</FieldError>}
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
                        {!pending && <span>Регистрирај се</span>}
                    </Button>
                    {state?.message && <FieldError>{state.message}</FieldError>}
                </Field>
            </FieldGroup>
        </form>
    )
}
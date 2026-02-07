'use client'

import { Button } from "@/components/ui/button"
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Combobox, ComboboxChip, ComboboxChips, ComboboxChipsInput, ComboboxContent, ComboboxEmpty, ComboboxItem, ComboboxList, ComboboxValue, useComboboxAnchor } from "@/components/ui/combobox"
import { useActionState, useState } from "react"
import { signup } from "@/app/actions/auth"
import { Spinner } from "@/components/ui/spinner"
import React from "react"

export default function SignupPage() {

    const [state, action, pending] = useActionState(signup, undefined)
    const [toggleRole, setToggleRole] = useState("poster")
    const [toggleBusiness, setToggleBusiness] = useState("individual")
    const [selectedNiches, setSelectedNiches] = useState<string[]>([])
    const niches = ["Градежништво", "Домашни работи", "Транспорт", "Дизајн и креативни услуги", "Техничка поддршка", "Настава и обука", "Здравство и нега", "Професионални услуги", "Разно  "];
    const anchor = useComboboxAnchor()

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-5xl font-bold pt-10 w-md text-center">Бонус Работа - Креирај Профил</h1>
            <form action={action} className="w-full max-w-lg pt-15 pb-10">
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
                        <FieldLabel htmlFor="email">Email</FieldLabel>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            placeholder="ivanivanovski@mail.com"
                        />
                        {state?.errors?.email && <FieldError>{state.errors.email}</FieldError>}
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="name">Лозинка</FieldLabel>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Внесете лозинка"
                            name="password"
                        />
                        {state?.errors?.password && <>
                            {state.errors.password.map((error, index) => (
                                <FieldError key={index}>{error}</FieldError>
                            ))}
                        </>}
                    </Field>
                    <Field>
                        <FieldLabel htmlFor="phone">Телефон</FieldLabel>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="+389 555 111 222"
                            name="phone"
                        />
                        {state?.errors?.phone && <FieldError>{state.errors.phone}</FieldError>}
                    </Field>
                    <hr />
                    <Field>
                        <FieldLabel htmlFor="business">Тип на бизнис</FieldLabel>
                        <Select onValueChange={setToggleBusiness} defaultValue={toggleBusiness}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Одбери тип на бизнис" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="individual">Физичко лице</SelectItem>
                                    <SelectItem value="small_business">Мал Бизнис</SelectItem>
                                    <SelectItem value="company">Компанија</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <input type="hidden" name="business" value={toggleBusiness} />
                        {state?.errors?.business && <FieldError>{state.errors.business}</FieldError>}
                    </Field>
                    {(toggleBusiness === "small_business" || toggleBusiness === "company") && <Field>
                        <FieldLabel htmlFor="company_name">Име на вашиот бизнис</FieldLabel>
                        <Input
                            id="company_name"
                            name="company_name"
                            placeholder="Внесете име"
                            type="text"
                        />
                    </Field>}
                    <Field>
                        <FieldLabel htmlFor="role">Тип на корисник</FieldLabel>
                        <RadioGroup 
                            onValueChange={setToggleRole} 
                            defaultValue={toggleRole} 
                            className="w-full"
                            name="role"
                        >
                            <FieldLabel htmlFor="poster-plan">
                                <Field orientation="horizontal">
                                    <FieldContent>
                                        <FieldTitle>Постер</FieldTitle>
                                        <FieldDescription>
                                            Доколку сакате да објавувате огласи.
                                        </FieldDescription>
                                    </FieldContent>
                                    <RadioGroupItem value="poster" id="poster-plan" />
                                </Field>
                            </FieldLabel>
                            <FieldLabel htmlFor="tasker-plan">
                                <Field orientation="horizontal">
                                    <FieldContent>
                                        <FieldTitle>Таскер</FieldTitle>
                                        <FieldDescription>Доколку сакате да работите.</FieldDescription>
                                    </FieldContent>
                                    <RadioGroupItem value="tasker" id="tasker-plan" />
                                </Field>
                            </FieldLabel>
                            <FieldLabel htmlFor="both-plan">
                                <Field orientation="horizontal">
                                    <FieldContent>
                                        <FieldTitle>Двете улоги</FieldTitle>
                                        <FieldDescription>
                                            Доколку сакате и да објавувате огласи и да работите.
                                        </FieldDescription>
                                    </FieldContent>
                                    <RadioGroupItem value="both" id="both-plan" />
                                </Field>
                            </FieldLabel>
                            {state?.errors?.role && <FieldError>{state.errors.role}</FieldError>}
                        </RadioGroup>
                    </Field>
                    {(toggleRole === "tasker" || toggleRole === "both") && <Field>
                        <Combobox
                            multiple
                            autoHighlight
                            items={niches}
                            value={selectedNiches}
                            onValueChange={setSelectedNiches}
                            >
                            <ComboboxChips ref={anchor} className="w-full">
                                <ComboboxValue>
                                {(selectedNiches) => (
                                    <React.Fragment>
                                    {selectedNiches.map((niche: string) => (
                                        <ComboboxChip key={niche}>{niche}</ComboboxChip>
                                    ))}
                                    <ComboboxChipsInput />
                                    </React.Fragment>
                                )}
                                </ComboboxValue>
                            </ComboboxChips>
                            <ComboboxContent anchor={anchor}>
                                <ComboboxEmpty>Не се пронајдени ниши.</ComboboxEmpty>
                                <ComboboxList>
                                {(item) => (
                                    <ComboboxItem key={item} value={item}>
                                    {item}
                                    </ComboboxItem>
                                )}
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
                        <input type="hidden" name="niches" value={selectedNiches} />
                    </Field>}
                    <hr />
                    <Field orientation="horizontal">
                        <Button 
                            type="submit" 
                            className="w-full cursor-pointer"
                            disabled={pending}
                        >
                            {pending && <>
                                <Spinner data-icon="inline-start" /> 
                                <span>Вашиот профил се креира...</span>
                            </> }
                            {!pending && <span>Регистрирај се</span>} 
                        </Button>
                        {state?.message && <FieldError>{state.message}</FieldError>}
                    </Field>
                </FieldGroup>
            </form>
        </div>
    );
}
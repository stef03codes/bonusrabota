"use client"

import {Field, FieldError, FieldLabel} from "@/components/ui/field";
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useActionState, useState} from "react";
import {Input} from "@/components/ui/input";
import {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxContent,
    ComboboxEmpty, ComboboxItem, ComboboxList,
    ComboboxValue, useComboboxAnchor
} from "@/components/ui/combobox";
import React from "react";
import {Button} from "@/components/ui/button";
import {createProfile} from "@/app/profile/api/actions";
import {Spinner} from "@/components/ui/spinner";

export default function ProfileForm({ role }: { role: string }) {

    const [legal, setLegal] = useState('');
    const [business, setBusiness] = useState('');
    const [selectedNiches, setSelectedNiches] = useState<string[]>([])
    const [state, action, pending] = useActionState(createProfile, undefined);

    const niches = ["Градежништво", "Домашни работи", "Транспорт", "Дизајн и креативни услуги", "Техничка поддршка", "Настава и обука", "Здравство и нега", "Професионални услуги", "Разно  "];
    const anchor = useComboboxAnchor()

    return (
        <form action={action}>
            <Field>
                <FieldLabel htmlFor="tel">Телефонски број</FieldLabel>
                <Input
                    id="tel"
                    type="tel"
                    placeholder="Внесете телефонски број"
                    name="tel"
                    className='bg-white'
                />
                {state?.errors?.tel && <FieldError>{state.errors.tel}</FieldError>}
            </Field>
            <Field className='mt-3'>
                <FieldLabel htmlFor="legal">Тип на корисник</FieldLabel>
                <Select onValueChange={setLegal}>
                    <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="Одбери тип на корисник" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectItem value="individual">Физичко лице</SelectItem>
                            <SelectItem value="legal">Правно лице</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </Field>
            {legal === "legal" && (<>
                <Field className='mt-5'>
                    <FieldLabel htmlFor="legal_name">Име на правно лице</FieldLabel>
                    <Input
                        id="legal_name"
                        type="text"
                        placeholder="Внесете име"
                        name="legal_name"
                        className='bg-white'
                    />
                    {state?.errors?.legal_name && <FieldError>{state.errors.legal_name}</FieldError>}
                </Field>
                <Field className='mt-5'>
                    <FieldLabel htmlFor="business">Тип на бизнис</FieldLabel>
                    <Select onValueChange={setBusiness}>
                        <SelectTrigger className="w-full bg-white">
                            <SelectValue placeholder="Одбери тип на бизнис" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="small_business">Мал бизнис</SelectItem>
                                <SelectItem value="company">Претпријатие</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    {state?.errors?.business && <FieldError>{state.errors.business}</FieldError>}
                </Field>
            </>)}
            <input type="hidden" name="business" value={(legal === "individual" ? legal : business)} />
            {(role === "tasker" || role === "both") && (<>
                <Field className='mt-3'>
                    <FieldLabel htmlFor="legal">Одберете ниши (најмалку две)</FieldLabel>
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
                    {state?.errors?.niches && <FieldError>{state.errors.niches}</FieldError>}
                </Field>
            </>)}
            <Field className='mt-5'>
                <Button
                    type="submit"
                    className="w-full cursor-pointer"
                    disabled={pending}
                >
                    {pending && <>
                        <Spinner data-icon="inline-start" />
                        <span>Се креира профилот...</span>
                    </>}
                    {!pending && <span>Креирај профил</span>}

                </Button>
            </Field>
        </form>
    )
}
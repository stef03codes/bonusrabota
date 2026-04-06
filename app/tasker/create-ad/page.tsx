'use client'

import {Field, FieldLabel} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {useState} from "react";
import Marketing from "@/app/components/Marketing";
import {Button} from "@/components/ui/button";

export default function CreateAdPage() {

    const [city, setCity] = useState('');

    return (
        <main>
            <div className='p-7 rounded-md border mx-10'>
                <h1 className='text-center text-5xl font-bold'>Објавете го вашиот регламен материјал</h1>
            </div>
            <div className='flex justify-center items-start gap-3 mx-10 mt-10'>
                <div className='w-3/4'>
                    <h3 className='text-lg font-bold'>Форма за објавување реклама</h3>
                    <form action=''>
                        <Field className='mt-5'>
                            <FieldLabel>Додади слика</FieldLabel>
                            <Input type='file' />
                        </Field>
                        <Field className='mt-3'>
                            <FieldLabel>Опис</FieldLabel>
                            <Textarea placeholder='Напиши опис' />
                        </Field>
                        <Field className='mt-3'>
                            <FieldLabel>Контакт</FieldLabel>
                            <Input type='tel' />
                        </Field>
                        <Field className='mt-3'>
                            <FieldLabel>Град</FieldLabel>
                            <Select onValueChange={setCity}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Одбери град" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Градови</SelectLabel>
                                        <SelectItem value="skopje">Скопје</SelectItem>
                                        <SelectItem value="ohrid">Охрид</SelectItem>
                                        <SelectItem value="prilep">Прилеп</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <input type="hidden" name='city' value={city}/>
                        </Field>
                        <Field className='mt-3'>
                            <Button className='w-fit bg-green-400 cursor-pointer'>Објави реклама</Button>
                        </Field>
                    </form>
                </div>
                <div className='w-1/3'>
                    <Marketing />
                </div>
            </div>
        </main>
    )
}
'use client'

import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList
} from "@/components/ui/combobox";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem, SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {Button} from "@/components/ui/button";
import Marketing from "@/app/components/Marketing";
import {Textarea} from "@/components/ui/textarea";
import {useActionState, useState} from "react";
import {createPost} from "@/app/create-post/api/actions";
import {Spinner} from "@/components/ui/spinner";
import {toast} from "sonner";
import {FileInputButton} from "@/app/create-post/components/FileInputButton";

const categories = ['Ѕидар', 'Електрика', 'Чистење', 'Плочкар'];

export default function CreatePostPage() {
    const [city, setCity] = useState('');
    const [category, setCategory] = useState('');
    const [pendingPost, setPendingPost] = useState(false);
    const [createdPost, setCreatedPost] = useState(true);

    const [state, action, pending] = useActionState(createPost, undefined);

    const fakePosting = () => {
        setPendingPost(true);
        setTimeout(() => {
            setPendingPost(false)
            if(createdPost) {
                toast("Успешно објавивте оглас!");
            } else {
                toast("Грешка при обид за објавување на оглас!");
            }
        }, 1500);
    }

    return (
        <main>
            <div className='p-7 rounded-md border mx-10'>
                <h1 className='text-center text-5xl font-bold'>Обајви оглас и стани Постер</h1>
            </div>
            <div className='flex justify-center items-start gap-4 mx-10 mt-10'>
                <div className='w-1/3'>
                    <h3 className='text-lg font-bold'>Опис</h3>
                    <div className='rounded-md border p-3 mt-3'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis consectetur dolor in porro quidem tempora voluptatibus. Delectus ea expedita magnam quisquam, sequi sit voluptatibus. Beatae commodi debitis quae recusandae veniam.</p>
                    </div>
                </div>
                <div className='w-3/4'>
                    <h3 className='text-lg font-bold text-center'>Спецификации</h3>
                    <form action={action}>
                        <div className='flex justify-between items-center gap-3 mt-3 p-3 border rounded-md' id='filters'>
                            <div>
                                <Combobox items={categories} name='category'>
                                    <ComboboxInput placeholder="Одбери категорија" />
                                    <ComboboxContent>
                                        <ComboboxEmpty>Не е пронајдена категорија...</ComboboxEmpty>
                                        <ComboboxList>
                                            {categories.map((item) => (
                                                <ComboboxItem key={item} value={item}>
                                                    {item}
                                                </ComboboxItem>
                                            ))}
                                        </ComboboxList>
                                    </ComboboxContent>
                                </Combobox>
                                <input type="hidden" value={category}/>
                            </div>
                            <div>
                                <Select onValueChange={setCity}>
                                    <SelectTrigger>
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
                            </div>
                            <div>
                                <FileInputButton/>
                            </div>
                        </div>
                        <Textarea
                            className='mt-3 resize-none'
                            style={{ height: '200px !important' }}
                            placeholder="Напиши опис на услугата..."
                            name='description'
                        />
                        <Button className='w-full bg-green-400 mt-3' type='submit' onClick={fakePosting}>
                            {pending ? <>
                                <Spinner />
                                <span>Огласот се објавува...</span>
                            </> : <span>Објави оглас</span>}
                        </Button>
                    </form>
                </div>
                <div className='w-1/3'>
                    <Marketing />
                </div>
            </div>
        </main>
    );
}
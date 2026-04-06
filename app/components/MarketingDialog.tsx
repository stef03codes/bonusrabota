'use client';

import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {MarketingPost} from "@/app/components/Marketing";
import logo from "@/public/logo_malo.png";
import {useState} from "react";
import {StaticImageData} from "next/image";

interface Ad {
    name: string;
    niche: string;
    img: string | StaticImageData;
    rating: number;
}

const allAds: Ad[] = [
    { name: 'Грабоо ДООЕЛ', niche: 'Чистење', img: logo, rating: 5 },
    { name: 'Бојан Савиќ', niche: 'Електрика', img: 'none', rating: 4 },
    { name: 'Грабоо ДООЕЛ', niche: 'Чистење', img: logo, rating: 5 },
    { name: 'Бојан Савиќ', niche: 'Електрика', img: 'none', rating: 4 },
    { name: 'Грабоо ДООЕЛ', niche: 'Чистење', img: logo, rating: 5 },
    { name: 'Бојан Савиќ', niche: 'Електрика', img: 'none', rating: 4 },
    { name: 'Грабоо ДООЕЛ', niche: 'Чистење', img: logo, rating: 5 },
    { name: 'Бојан Савиќ', niche: 'Електрика', img: 'none', rating: 4 },
    { name: 'Грабоо ДООЕЛ', niche: 'Чистење', img: logo, rating: 5 },
    { name: 'Бојан Савиќ', niche: 'Електрика', img: 'none', rating: 4 }
]

export default function MarketingDialog() {

    const [ads, setAds] = useState<Ad[]>(allAds);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value.toLowerCase();

        if (!input) {
            setAds(allAds);
            return;
        }

        const results = ads.filter(ad =>
            ad.name.toLowerCase().includes(input)
        );

        setAds(results);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='mt-3 w-full bg-green-400 cursor-pointer'>Види ги сите</Button>
            </DialogTrigger>
            <DialogContent className='w-full'>
                <DialogHeader>
                    <DialogTitle>Сите реклами на Бонус Работа</DialogTitle>
                </DialogHeader>
                <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                    <Input
                        type="text"
                        className='me-2 mt-2'
                        onChange={handleSearch}
                        placeholder='Пребарај реклама...'
                    />
                    {ads.map((ad, index) => (
                        <MarketingPost
                            key={index}
                            name={ad.name}
                            img={ad.img}
                            niche={ad.niche}
                            rating={ad.rating}
                        />
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
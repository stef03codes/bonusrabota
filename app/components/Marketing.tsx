'use client';

import Image, {StaticImageData} from "next/image";
import logo from "@/public/logo_malo.png";
import {Button} from "@/components/ui/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import MarketingDialog from "@/app/components/MarketingDialog";

const ads = [
    { name: 'Грабоо ДООЕЛ', niche: 'Чистење', img: logo, rating: 5 },
    { name: 'Бојан Савиќ', niche: 'Електрика', img: 'none', rating: 4 }
];

export interface AdProps {
    name: string;
    img: string | StaticImageData;
    niche: string;
    rating: number;
}

export function MarketingPost({ name, img, niche, rating }: AdProps) {
    return (
        <div className={`rounded-md border mt-3 ${img === 'none' ? 'p-3' : 'py-1 pl-1 pr-3'}`}>
            <div className='flex justify-between items-center'>
                <div className='flex justify-start items-center'>
                    { img === 'none'
                        ? <div style={{
                            width: "50px",
                            height: "50px",
                            background: "purple",
                            borderRadius: "50%",
                            marginRight: '10px'
                        }}></div>
                        : <Image src={logo} alt='Logo' width={75} height={75} className='rounded-full' />
                    }
                    <div>
                        <h4 className='font-bold'>{name}</h4>
                        <p>{niche}</p>
                        <div className='text-yellow-400 text-xs'>
                            {(() => {
                                const stars = [];
                                for (let i = 0; i < rating; i++) {
                                    stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
                                }
                                return stars;
                            })()}
                        </div>
                    </div>
                </div>
                <Button className='bg-green-400 cursor-pointer'>Понуди оглас</Button>
            </div>
        </div>
    )
}

export default function Marketing() {
    return (
        <>
            {ads.map((ad, index) => (
                <MarketingPost
                    key={index}
                    name={ad.name}
                    img={ad.img}
                    niche={ad.niche}
                    rating={ad.rating}
                />
            ))}
            <MarketingDialog/>
        </>
    )
}
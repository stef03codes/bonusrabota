'use client'

import {Button} from "@/components/ui/button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {Spinner} from "@/components/ui/spinner";
import {toast} from "sonner";

interface PostProps {
    name: string;
    numPosts: number;
    description: string;
    createdAt: string;
    location: string;
}

export default function Post({ name, numPosts, description, createdAt, location } : PostProps) {
    const [pending, setPending] = useState(false);
    const applied = false;

    const apply = () => {
        setPending(true);
        setTimeout(() => {
            setPending(false)
            if(applied) {
                toast("Успешно аплициравте на огласот на " + name + "!");
            } else {
                toast("Неуспешно аплициравте на огласот на " + name + "!");
            }
        }, 1500);
    }

    return (
        <div>
            <div className='flex justify-between items-center'>
                <h3 className='text-lg font-bold'>{name} / објава {numPosts}</h3>
                <Button className='bg-green-400 cursor-pointer' onClick={apply} disabled={pending}>
                    { pending ? <>
                        <Spinner /><span> Само момент...</span>
                    </> : <span>Аплицирај</span> }
                </Button>
            </div>
            <div className='rounded-md border p-3 mt-3 mb-3'>
                <p>{description}</p>
                <div className='flex justify-between items-center mt-3'>
                    <div>
                        <p>{createdAt}</p>
                    </div>
                    <div>
                        <p>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span>{location}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
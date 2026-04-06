'use client';

import {Button} from "@/components/ui/button";

interface PostProps {
    postNumber: number;
    createdAt: string;
}

export function ActivePost({postNumber, createdAt}: PostProps) {
    return (
        <div className='border rounded-md p-3 mt-3 flex justify-between items-center'>
            <div>
                <h3 className='font-bold'>Објава #{postNumber}</h3>
                <p>{createdAt}</p>
            </div>
            <div>
                <Button className='me-2 cursor-pointer'>Детали</Button>
                <Button className='bg-green-400 cursor-pointer'>Апликанти</Button>
            </div>
        </div>
    )
}

export function DonePost({postNumber, createdAt}: PostProps) {
    return (
        <div className='border rounded-md p-3 mt-3 flex justify-between items-center'>
            <div>
                <h3 className='font-bold'>Објава #{postNumber}</h3>
                <p>{createdAt}</p>
            </div>
            <div>
                <Button className='me-2 cursor-pointer'>Детали</Button>
            </div>
        </div>
    )
}
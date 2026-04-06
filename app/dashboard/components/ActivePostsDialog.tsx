'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {ActivePost} from "@/app/dashboard/components/DashboardPost";

const activePosts = [
    { postNumber: 1, createdAt: 'пред 5 минути' },
    { postNumber: 2, createdAt: 'пред 2 недела' },
    { postNumber: 3, createdAt: 'пред 1 месец' },
    { postNumber: 1, createdAt: 'пред 5 минути' },
    { postNumber: 2, createdAt: 'пред 2 недела' },
    { postNumber: 3, createdAt: 'пред 1 месец' },
    { postNumber: 3, createdAt: 'пред 1 месец' }
];

export default function ActivePostsDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='mt-3 w-full bg-green-400 cursor-pointer'>Види ги сите</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Сите ваши објавени огласи</DialogTitle>
                </DialogHeader>
                <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                    {activePosts.map((post, index) => (
                        <ActivePost
                            postNumber={post.postNumber}
                            createdAt={post.createdAt}
                            key={index}
                        />
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
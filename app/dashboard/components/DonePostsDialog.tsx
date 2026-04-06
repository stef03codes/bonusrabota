import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {DonePost} from "@/app/dashboard/components/DashboardPost";

const donePosts = [
    { postNumber: 4, createdAt: '04/04/2026' },
    { postNumber: 5, createdAt: '28/03/2026' }
];

export default function DonePostsDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='mt-3 w-full bg-green-400 cursor-pointer'>Види ги сите</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Сите ваши завршени огласи</DialogTitle>
                </DialogHeader>
                <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                    {donePosts.map((post, index) => (
                        <DonePost
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
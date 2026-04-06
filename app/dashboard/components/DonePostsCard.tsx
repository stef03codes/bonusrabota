import {DonePost} from "@/app/dashboard/components/DashboardPost";
import DonePostsDialog from "@/app/dashboard/components/DonePostsDialog";

const donePosts = [
    { postNumber: 4, createdAt: '04/04/2026' },
    { postNumber: 5, createdAt: '28/03/2026' }
];

export default function DonePostsCard() {
    return (
        <div className='p-7 rounded-md border mt-3'>
            <h2 className='text-2xl font-bold'>Завршени (3)</h2>
            {donePosts.map((post, index) => (
                <DonePost
                    postNumber={post.postNumber}
                    createdAt={post.createdAt}
                    key={index}
                />
            ))}
            <DonePostsDialog />
        </div>
    );
}
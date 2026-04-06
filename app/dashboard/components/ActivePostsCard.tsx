import {ActivePost} from "@/app/dashboard/components/DashboardPost";
import ActivePostsDialog from "@/app/dashboard/components/ActivePostsDialog";

const activePosts = [
    { postNumber: 1, createdAt: 'пред 5 минути' },
    { postNumber: 2, createdAt: 'пред 2 недела' },
    { postNumber: 3, createdAt: 'пред 1 месец' }
];

export default function ActivePostsCard() {
    return (
        <div className='p-7 rounded-md border'>
            <h2 className='text-2xl font-bold'>Објави (5)</h2>
            {activePosts.map((post, index) => (
                <ActivePost
                    postNumber={post.postNumber}
                    createdAt={post.createdAt}
                    key={index}
                />
            ))}
            <ActivePostsDialog />
        </div>
    );
}
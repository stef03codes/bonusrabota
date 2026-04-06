import Marketing from "@/app/components/Marketing";
import ActivePostsCard from "@/app/dashboard/components/ActivePostsCard";
import UserDataCard from "@/app/dashboard/components/UserDataCard";
import ReviewCard from "@/app/dashboard/components/ReviewsCard";
import DonePostsCard from "@/app/dashboard/components/DonePostsCard";

export default function Dashboard() {
    return (
        <main>
            <div className='p-7 rounded-md border mx-10'>
                <h1 className='text-center text-5xl font-bold'>Профил</h1>
            </div>
            <div className='flex items-start justify-center gap-3 mx-10 mt-3'>
                <div className='w-1/3'>
                    <UserDataCard/>
                    <ReviewCard/>
                </div>
                <div className='w-1/3'>
                    <ActivePostsCard/>
                    <DonePostsCard/>
                </div>
                <div className='p-7 rounded-md border w-1/3'>
                    <h2 className='text-2xl font-bold'>Рекламен материјал</h2>
                    <Marketing/>
                </div>
            </div>
        </main>
    );
}
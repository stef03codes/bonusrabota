import { LogoutButton } from "@/app/auth/components/LogoutButton";
import getUserData, {UserAccount} from "@/app/poster/api/data";
import {getAuthToken} from "@/app/auth/api/session";
import {redirect} from "next/navigation";
import {Button} from "@/components/ui/button";

export default async function Dashboard() {

    const authToken = await getAuthToken();

    if(!authToken) {
        redirect("/auth/login");
    }

    const user: UserAccount = await getUserData(authToken);

    return (
        <main className='mx-10'>
            <div className='mt-10 p-5 bg-gray-100 rounded'>
                {/*<span>Регистриран на: {user.createdAt}</span>*/}
                <h1 className='text-7xl font-bold'>{user.name}</h1>
                <div className="ml-1 my-5 w-1/3 h-1 bg-green-500"></div>
                <div className="flex items-center">
                    <div>
                        <p className="me-3">{user.email}</p>
                    </div>
                    <div>
                        <p className="me-3">{user.tel}</p>
                    </div>
                    <div>
                        <p className="me-3">{user.business}</p>
                    </div>
                </div>
                <div className="flex items-center my-5">
                    <div className="me-3">
                        <Button>Уреди Профил</Button>
                    </div>
                    <div>
                        <Button>Избриши Профил</Button>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center my-5">
                <div className="p-3 bg-gray-100 rounded w-full me-3">
                    <h2>Огласи</h2>
                </div>
                <div className="p-3 bg-gray-100 rounded w-full me-3">
                    <h2>Соработки</h2>
                </div>
                <div className="p-3 bg-gray-100 rounded w-full">
                    <h2>Рејтинзи</h2>
                </div>
            </div>
        </main>
    );
}
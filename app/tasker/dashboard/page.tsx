import { LogoutButton } from "@/app/auth/components/LogoutButton";
import {getUserFromSession, User} from "@/app/auth/api/user";

export default async function Dashboard() {

    const user: User = await getUserFromSession();

    return (
        <main>
            <h1>Tasker Dashboard - Welcome {user.name}</h1>
            <LogoutButton/>
        </main>
    );
}
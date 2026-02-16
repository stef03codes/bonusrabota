import { LogoutButton } from "@/app/auth/components/LogoutButton";
import { getUserRole } from "@/app/auth/api/user";
import { redirect } from "next/navigation";

export default async function Dashboard() {

    const role = await getUserRole();

    if (!role) {
        redirect('/login');
    } else if(role === 'poster') {
        redirect('/permission-error');
    }

    return (
        <main>
            <h1>Tasker Dashboard</h1>
            <LogoutButton/>
        </main>
    );
}
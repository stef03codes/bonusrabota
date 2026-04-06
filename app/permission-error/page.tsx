import Link from "next/link";
import {getUserFromSession, User} from "@/app/auth/api/user";

export default async function PermissionError() {

   const user: User = await getUserFromSession();

    return (
        <main>
            <h1>Потребно е да си таскер за да пристапиш до оваа страница!</h1>
            <Link href={`/${user.role}/dashboard`}>Назад кон профил</Link>
        </main>
    );
}
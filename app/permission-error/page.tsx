import { getUserRole } from "@/lib/api/user";
import Link from "next/link";

export default async function PermissionError() {

    const role = await getUserRole();

    return (
        <main>
            <h1>Потребно е да си таскер за да пристапиш до оваа страница!</h1>
            <Link href={`/${role}/dashboard`}>Назад кон профил</Link>
        </main>
    );
}
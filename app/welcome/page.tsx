import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogoutButton } from "@/app/auth/components/LogoutButton";
import { getUserRole } from "@/app/auth/api/user";
import { redirect } from "next/navigation";

export default async function WelcomePage() {

    const role = await getUserRole();

    if(role !== "both") {
        redirect(role + "/dashboard");
    }

    return (
        <main>
            <h1>Добредојде на Бонус Работа! Како би сакал да се најавиш денеска?</h1>
            <div className="py-2">
                <Button asChild variant="default">
                    <Link href='/poster/dashboard' className="btn">Постер</Link>
                </Button>
                <Button asChild variant="default">
                    <Link href='/tasker/dashboard' className="btn">Таскер</Link>
                </Button>
            </div>
            <LogoutButton/>
        </main>
    )
}
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogoutButton } from "../components/LogoutButton";

export default async function WelcomePage() {
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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogoutButton } from "@/app/auth/components/LogoutButton";
import styles from './welcome.module.css'
import Image from "next/image";
import main_img from '@/public/workers.webp';

export default async function WelcomePage() {
    return (
        <main id={styles.welcome_page}>
            <Image
                src={main_img}
                alt='Workers'
                className={styles.main_img}
            />
            <div className={`${styles.wrapper} w-3/4 bg-green-400 px-7 py-10 rounded`}>
                <h1 className='text-center text-white text-6xl font-bold leading-18'>Добредојде на Бонус Работа! Како би сакал да се најавиш денеска?</h1>
                <div className="flex justify-center py-2 mt-5">
                    <Button asChild variant="default" className='text-lg text-black px-6 py-6 bg-green-400 me-3 border-2 border-black hover:bg-green-950 hover:text-white'>
                        <Link href='/poster/dashboard' className="btn">Постер</Link>
                    </Button>
                    <Button asChild variant="default" className='text-lg text-green-400 px-6 py-6'>
                        <Link href='/tasker/dashboard' className="btn">Таскер</Link>
                    </Button>
                </div>
            </div>
            <LogoutButton/>
        </main>
    )
}
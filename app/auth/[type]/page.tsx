import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import logo from "@/public/logo_malo.png"
import Link from "next/link";

export default async function AuthPage({params}: {
    params: Promise<{ type: string }>
}) {

    const { type } = await params;

    return (
        <main>
            <div className='w-1/3 mx-auto'>
                <div className="flex justify-center">
                    <Image src={logo} width={100} height={100} alt="Logo" />
                </div>
                <div className="px-10">
                    <h1 className="text-center text-4xl font-bold mt-5 mb-10">{ (type === "login") ? "Најави се" : "Регистрирај се" }</h1>
                    {(type === "login") ? <LoginForm /> : <SignupForm />}
                    <div className="my-5">
                        <hr />
                        <p className="mt-3">{(type === "login") ? "Сеуште немате сметка?" : "Веќе сте регистрирани?" }</p>
                    </div>
                    <Button
                        type="button"
                        className="w-full text-white bg-green-400 cursor-pointer hover:bg-gray-800 hover:text-white"
                        asChild={true}
                    >
                        {(type === "login") ?
                            <Link href='/auth/signup'>Регистрирај се</Link>
                            : <Link href='/auth/login'>Најави се</Link>
                        }
                    </Button>
                    <p className="text-center mt-5">&copy; Bonus Rabota 2026 - Сите права се задржани</p>
                </div>
            </div>
        </main>
    );
}
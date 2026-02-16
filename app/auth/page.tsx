"use client"

import { useActionState, useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import { Button } from "@/components/ui/button";
import { login, signup } from "./api/actions";

export default function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    // const formAction = isLogin ? login : signup;
    // const [state, action, pending] = useActionState(formAction, undefined);

    const toggleLoginForm = () => {
        if(isLogin) setIsLogin(false);
        else setIsLogin(true);
    }

    return (
        <main>
            <div className="flex flex-col items-center justify-center mt-20">
                <div className="w-96">
                    <h1 className="text-center text-5xl font-bold mb-14">Бонус Работа</h1>
                    {isLogin ? <LoginForm /> 
                    : <SignupForm />}
                    <div className="my-5">
                        <hr />
                        <p className="mt-3">{isLogin ? "Сеуште немате сметка?" : "Веќе сте регистрирани?" }</p>
                    </div>
                    <Button 
                        type="button" 
                        className="w-full bg-green-400 cursor-pointer hover:bg-green-300"
                        onClick={toggleLoginForm}
                    >
                        {isLogin ? "Регистрирај се" : "Најави се"}
                    </Button>
                </div>
            </div>
        </main>
    );
}
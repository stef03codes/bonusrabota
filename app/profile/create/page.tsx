import ProfileForm from "@/app/profile/components/ProfileForm";
import {getUserFromSession} from "@/app/auth/api/user";
import Image from "next/image";
import logo from "@/public/logo_malo.png";
import {redirect} from "next/navigation";

export default async function CreateProfile() {
    const user = await getUserFromSession();

    if(user.account_id) {
        redirect(`/${user.role}/dashboard`);
    }

    let displayRole = "";

    switch(user.role) {
        case "poster": displayRole = "Постер"; break;
        case "tasker": displayRole = "Таскер"; break;
        case "both": displayRole = "Full"; break;
    }

    return (
        <main>
            <div className="flex justify-center">
                <Image src={logo} width={100} height={100} alt="Logo" />
            </div>
            <h1 className='text-center text-4xl font-bold mt-5 mb-10'>
                <span>Довршете го вашиот</span><br/>
                <span>{displayRole} профил</span>
            </h1>
            <div className='w-96 mx-auto'>
                <ProfileForm role={user.role} />
                <p className="text-center mt-5">&copy; Bonus Rabota 2026 - Сите права се задржани</p>
            </div>
        </main>
    )
}
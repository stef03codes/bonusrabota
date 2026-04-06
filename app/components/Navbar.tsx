'use client'

import Image from "next/image";
import logo from "@/public/logo_malo.png";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import { faBell, faTags, faHome } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const notifications = [
    { title: 'Стефан Тасковски', text: 'аплицираше на твојот оглас #Оглас1' },
    { title: 'Божидар Дунчевиќ', text: 'аплицираше на твојот оглас #Оглас2' }
];

const offers = [
    { title: 'Петар Петровски', text: 'ти нуди да работиш на неговиот оглас #Оглас1' },
    { title: 'Иван Ивановски', text: 'ти нуди да работиш на неговиот #Оглас2' }
];

interface DropdownItemProps {
    title: string;
    text: string;
}

interface NavbarDropdownProps {
    name: string;
    dropdownItems: DropdownItemProps[];
}

function NavbarDropdown({name, dropdownItems}: NavbarDropdownProps) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <span>{name}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='p-3'>
                {dropdownItems.map((item, index) => (
                    <div className='cursor-pointer' key={index}>
                        <DropdownMenuItem>
                            <h4 className='font-bold'>{item.title}</h4>
                            <span>{item.text}</span>
                        </DropdownMenuItem>
                    </div>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default function Navbar() {
    return (
        <nav className='sticky top-0 left-0 bg-white'>
            <div className="container">
                <div className='flex justify-center items-center mx-10'>
                    <div className='w-1/3'>
                        <div className='flex items-center justify-start'>
                            <Button className='px-7 py-5 me-5' asChild>
                                <Link href="/create-post">Биди Постер</Link>
                            </Button>
                            <ul>
                                <li>
                                    <Link href="/">
                                        <FontAwesomeIcon icon={faHome} className='mr-1' />
                                        <span>Почетна</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <div className='flex justify-center'>
                            <Image src={logo} alt='Logo' width={75} height={75} />
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <div className='flex items-center justify-end'>
                            <ul className='flex me-5'>
                                <li className='me-5 cursor-pointer'>
                                    <FontAwesomeIcon icon={faBell} className='mr-1' />
                                    <NavbarDropdown
                                        name='Понуди'
                                        dropdownItems={offers}
                                    />
                                </li>
                                <li className='cursor-pointer'>
                                    <FontAwesomeIcon icon={faTags} className='mr-1' />
                                    <NavbarDropdown
                                        name='Известувања'
                                        dropdownItems={notifications}
                                    />
                                </li>
                            </ul>
                            <Button className='bg-green-400 px-7 py-5' asChild>
                                <Link href="/create-ad">Биди Таскер</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
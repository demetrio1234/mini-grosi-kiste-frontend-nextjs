"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import "../../app/styles.css";

const navLinks = [
    { name: 'Home', path: '/', key: 'Home' },
    { name: 'About', path: '/about', key: 'About' },
    { name: 'Register', path: '/register', key: 'Register' },
    { name: 'Login', path: '/login', key: 'Login' },
    { name: 'Forgotten Password', path: '/forgotten-password', key: 'Forgotten Password' },
]

export default function RootLayout({ children, }: { children: React.ReactNode, }) {

    const [input, setInput] = useState('');

    const pathname = usePathname();
    let isActive: boolean = false;

    return (
        <>
            <div>
                <nav>
                    {
                        navLinks.map((link) => {

                            isActive = pathname.startsWith(link.path);

                            return (
                                <>
                                    <li key={link.key}>
                                        <Link href={link.path} className={isActive ? 'text-blue-500' : 'text-gray-950'} key={link.key}>
                                            {link.name}
                                        </Link>
                                    </li>
                                </>
                            )
                        }
                        )
                    }

                </nav>
            </div>
            {children}
            <label htmlFor="forgotten-password-email">{"Type here your email"}</label>
            <input type="text" name="forgotten-password-email" onChange={(e) => setInput(e.target.value)} />
        </>
    )
}

/*
type NavLink = [{ name: string, path: string }, { name: string, path: string }, { name: string, path: string }]

const navLink : NavLink = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
]
*/
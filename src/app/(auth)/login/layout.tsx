'use client';

import { useRouter } from "next/navigation"

export default function RootLayout({ children, }: { children: React.ReactNode }) {

    const router = useRouter()
    const handleClick = () => {
        router.push('/forgotten-password');
        //router.replace('/forgotten-password'); //Navigate to the provided href. Replaces the current history entry.
        //router.back(); //Navigate back in history
        //router.forward(); //Navigate forward in history
    }

    return (
        <>
            {children}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Forgotten Password?</button>
        </>
    )
}

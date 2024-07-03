'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Card(
    {
        title, description, url, thumbnailUrl, isToggled
    }: {
        title: string,
        description: string,
        url: string,
        thumbnailUrl: string,
        isToggled: boolean
    }
) {
    const [isClicked, setIsClicked] = useState(isToggled);

    return (
        <div className='h-fit rounded'>
            <div className="grid grid-flow-row bg-red-300 h-fit w-40 p-5 rounded-lg"
                style={isClicked ? { backgroundColor: 'red' } : { backgroundColor: 'blue' }}
            >
                <div className="grid grid-flow-row bg-red-300 h-fit p-[1.5] rounded-lg"
                    onClick={() => {
                        setIsClicked(!isClicked);
                    }}>
                    <Image
                        src={thumbnailUrl}
                        alt={title}
                        width={800}
                        height={500}
                        className="w-16 xs:20 sm:25 md:w-32 lg:w-100"
                    />
                    <h3 className=' rounded-lg'>
                        {title}
                    </h3>
                    <p className=' rounded-lg'>
                        {description}
                    </p>
                </div>
                <div className='flex mt-2 cursor-pointer text-gray-200 hover:text-gray-900 hover:fill-slate-900 hover:stroke-slate-900 transition-colors rounded'>
                    <Link href={url} className='flex-col flex-auto text-center text-inherit rounded-lg'>
                        Read more
                    </Link>
                    <svg
                        className='flex-col flex-1 fill-inherit'
                        viewBox="0 0 24 24"
                        width={5}
                        xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier"
                            stroke-width="0">
                        </g>
                        <g id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round">
                        </g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M4 12H20M20 12L16 8M20 12L16 16" stroke="stroke-inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
            </div>
        </div>
    )
}
'use client';
import React from 'react'


import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Links = [
    {
        name : 'home',
        path : '/',

    },
    {
        name : 'services',
        path : '/services',

    },
    {
        name : 'Play Ground',
        path : '/Play_Ground',

    },
    {
        name : 'work',
        path : '/work',
    
    },
    {
        name : 'contact',
        path : '/contact',

    },
];

const Nav = () => {
    const pathname = usePathname();
        return (
        <nav className='flex gap-8'>
            {Links.map((linkItem, index) => {
                return (
                    <Link href={linkItem.path} key={index} 
                    className={`${linkItem.path === pathname ? 'text-accent border-b-2 border-accent' : ''}
                    captalize font-medium hover:text-accent transition-all duration-500 ease-in-out`}
>
                        {linkItem.name}
                    </Link>
                );
            })}
        </nav>
      );
    }
    
    export default Nav;
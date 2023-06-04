'use client'
import Link from "next/link"
import NavigationMenu from "./NavigationMenu";
import ProfileMenu from "./ProfileMenu";


export default function Header() {
    return (
        <header className="my-4">
            <nav className='h-11 flex justify-between items-center px-8'>
                <Link  href={'/'}><p className="text-2xl font-bold text-green-600">
                    onlypepes</p>
                </Link>
            
                <div className="flex gap-2">
                    <NavigationMenu />
                    <ProfileMenu />
                </div>
            </nav>

        </header>
    )
}
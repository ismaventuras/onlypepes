'use client'

import Gallery from "@/app/components/Gallery"
import { useSession } from "next-auth/react"
import Image from "next/image"


export default function Profile() {
    const {data:session} = useSession()

    if(session){
        return(
            <div>
                <div>
                    <p>Logged in as</p>
                    <div className="flex items-center gap-2">
                        <Image src={session.user.image || ""} alt="" width={32} height={32} className="rounded-full"/>
                        <p className="text-sm">{session.user.email}</p>
                    </div>
                </div>
                <div className="my-4">
                    <p className="text-xl">Your Bookmarks</p>
                    {session.user.bookmarks ? 
                    <Gallery pepes={session.user.bookmarks}/>
                    : <p>No bookmarks</p>
                    }
                </div>
            </div>
        )
    }

    return(
        <div>
            <p className="text-red-500">You are not logged in</p>
            <button>Sign in</button>
        </div>
    )
}
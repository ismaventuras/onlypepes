'use client'
import type { Pepe } from "@prisma/client";
import { MouseEvent, useEffect, useState } from "react"
import { useSession } from 'next-auth/react';
import { BookmarkIcon,BookmarkSlashIcon } from "@heroicons/react/20/solid";

type Props = {
    item: Pepe;
}

type BookmarkMethods = 'CREATE' | 'DELETE'

export default function BookmarkButon({ item }: Props) {
    const { data: session } = useSession()

    const [bookmarked, setBookmarked] = useState<boolean>();
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const existsBookmark = session?.user.bookmarks?.some(bookmark => bookmark.id === item.id)
        setBookmarked(existsBookmark)

    }, [session])



    async function onBookmarkClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        setLoading(true)
        const response = await fetch("/api/bookmark", {
            body: JSON.stringify({
                pepeId: item.id,
                method: bookmarked ? 'DELETE' : 'CREATE'
            }),
            headers: {
                'Content-Type': "application/json"
            },
            method: 'POST'
        })
        if (response.ok) {
            const { method } = await response.json()
            if (method === 'CREATE') {
                setBookmarked(true)
            } else {
                setBookmarked(false)
            }
        }
        setLoading(false)
    }

    if(!session){
        return <></>
    }
    // if(loading){
    //     return(
    //         <div>
    //             <p>loading</p>
    //         </div>
    //     )
    // }
    return (
        <button
            onClick={onBookmarkClick}            
        >
            {!bookmarked ? <BookmarkIcon  className="h-8 w-8"/> : <BookmarkSlashIcon className="h-8 w-8" />}
        </button>
    )
}
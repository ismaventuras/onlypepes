'use client'
import { type Pepe } from "@prisma/client";
import { type MouseEvent, useState } from "react"
import { useSession } from 'next-auth/react';
import { BookmarkIcon, BookmarkSlashIcon } from "@heroicons/react/20/solid";
import toggleBookmarkClient from "@/app/actions/toggleBookmarkClient";

type Props = {
    item: Pepe;
    isBookmarked?: boolean;
}

export default function BookmarkButon({ item, isBookmarked }: Props) {
    const { data: session } = useSession()
    const [bookmarked, setBookmarked] = useState(isBookmarked);

    async function onBookmarkClick(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const ok = await toggleBookmarkClient(item.id)
        if (ok) setBookmarked(prevValue => !prevValue)
    }

    if (!session) {
        return <></>
    }

    return (
        <button
            onClick={onBookmarkClick}
        >
            {!bookmarked ? <BookmarkIcon className="h-8 w-8" /> : <BookmarkSlashIcon className="h-8 w-8" />}
        </button>
    )
}
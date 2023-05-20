'use client'

import { Pepe } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import BookmarkButon from "./BoomarkButton";
import { ArrowUpCircleIcon } from "@heroicons/react/20/solid";

type Props = {
    item: Pepe;
}

export default function GalleryItem({ item }: Props) {

    return (
        <div key={item.id} className="flex flex-col gap-2 my-2  max-w-xl">
            <div className="flex  justify-center flex-col gap-2">
                <Image src={item.image} alt={"pepe"} width={512} height={512} className="rounded shadow-xl w-auto h-auto" />
                <div className="flex gap-2">
                    <Link
                        className=""
                        href={`/pepes/${item.id}`}
                    >
                        <ArrowUpCircleIcon className="w-8 h-8" />
                    </Link>
                    <BookmarkButon item={item} />
                </div>
            </div>
        </div>
    )
}
'use client'
import { Pepe } from "@prisma/client"
import GalleryItem from "./GalleryItem"
import { useEffect, useRef, useState } from "react"

type GalleryProps = {
    pepes: Pepe[];
    bookmarks?: Pepe[];
}
export default function Gallery({ pepes, bookmarks }: GalleryProps) {
    const pageSize = 20
    const sentinelRef = useRef(null);

    const [items, setItems] = useState<Pepe[]>([])
    const [page, setPage] = useState(1);


    useEffect(() => {
        const ref = sentinelRef.current
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && items.length < pepes.length) {
                loadItems();
            }
        }, { threshold: 1, root: null });

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref)
            }
        }
    }, [items])


    const loadItems = () => {
        const startIndex = (page - 1) * pageSize
        const endIndex = page * pageSize
        const newItems = pepes.slice(startIndex, endIndex);
        setItems(prevItems => [...prevItems, ...newItems])
        setPage(prevPage => prevPage + 1)
    }

    return (
        <>
            <div className="grid md:grid-cols-2 gap-12">
                {items.map(pepe => {
                    const isBookmarked = bookmarks?.some(bookmark => bookmark.id === pepe.id)
                    return <GalleryItem item={pepe} key={pepe.id} isBookmarked={isBookmarked} />

                })}
            </div>
            <div ref={sentinelRef} className="h-1 mt-20" />
        </>
    )
}
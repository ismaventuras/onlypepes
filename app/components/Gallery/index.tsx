'use client'
import { Pepe } from "@prisma/client"
import GalleryItem from "./GalleryItem"
import { useEffect, useRef, useState } from "react"

type Props = {
    pepes: Pepe[]
}
export default function Gallery({ pepes }: Props) {
    const pageSize = 20
    const sentinelRef = useRef(null);

    const [items, setItems] = useState<Pepe[]>([])
    const [page, setPage] = useState(1);


    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                loadItems();
            }
        }, { threshold: 0.5, root: null });

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current)
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
                {items.map(pepe => (
                    <GalleryItem item={pepe} key={pepe.id} />
                ))}
            </div>
            <div ref={sentinelRef} className="h-1 mt-20" />
        </>
    )
}
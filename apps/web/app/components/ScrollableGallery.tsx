'use client'
import { Pepe } from "@prisma/client"
import Image from "next/image";
import { useEffect, useRef, useState } from "react"


function GalleryItem({pepe}:{pepe:Pepe}){
    const [loaded,setLoaded] = useState(false)

    return(
        <div>
            {!loaded && 
            <div className="flex items-center justify-center">
                <p className="p-5">Loading...</p>
            </div>
            }
            <Image
                src={pepe.image}
                alt={`$Pepe #{pepe.id}`}
                width={512} height={512}
                className={`rounded shadow-xl w-auto h-auto `}
                onLoad={()=>setLoaded(true)}
            />
        </div>
    )
}

export default function Gallery({ pepes }: {pepes:Pepe[]}) {
    const pageSize = 10
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
            <div className="grid md:grid-cols-1 gap-12  place-items-center">
                {items.map(pepe => (
                    <GalleryItem pepe={pepe} key={pepe.id}/>                    
                ))}
            </div>
            <div ref={sentinelRef} className="h-1 mt-20" />
        </>
    )
}
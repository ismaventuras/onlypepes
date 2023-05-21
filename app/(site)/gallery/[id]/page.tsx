import Image from "next/image";
import { getPepeById } from "@/app/actions/getPepeById";
import PepeNotFound from "@/app/components/PepeNotFound";
import getUserBySession from "@/app/actions/getUserBySession";
import BookmarkButon from "@/app/components/Gallery/BoomarkButton";


export default async function SinglePepe({ params }: { params: { id: string } }) {
    const id = Number(params.id)
    const pepe = await getPepeById(id);
    const currentUser = await getUserBySession();
    const isBookmarked = currentUser?.bookmarks?.some(bookmark => bookmark.id === pepe?.id)
    

    if (!pepe) return (
        <PepeNotFound />
    )

    return (
        <div className="flex justify-center">
            <div>
                <div>                    
                    <p>ID: {pepe.id}</p>
                </div>
                <Image src={pepe.image} alt="" width={512} height={512} className=""/>
                {currentUser && 
                <BookmarkButon item={pepe} isBookmarked={isBookmarked}/>
                }
            </div>
        </div>
    )
}
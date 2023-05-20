import Gallery from "@/app/components/Gallery";
import { ArrowUpCircleIcon, BookmarkIcon, BookmarkSlashIcon } from "@heroicons/react/20/solid";
import { getAllPepes } from "@/app/actions/getAllPepes";



export default async function Pepes() {
    const pepes = await getAllPepes();
    return (
        <div className="flex flex-col gap-4">
            <p className="text-center text-3xl font-bold uppercase tracking-widest">gallery</p>
            <div className="border rounded-lg p-2 border-slate-600">
                <p className="text-center text-2xl ">Help</p>
                <div className="flex gap-4 sm:justify-evenly flex-wrap">
                    <div className="flex gap-2 items-center">
                        <ArrowUpCircleIcon className="w-8 h-8" />
                        <p className="">Opens pepe in a new page</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <BookmarkIcon className="w-8 h-8" />
                        <p className="">Saves pepe to your bookmarks</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <BookmarkSlashIcon className="w-8 h-8" />
                        <p className="">Removes pepe from your bookmarks</p>
                    </div>

                </div>
            </div>
            <Gallery pepes={pepes} />
        </div>
    )
}
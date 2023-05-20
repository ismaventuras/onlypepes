import Gallery from "@/app/components/Gallery";
import  getAllRandomPepes from "@/app/actions/getAllRandomPepes";
import getUserBySession from "@/app/actions/getUserBySession";
import HelpHero from "@/app/components/Gallery/HelpHero";



export default async function Pepes() {
    const pepes = await getAllRandomPepes();
    const currentUser = await getUserBySession();

    return (
        <div className="flex flex-col gap-4">
            <p className="text-center text-3xl font-bold uppercase tracking-widest">gallery</p>
            <HelpHero/>
            <Gallery pepes={pepes} bookmarks={currentUser?.bookmarks}/>
        </div>
    )
}
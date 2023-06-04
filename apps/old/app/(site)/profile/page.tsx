import getUserBySession from "@/app/actions/getUserBySession"
import Gallery from "@/app/components/Gallery"


export default async function Profile() {
    const currentUser = await getUserBySession()
    
    if(currentUser){
        return(
            <div>
                <div className="">
                    <p className="mb-2 text-xl">Logged in as</p>
                    <div className="flex items-center gap-2">
                        {currentUser.image && <img src={currentUser.image} alt="" width={32} height={32} className="rounded-full"/>}                
                        <p className="text-sm">{currentUser.email}</p>
                    </div>                    
                </div>

                <div className="my-4">
                    <p className="text-xl">Your Bookmarks</p>
                    {currentUser.bookmarks ? 
                    <Gallery pepes={currentUser.bookmarks} bookmarks={currentUser.bookmarks}/>
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
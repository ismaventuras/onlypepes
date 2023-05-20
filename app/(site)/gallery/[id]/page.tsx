import Image from "next/image";
import { getPepeById } from "@/app/actions/getPepeById";
import PepeNotFound from "@/app/components/PepeNotFound";


export default async function SinglePepe({ params }: { params: { id: string } }) {
    const id = Number(params.id)
    const pepe = await getPepeById(id);

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
            </div>
        </div>
    )
}
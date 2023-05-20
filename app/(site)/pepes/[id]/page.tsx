import Image from "next/image";
import { getPepeById } from "@/app/actions/getPepeById";


export default async function SinglePepe({ params }: { params: { id: string } }) {
    const pepe = await getPepeById(Number(params.id));

    if (!pepe) return (
        <div>
            not found
        </div>
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
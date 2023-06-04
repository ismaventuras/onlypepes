import Image from "next/image";

export default function PepeNotFound(){
    return(
        <div className="flex justify-center items-center flex-col text-center">
            <p className="text-green-400 text-3xl font-bold">PEPE NOT FOUND</p>
            <Image width={256} height={256} alt="" src={'/pepe-cry.gif'}/>
            <p className="text-green-200">The pepe you are looking for does not exist yet</p>
        </div>
    )
}
import Image from "next/image";

type CardWithImageProps = {
    img:string;
    title:string;
    description:string;
}  

export default function CardWithImage({img,description,title}:CardWithImageProps){
    return(
      <div className="mx-auto my-4 flex flex-col items-center border rounded-lg shadow md:flex-row md:max-w-2xl border-gray-700  hover:bg-gray-700">
        <div className="relative h-60 w-full">
          <Image fill src={img} alt="" className="object-contain"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority/>
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
      </div>
    )
  }
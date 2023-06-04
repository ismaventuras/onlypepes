import CardWithImage from "@/app/components/CardWithImage";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <Link href={'/gallery'}>
        <button className=" border border-green-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
          Go to gallery
        </button>
      </Link>
      <div className="flex gap-2 justify-around flex-wrap">
        <CardWithImage 
          img="/images/dirty-pepe.gif" 
          title="Hot pepes in your zone "
          description="You will find the hottest pepes on the whole internet, no subscription required"
        />
        <CardWithImage 
          img="/images/taking-notes.gif" 
          title="Bookmark the hottest"
          description="Bookmark your favorite pepes, you only need to sign in"
        />
        {/* <CardWithImage 
          img="/images/hacker.gif" 
          title="Pepe API"
          description="Developers can use our pepebase records on their apps"
        /> */}
      </div>
    </div>
  )
}

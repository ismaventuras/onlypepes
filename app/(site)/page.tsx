import CardWithImage from "@/app/components/CardWithImage";



export default function Home() {
  return (
    <div className="grid md:grid-cols-2 gap-2">
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
  )
}

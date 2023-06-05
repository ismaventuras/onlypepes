import Image from 'next/image'
import CardWithImage from './components/Card'
import {getRandomizedPepes} from 'database'
import Gallery from './components/ScrollableGallery';




export default async function Home() {
  const pepes = await getRandomizedPepes();
  
  return (
    <main className="p-2 sm:p-0">      
      <CardWithImage
        img="/assets/dirty-pepe.gif"
        title="Hot pepes in your zone "
        description="Just scroll"
      />
      <Gallery pepes={pepes}/>      
    </main>
  )
}

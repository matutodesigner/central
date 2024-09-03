import { Hero } from './_components/hero'
import { AbountOne } from './_components/abount-one'
import { Products } from './_components/products'
import { Cta } from './_components/cta'
import { AboutTwo } from './_components/about-two'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./_components/map').then((mod) => mod.Map), {
  ssr: false,
})

export default function Home() {
  return (
    <main>
      <Hero />
      <AbountOne />
      <Products />
      <Cta />
      <AboutTwo />
      <Map />
    </main>
  )
}

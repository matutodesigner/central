import { Hero } from './_components/hero'
import { AbountOne } from './_components/abount-one'
import { Products } from './_components/products'
import { Cta } from './_components/cta'
import { AboutTwo } from './_components/about-two'

export default function Home() {
  return (
    <main>
      <Hero />
      <AbountOne />
      <Products />
      <Cta />
      <AboutTwo />
    </main>
  )
}

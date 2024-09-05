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
      <iframe
        src="https://maps.google.com/maps?q=Rua+Paracatu%2C626-Santa+Terezinha-Juiz+de+Fora-MG&t=&z=16&ie=UTF8&iwloc=&output=embed"
        style={{ width: '100%', minHeight: '100px' }}
        className="h-96"
      ></iframe>
    </main>
  )
}

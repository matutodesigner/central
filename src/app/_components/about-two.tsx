import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import image from '@/images/predio.jpg'
export function AboutTwo() {
  return (
    <div className="bg-primary sm:py-40 py-20">
      <div className="container">
        <div className="grid sm:grid-cols-2 items-center">
          <div>
            <Image
              className="rounded-xl"
              src={image}
              alt="Conheça a nossa história"
            />
          </div>
          <div>
            <h3 className="sm:text-6xl text-3xl mt-8 sm:mt-0 text-balance font-semibold text-muted mb-4">
              Conheça a nossa história
            </h3>
            <p className="text-muted mb-8 text-balance">
              Em mais de 2 décadas, a Cirúrgica Central segue o compromisso com
              o mercado hospitalar especializado em sutura.
            </p>

            <Link href="/conheca">
              <Button variant={'secondary'}>Saiba mais</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

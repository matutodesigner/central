import Image from 'next/image'
import { Products } from './database'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AboutTwo } from '../_components/about-two'
export default function Page() {
  return (
    <div>
      <div className="bg-primary pb-40 pt-56 hero text-center text-white mb-40">
        <h1 className="md:text-6xl max-w-xl mx-auto text-3xl font-bold">
          Conheça nossa linha de produtos{' '}
        </h1>
      </div>
      <div className="container mb-40 ">
        <div className="grid sm:grid-cols-3 grid-cols-2 gap-8">
          {Products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg hover:shadow-2xl transition-shadow border border-t-4 border-t-primary shadow-lg mb-8"
            >
              <Image
                src={`/products/${product.image}`}
                alt={product.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover rounded-t-lg mb-4"
              />
              <Link href={`/produtos/${product.slug}`}>
                <h3 className="text-2xl transition-colors hover:text-primary/80 font-bold text-primary mb-2">
                  {product.title}
                </h3>
              </Link>
              <p className="text-muted-foreground mb-6 text-balance">
                {product.description.substring(0, 120)}...
              </p>
              <Link href={`/produtos/${product.slug}`}>
                <Button variant={'outline'}>Saiba mais</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <AboutTwo />
    </div>
  )
}

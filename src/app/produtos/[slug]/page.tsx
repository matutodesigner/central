import Image from 'next/image'
import { Products } from '../database'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { AboutTwo } from '@/app/_components/about-two'

export default function Page({ params }: { params: { slug: string } }) {
  const product = Products.find((product) => product.slug === params.slug)

  const relatedProducts = Products.filter((p) => p.slug !== params.slug).slice(
    0,
    3,
  )

  return (
    <div>
      <div className="bg-primary pb-40 pt-56 hero text-center text-white mb-40">
        <h1 className="md:text-6xl max-w-3xl mx-auto text-3xl font-bold">
          {product?.title}
        </h1>
      </div>
      <div className="container mb-40">
        <div className="flex">
          <div className="">
            <Image
              src={`/products/${product?.image}`}
              alt={product?.title ?? 'Produto'}
              width={500}
              height={300}
              className="rounded-xl shadow-xl border w-[500px]"
            />
          </div>
          <div
            className="w-1/2 px-8"
            dangerouslySetInnerHTML={{ __html: product?.content ?? '' }}
          />
        </div>
      </div>

      <div className="container mb-40">
        <h2 className="text-2xl font-bold mb-8">Produtos Relacionados</h2>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8">
          {relatedProducts.map((relatedProduct, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg hover:shadow-2xl transition-shadow border border-t-4 border-t-primary shadow-lg mb-8"
            >
              <Image
                src={`/products/${relatedProduct.image}`}
                alt={relatedProduct.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover rounded-t-lg mb-4"
              />
              <Link href={`/produtos/${relatedProduct.slug}`}>
                <h3 className="text-2xl transition-colors hover:text-primary/80 font-bold text-primary mb-2">
                  {relatedProduct.title}
                </h3>
              </Link>
              <p className="text-muted-foreground mb-6 text-balance">
                {relatedProduct.description.substring(0, 120)}...
              </p>
              <Link href={`/produtos/${relatedProduct.slug}`}>
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

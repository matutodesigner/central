'use client'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Image from 'next/image'
import Link from 'next/link'
import Autoplay from 'embla-carousel-autoplay'

import product1 from '@/images/carossel/produto-1.jpg'
import product2 from '@/images/carossel/produto-2.jpg'
import product3 from '@/images/carossel/produto-3.jpg'

export function Products() {
  return (
    <div className="relative">
      <div className="bg-primary absolute z-0 left-0 md:w-24 lg:w-[30%] w-9 h-full"></div>
      <div className="container">
        <div className="grid sm:grid-cols-2">
          <div className="bg-primary sm:p-24 p-12 z-10 rounded-r-full">
            <h3 className="text-white text-3xl sm:text-5xl font-semibold mb-8">
              Conheça nossa linha de produtos
            </h3>
            <Link href="/produtos">
              <Button variant={'secondary'}>Quero Conhecer</Button>
            </Link>
          </div>
          <div className="h-full hidden sm:block">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
              <CarouselContent>
                <CarouselItem className="flex items-center justify-center h-full">
                  <Image src={product1} width={400} alt="" />
                </CarouselItem>
                <CarouselItem className="flex items-center justify-center h-full">
                  <Image src={product2} width={400} alt="" />
                </CarouselItem>
                <CarouselItem className="flex items-center justify-center h-full">
                  <Image src={product3} width={400} alt="" />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}

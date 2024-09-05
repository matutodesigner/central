'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import imagePredio from '@/images/predio.jpg'
import { Target, Eye, Star } from 'lucide-react'
import dynamic from 'next/dynamic'
const Map = dynamic(() => import('../_components/map').then((mod) => mod.Map), {
  ssr: false,
})

export default function Conheca() {
  return (
    <div>
      <div className="bg-primary sm:pb-40 pb-20 sm:pt-56 pt-48 hero text-center text-white mb-40">
        <h1 className="md:text-6xl text-3xl font-bold">
          Conheça nossa História
        </h1>
      </div>
      <div className="container sm:mb-40 mb-20">
        <div className="grid sm:grid-cols-2">
          <div>
            <Image
              className="rounded-xl mb-12 sm:mb-0"
              src={imagePredio}
              alt="Conheça nossa história"
            />
          </div>
          <div className="space-y-8">
            <p>
              Em mais de 2 décadas, a <b>Cirúrgica Central</b> segue o
              compromisso com o mercado hospitalar especializado em sutura. Por
              isso, firmamos a parceria com quem compartilha dos nossos valores,
              sendo a<b>Medtronic</b> nossa principal fornecedora nesta jornada.
            </p>
            <p>
              Atendendo em toda <b>Zona da Mata Mineira</b>,{' '}
              <b>Sul Fluminense</b> e <b>Vale do Rio Doce</b>, como distribuidor
              autorizado, proporcionamos, nestes anos de história, a realização
              de procedimentos cirúrgicos com diversidade, qualidade e segurança
              dos materiais para sutura; fios cirúrgicos. Possibilitando, assim,
              o reconhecimento e a confiança de{' '}
              <b>Instituições e Profissionais da Saúde</b>, no trabalho que
              prestamos.
            </p>
            <p>
              Por isso, a Cirúrgica Central se mantém existente através da
              história de tantas famílias que cruzaram nossos serviços, sendo o
              elo pela vida.
            </p>
          </div>
        </div>
      </div>

      <div className="container sm:my-40 my-20">
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border shadow-lg">
            <div className="flex items-center mb-4">
              <Target className="text-primary w-8 h-8 mr-2" />
              <h3 className="text-2xl font-bold text-primary">Missão</h3>
            </div>
            <p>
              Proporcionar a todos os clientes, atendimento de excelência e
              referência a fim de promover, perpetuar nossa qualidade,
              baseando-se em uma política de trabalho eficaz e inovadora,
              destacando-se pelo diferencial enquanto distribuidor de produtos
              médicos hospitalares.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border shadow-lg">
            <div className="flex items-center mb-4">
              <Eye className="text-primary w-8 h-8 mr-2" />
              <h3 className="text-2xl font-bold text-primary">Visão</h3>
            </div>
            <p>
              Ser Excelência e líder como melhor distribuidora de
              produtos/correlatos no estado de Minas Gerais, modelo de confiança
              e eficiência prezando pela ética e respeito aos nossos clientes e
              colaboradores.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border shadow-lg">
            <div className="flex items-center mb-4">
              <Star className="text-primary w-8 h-8 mr-2" />
              <h3 className="text-2xl font-bold text-primary">Valores</h3>
            </div>
            <ul className="list-disc pl-5">
              <li>
                <strong>C</strong>ompetimento
              </li>
              <li>
                <strong>E</strong>tica
              </li>
              <li>
                <strong>N</strong>egócio
              </li>
              <li>
                <strong>T</strong>ransparência
              </li>
              <li>
                <strong>R</strong>esultado
              </li>
              <li>
                <strong>A</strong>dministração
              </li>
              <li>
                <strong>L</strong>egalidade
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary py-40">
        <div className="">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
              }),
            ]}
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="flex items-center justify-center h-full md:basis-1/2 lg:basis-1/5"
                >
                  <Image
                    src={image.url}
                    width={400}
                    height={300}
                    alt={`Foto ${index + 1}`}
                    className="rounded-xl"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <Map />
    </div>
  )
}

const images = [
  { url: '/images/central-1.jpg' },
  { url: '/images/central-2.jpg' },
  { url: '/images/central-3.jpg' },
  { url: '/images/central-4.jpg' },
  { url: '/images/central-5.jpg' },
  { url: '/images/central-6.jpg' },
  { url: '/images/central-7.jpg' },
  { url: '/images/central-8.jpg' },
  { url: '/images/central-9.jpg' },
  { url: '/images/central-10.jpg' },
]

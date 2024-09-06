import logo from '@/images/logo-completa.svg'
import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="pt-20 sm:pt-40 pb-20">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="order-2 sm:order-none">
            <nav className="flex flex-col space-y-5 text-center sm:text-left">
              <Link className="hover:text-primary transition-all" href="/">
                Home
              </Link>
              <Link
                className="hover:text-primary transition-all"
                href="/conheca"
              >
                Conheça
              </Link>
              <Link
                className="hover:text-primary transition-all"
                href="/produtos"
              >
                Produtos
              </Link>
            </nav>
          </div>
          <div className="order-1 sm:order-none flex justify-center">
            <Image src={logo} width={150} alt="" />
          </div>
          <div className="order-2 sm:order-none sm:text-right text-center">
            <p>
              <MapPin className="inline-block mr-2" />
              Rua Paracatu, 626 - lojas 35, 36, 37, 38, 39 e 49 Santa Terezinha
              - Juiz de Fora - MG
            </p>
            <p>
              <Phone className="inline-block mr-2" />
              (32) 3224-4446
            </p>
            <p>
              <Mail className="inline-block mr-2" />
              atendimento@cirurcentral.com.br
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

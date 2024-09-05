import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from './_components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cirurgica Central',
  description:
    'Nossos principais clientes são as instituições hospitalares e profissionais que realizam procedimentos cirúrgicos. Importamos produtos, especialmente da Medtronic e somos autorizados para atuar nas regiões da Zona da Mata Mineira.',
  keywords:
    'cirurgia, hospital, Medtronic, Zona da Mata Mineira, produtos cirúrgicos',
  authors: [{ name: 'Cirurgica Central' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'Cirurgica Central',
    description:
      'Nossos principais clientes são as instituições hospitalares e profissionais que realizam procedimentos cirúrgicos. Importamos produtos, especialmente da Medtronic e somos autorizados para atuar nas regiões da Zona da Mata Mineira.',
    url: 'https://www.cirurgicacentral.com.br',
    type: 'website',
    images: [
      {
        url: 'https://www.cirurgicacentral.com.br/images/Facebook-open-graph.png',
        width: 800,
        height: 600,
        alt: 'Cirurgica Central Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

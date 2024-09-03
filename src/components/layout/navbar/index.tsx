'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'

import logoSite from '@/images/logo.svg'

export function Navbar() {
  const [isFixed, setIsFixed] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div
      className={`container z-50 mx-auto ${isFixed ? 'fixed top-0 left-1/2 transform -translate-x-1/2 z-50' : 'mt-8 absolute left-1/2 transform -translate-x-1/2'}`}
    >
      <nav
        className={`bg-white rounded-full p-2 flex justify-between items-center ${isFixed ? 'shadow-lg' : ''}`}
      >
        <div>
          <Link href="/">
            <Image src={logoSite} alt="" />
          </Link>
        </div>
        <div className="hidden md:flex items-center">
          <Link
            href="/"
            className="font-semibold hover:text-primary transition-colors px-5"
          >
            Home
          </Link>
          <Link
            href="/conheca"
            className="font-semibold hover:text-primary transition-colors px-5"
          >
            Conheça
          </Link>
          <Link
            href="/produtos"
            className="font-semibold hover:text-primary transition-colors px-5"
          >
            Produtos
          </Link>
          <Link href="#">
            <Button size={'lg'}>Fale Conosco</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            <Menu />
          </Button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white mt-2 z-1 rounded-lg p-4 shadow-lg">
          <Link
            href="/"
            className="block font-semibold hover:text-primary transition-colors py-2"
          >
            Home
          </Link>
          <Link
            href="/conheca"
            className="block font-semibold hover:text-primary transition-colors py-2"
          >
            Conheça
          </Link>
          <Link
            href="/produtos"
            className="block font-semibold hover:text-primary transition-colors py-2"
          >
            Produtos
          </Link>
          <Link href="#" className="block mt-2">
            <Button size={'lg'} className="w-full">
              Fale Conosco
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}

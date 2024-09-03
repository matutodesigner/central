'use client'
import gsap from 'gsap'
import { Mouse } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function Hero() {
  const h1Ref = useRef(null)
  const pRef = useRef(null)
  const iconRef = useRef(null)

  useEffect(() => {
    const h1 = h1Ref.current
    const p = pRef.current
    const icon = iconRef.current

    const tl = gsap.timeline({
      defaults: {
        duration: 0.9,
      },
    })

    tl.fromTo(
      h1,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
      },
    )
      .fromTo(
        p,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
        },
        '-=0.65',
      )
      .fromTo(
        icon,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        '-=0.25',
      )
  }, [])

  return (
    <div className="h-[80vh] text-center w-full bg-primary bg-[url('/bg-hero.jpg')] bg-cover bg-center hero flex items-center flex-col justify-center text-white">
      <h1
        ref={h1Ref}
        className="max-w-[940px] font-bold mb-12 z-40 text-balance text-3xl sm:text-6xl"
      >
        Descubra Soluções Inovadoras em Saúde para Hospitais
      </h1>
      <p ref={pRef} className="max-w-[540px]">
        Na busca por cuidados excepcionais, a inovação é nossa bússola. Descubra
        conosco as soluções que transformam a saúde nos corredores dos
        hospitais.
      </p>

      <Mouse ref={iconRef} className="mt-12 animate-bounce" />
    </div>
  )
}

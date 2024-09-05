'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Logo1 from '@/images/marcas/assut_europe_central_cirurgica.jpg'
import Logo2 from '@/images/marcas/h_tech_material_cirurgico.jpg'
import Logo3 from '@/images/marcas/medtronic_sutura.jpg'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function AbountOne() {
  const sectionRef = useRef(null)
  const h2Ref = useRef(null)
  const pRef = useRef(null)
  const buttonRef = useRef(null)
  const logosRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const h2 = h2Ref.current
    const p = pRef.current
    const button = buttonRef.current
    const logos = logosRef.current

    gsap.fromTo(
      h2,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      },
    )

    gsap.fromTo(
      p,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      },
    )

    gsap.fromTo(
      button,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.4,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      },
    )

    gsap.fromTo(
      logos?.children || [],
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.6,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      },
    )
  }, [])

  return (
    <div
      ref={sectionRef}
      className="container sm:my-40 my-20 text-center flex flex-col space-y-8"
    >
      <h2 ref={h2Ref} className="text-primary font-bold text-3xl sm:text-5xl">
        Mais de 20 anos no mercado
      </h2>
      <p ref={pRef} className="max-w-xl mx-auto">
        Com agilidade e excelência, adquiridos de fornecedores qualificados,
        comprometidos em contribuir na solução de problemas de saúde, com uso de
        tecnologias de eficácia comprovada.
      </p>
      <div ref={buttonRef}>
        <Link href="/conheca">
          <Button variant={'outline'}>Saiba Mais</Button>
        </Link>
      </div>
      <div ref={logosRef} className="flex justify-center">
        <div>
          <Image src={Logo1} alt="" width={200} height={200} />
        </div>
        <div>
          <Image src={Logo2} alt="" width={200} height={200} />
        </div>
        <div>
          <Image src={Logo3} alt="" width={200} height={200} />
        </div>
      </div>
    </div>
  )
}

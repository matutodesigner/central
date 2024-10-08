import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Cta() {
  return (
    <div className="sm:my-40 my-20 p-6 flex justify-center items-center flex-col">
      <h2 className="text-primary font-bold text-center text-3xl sm:text-5xl max-w-5xl">
        Junte-se ao Futuro da Saúde: Produtos Cirúrgicos com Tecnologia
        Avançada.
      </h2>

      <div className="mt-8">
        <Link href="#">
          <Button>Saiba Mais</Button>
        </Link>
      </div>
    </div>
  )
}

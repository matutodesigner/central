import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Cta() {
  return (
    <div className="my-40 flex justify-center items-center flex-col">
      <h2 className="text-primary font-bold text-center text-5xl max-w-5xl">
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

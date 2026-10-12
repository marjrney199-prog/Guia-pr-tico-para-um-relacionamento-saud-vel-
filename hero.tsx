import Image from 'next/image'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <header className="relative isolate flex min-h-svh items-end overflow-hidden md:items-center">
      <Image
        src="/images/hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-background/30 md:bg-gradient-to-r md:from-background md:via-background/85 md:to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-32 md:py-24">
        <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <p className="mb-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            Diagnóstico emocional
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl md:text-7xl">
            Ela afastou-se <span className="italic text-primary">sem explicação?</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty md:text-xl">
            Descobre em apenas 2 minutos se estás a cometer erros que afastam mulheres sem perceber.
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
            <a
              href="#diagnostico"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold tracking-wide text-primary-foreground shadow-[0_10px_40px_-10px] shadow-primary/60 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
              FAZER O DIAGNÓSTICO GRATUITO
              <ArrowDown className="size-5 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <p className="border-l border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground">
              Mais de uma simples leitura.
              <br />
              <span className="text-foreground">Uma experiência de autoconhecimento.</span>
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

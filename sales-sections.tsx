import { Check, Quote, ShieldCheck, Star } from 'lucide-react'
import { CheckoutButton } from './checkout-button'
import { Reveal, SectionHeading } from './reveal'

const TESTIMONIALS = [
  { name: 'Jonathan Dias', text: 'Este ebook ajudou-me a perceber erros que estava a cometer há anos.' },
  { name: 'Rosa dos Santos', text: 'Pela primeira vez senti que alguém explicava relacionamentos de forma simples.' },
  { name: 'Pedro Ferreira', text: 'Muito mais útil do que vídeos aleatórios das redes sociais.' },
]

export function Testimonials() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Depoimentos" title="O que dizem os leitores" />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map(({ name, text }, i) => (
            <li key={name}>
              <Reveal delay={i * 100} className="h-full">
                <figure className="flex h-full flex-col rounded-2xl border bg-card p-8">
                  <Quote className="size-8 text-primary/40" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed">{`"${text}"`}</blockquote>
                  <figcaption className="mt-6 flex items-center justify-between border-t pt-5">
                    <span className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary" aria-hidden="true">
                        {name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                      </span>
                      <span className="font-medium">{name}</span>
                    </span>
                    <span className="flex gap-0.5 text-primary" aria-label="5 de 5 estrelas">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="size-4 fill-current" aria-hidden="true" />
                      ))}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const INCLUDED = [
  'Acesso imediato',
  'Download digital',
  'Leitura em telemóvel, computador e tablet',
  'Atualizações futuras',
]

export function Offer() {
  return (
    <section id="oferta" className="scroll-mt-8 bg-card/40 px-6 py-24 md:py-32">
      <Reveal className="mx-auto max-w-xl">
        <div className="relative overflow-hidden rounded-3xl border-2 border-primary/60 bg-background p-8 text-center shadow-2xl shadow-primary/10 md:p-12">
          <div className="absolute inset-x-0 top-0 h-1 bg-primary" aria-hidden="true" />
          <span className="inline-block rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Lançamento
          </span>
          <h2 className="mt-6 font-serif text-3xl font-semibold text-balance md:text-4xl">Oferta especial de lançamento</h2>

          <div className="mt-8">
            <p className="text-muted-foreground">
              De <span className="line-through">49,99 US$</span>
            </p>
            <p className="mt-1 flex items-start justify-center gap-1 font-serif font-semibold text-primary">
              <span className="mt-3 text-2xl">US$</span>
              <span className="text-7xl md:text-8xl">14,90</span>
            </p>
            <p className="mt-2 text-sm font-medium text-foreground">Poupas 70% hoje</p>
          </div>

          <ul className="mx-auto mt-8 max-w-sm space-y-3 text-left">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <CheckoutButton className="mt-10 w-full sm:w-full" />
          <p className="mt-4 text-xs text-muted-foreground">Pagamento 100% seguro processado pela Hotmart</p>
        </div>
      </Reveal>
    </section>
  )
}

export function Guarantee() {
  return (
    <section className="px-6 py-24">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border bg-card p-8 text-center md:flex-row md:p-10 md:text-left">
        <span className="flex size-20 shrink-0 items-center justify-center rounded-full border-2 border-primary text-primary">
          <ShieldCheck className="size-10" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-serif text-2xl font-semibold md:text-3xl">Compra sem risco</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Se o conteúdo não corresponder às tuas expectativas, poderás solicitar suporte através dos canais
            disponibilizados.
          </p>
        </div>
      </Reveal>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t px-6 py-24 md:py-36">
      <div className="absolute left-1/2 top-1/2 -z-10 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-3xl font-semibold leading-tight text-balance md:text-5xl">
          Estás pronto para descobrir o que <span className="italic text-primary">realmente</span> afasta uma mulher?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          A diferença entre continuar perdido e finalmente compreender os teus padrões emocionais pode começar hoje.
        </p>
        <div className="mt-10">
          <CheckoutButton size="xl" />
        </div>
      </Reveal>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t px-6 py-10 text-center text-sm text-muted-foreground">
      <p>
        {'© '}
        {new Date().getFullYear()} Porque Ela Se Afasta? Todos os direitos reservados.
      </p>
    </footer>
  )
}

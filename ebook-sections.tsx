import Image from 'next/image'
import {
  Brain,
  ClipboardCheck,
  Dumbbell,
  Eye,
  HeartHandshake,
  MessageCircleWarning,
  MessagesSquare,
  Scale,
  ShieldCheck,
  Target,
  Trophy,
  UserRound,
  CalendarCheck,
  FlaskConical,
} from 'lucide-react'
import { Reveal, SectionHeading } from './reveal'

export function EbookPresentation() {
  return (
    <section id="ebook" className="scroll-mt-8 border-t px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <Reveal className="order-2 md:order-1">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">O guia</p>
          <h2 className="font-serif text-4xl font-semibold leading-tight text-balance md:text-6xl">
            Porque ela se afasta?
          </h2>
          <p className="mt-3 font-serif text-lg italic text-muted-foreground md:text-xl">
            Os erros que os homens cometem sem perceber e como evitá-los
          </p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            O guia que revela os{' '}
            <span className="text-foreground">erros invisíveis que destroem a atração</span> e ensina como desenvolver
            maturidade emocional.
          </p>
        </Reveal>
        <Reveal delay={150} className="order-1 md:order-2">
          <div className="relative">
            <div className="absolute inset-8 -z-10 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
            <Image
              src="/images/ebook-cover.png"
              alt="Capa do ebook Porque Ela Se Afasta?"
              width={1408}
              height={768}
              className="w-full rounded-2xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

const BENEFITS = [
  { icon: Eye, text: 'Como identificar sinais de afastamento.' },
  { icon: HeartHandshake, text: 'Porque a carência destrói a atração.' },
  { icon: Trophy, text: 'Como desenvolver autoconfiança.' },
  { icon: MessagesSquare, text: 'Os erros de comunicação mais comuns.' },
  { icon: Scale, text: 'Como recuperar o equilíbrio emocional.' },
  { icon: ShieldCheck, text: 'Como construir relações saudáveis.' },
  { icon: UserRound, text: 'Como deixar de depender da validação dos outros.' },
  { icon: Brain, text: 'Como compreender melhor o comportamento feminino.' },
]

export function Benefits() {
  return (
    <section className="bg-card/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Benefícios" title="O que vais aprender" />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, text }, i) => (
            <li key={text}>
              <Reveal delay={i * 60} className="h-full">
                <div className="group h-full rounded-2xl border bg-background/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                  <span className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <p className="leading-relaxed">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const CHAPTERS = [
  'O Erro da Carência Emocional',
  'Quando o Homem Perde a Própria Identidade',
  'Ciúme, Controlo e Insegurança',
  'O Perigo da Rotina',
  'Erros de Comunicação',
  'Sinais de Perda de Interesse',
  'O Que Fazer Quando Ela Se Afasta',
  'Como Construir Uma Relação Saudável',
]

export function Chapters() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Conteúdo"
          title="Dentro do ebook"
          description="Oito capítulos diretos ao ponto para compreenderes os teus padrões e mudares a forma como te relacionas."
        />
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHAPTERS.map((title, i) => (
            <li key={title}>
              <Reveal delay={i * 60} className="h-full">
                <article className="relative h-full overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
                  <span className="font-serif text-5xl font-semibold text-primary/25" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Capítulo {i + 1}</p>
                  <h3 className="mt-2 font-serif text-xl font-semibold leading-snug">{title}</h3>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const BONUSES = [
  { icon: FlaskConical, title: 'Testes Psicológicos' },
  { icon: CalendarCheck, title: 'Plano de Transformação de 30 Dias' },
  { icon: Dumbbell, title: 'Exercícios Práticos' },
  { icon: Target, title: 'Desafios Semanais' },
  { icon: ClipboardCheck, title: 'Checklist de Maturidade Emocional' },
  { icon: MessageCircleWarning, title: '10 Frases Que Nunca Deves Usar Numa Discussão' },
]

export function Bonuses() {
  return (
    <section className="bg-card/40 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Incluído" title="Bónus exclusivos" />
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BONUSES.map(({ icon: Icon, title }, i) => (
            <li key={title}>
              <Reveal delay={i * 60} className="h-full">
                <div className="flex h-full items-center gap-4 rounded-2xl border border-primary/20 bg-gradient-to-br from-background to-card p-5 transition-all duration-300 hover:border-primary/60">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/40 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Bónus {i + 1}</p>
                    <p className="mt-1 font-medium leading-snug">{title}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

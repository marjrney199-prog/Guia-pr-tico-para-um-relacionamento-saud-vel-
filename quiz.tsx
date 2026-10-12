'use client'

import { useRef, useState } from 'react'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

const QUESTIONS = [
  {
    question: 'Qual destas situações melhor descreve o teu caso?',
    options: [
      'Ela afastou-se de repente.',
      'Terminámos recentemente.',
      'Ainda estamos juntos mas ela parece distante.',
      'Nunca percebo porque perco o interesse dela.',
    ],
    cta: 'CONTINUAR',
  },
  {
    question: 'Quando percebes que ela está distante, qual costuma ser a tua reação?',
    options: ['Envio mais mensagens.', 'Peço explicações.', 'Fico com ciúmes.', 'Tento ignorar a situação.'],
    cta: 'CONTINUAR',
  },
  {
    question: 'Com que frequência ela ocupa os teus pensamentos?',
    options: ['Poucas vezes.', 'Algumas vezes ao dia.', 'Muitas vezes ao dia.', 'Quase constantemente.'],
    cta: 'VER RESULTADO',
  },
]

export function Quiz() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(QUESTIONS.map(() => null))
  const [finished, setFinished] = useState(false)
  const resultRef = useRef<HTMLDivElement>(null)

  const current = QUESTIONS[step]
  const selected = answers[step]
  const progress = finished ? 100 : (step / QUESTIONS.length) * 100 + (selected !== null ? 100 / QUESTIONS.length / 2 : 0)

  function select(index: number) {
    setAnswers((prev) => prev.map((value, i) => (i === step ? index : value)))
  }

  function next() {
    if (selected === null) return
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1)
    } else {
      setFinished(true)
      requestAnimationFrame(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
    }
  }

  return (
    <section id="diagnostico" className="scroll-mt-8 px-6 py-24 md:py-32" aria-labelledby="quiz-title">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Diagnóstico gratuito</p>
          <h2 id="quiz-title" className="font-serif text-3xl font-semibold text-balance md:text-4xl">
            Responde com honestidade
          </h2>
        </div>

        <div className="rounded-2xl border bg-card p-6 shadow-2xl shadow-black/30 md:p-10">
          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between text-xs font-medium uppercase tracking-widest text-muted-foreground">
              <span>
                {finished ? 'Concluído' : `Pergunta ${step + 1} de ${QUESTIONS.length}`}
              </span>
              <span className="text-primary">{Math.round(progress)}%</span>
            </div>
            <div
              className="h-1.5 overflow-hidden rounded-full bg-secondary"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(progress)}
              aria-label="Progresso do diagnóstico"
            >
              <div
                className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {finished ? (
            <div className="flex flex-col items-center py-6 text-center animate-in fade-in zoom-in-95 duration-500">
              <span className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="size-7" aria-hidden="true" />
              </span>
              <p className="font-serif text-2xl font-semibold">Diagnóstico concluído</p>
              <p className="mt-2 text-muted-foreground">Vê abaixo o resultado da tua análise.</p>
            </div>
          ) : (
            <fieldset key={step} className="animate-in fade-in slide-in-from-right-4 duration-500">
              <legend className="mb-6 font-serif text-xl font-semibold leading-snug text-balance md:text-2xl">
                {current.question}
              </legend>
              <div className="flex flex-col gap-3">
                {current.options.map((option, index) => {
                  const isSelected = selected === index
                  return (
                    <label
                      key={option}
                      className={cn(
                        'flex cursor-pointer items-center gap-4 rounded-xl border px-5 py-4 transition-all duration-200 hover:border-primary/60 hover:bg-secondary/60 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-primary',
                        isSelected && 'border-primary bg-primary/10',
                      )}
                    >
                      <input
                        type="radio"
                        name={`q-${step}`}
                        value={index}
                        checked={isSelected}
                        onChange={() => select(index)}
                        className="sr-only"
                      />
                      <span
                        className={cn(
                          'flex size-5 shrink-0 items-center justify-center rounded-full border-2 border-muted-foreground/50 transition-colors',
                          isSelected && 'border-primary',
                        )}
                        aria-hidden="true"
                      >
                        <span
                          className={cn('size-2.5 rounded-full bg-primary transition-transform', isSelected ? 'scale-100' : 'scale-0')}
                        />
                      </span>
                      <span className="text-base leading-snug">{option}</span>
                    </label>
                  )
                })}
              </div>

              <button
                type="button"
                onClick={next}
                disabled={selected === null}
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {current.cta}
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </fieldset>
          )}
        </div>
      </div>

      {finished && (
        <div ref={resultRef} className="mx-auto mt-24 max-w-3xl scroll-mt-8 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <Result />
        </div>
      )}
    </section>
  )
}

function Result() {
  return (
    <div aria-live="polite">
      <div className="text-center">
        <p className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          <Sparkles className="size-4" aria-hidden="true" />
          Análise personalizada
        </p>
        <h2 className="font-serif text-3xl font-semibold text-balance md:text-5xl">Resultado da tua análise</h2>
      </div>

      <div className="mx-auto mt-8 max-w-2xl space-y-4 text-center text-lg leading-relaxed text-muted-foreground text-pretty">
        <p>
          Com base nas tuas respostas, existem sinais de comportamentos emocionais que podem estar a afetar as tuas
          relações sem que te apercebas.
        </p>
        <p className="text-foreground">Mas existe uma boa notícia.</p>
        <p>Esses padrões podem ser identificados, compreendidos e corrigidos.</p>
        <p>Foi exatamente por isso que criámos este guia.</p>
      </div>

      <div className="relative mt-12 overflow-hidden rounded-2xl border border-primary/40 bg-gradient-to-br from-card to-secondary p-8 text-center md:p-12">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" aria-hidden="true" />
        <p className="font-serif text-2xl font-semibold leading-snug text-balance md:text-3xl">
          O problema não é quem ela é.
          <br />
          <span className="text-primary">O problema é o que tu ainda não consegues ver.</span>
        </p>
        <a
          href="#ebook"
          className="group mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 font-semibold tracking-wide text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
        >
          QUERO DESCOBRIR MAIS
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}

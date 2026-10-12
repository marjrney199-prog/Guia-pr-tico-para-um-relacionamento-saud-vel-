import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, Download } from 'lucide-react'
import { DOWNLOAD_URL } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Obrigado pela Compra | Porque Ela Se Afasta?',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <main className="flex min-h-svh items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
        <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckCircle2 className="size-9" aria-hidden="true" />
        </span>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-primary">Obrigado pela compra</p>
        <h1 className="mt-4 font-serif text-4xl font-semibold text-balance md:text-5xl">Parabéns pela tua decisão.</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Clica no botão abaixo para descarregar imediatamente o teu ebook.
        </p>

        <Image
          src="/images/ebook-cover.png"
          alt="Capa do ebook Porque Ela Se Afasta?"
          width={1408}
          height={768}
          className="mt-10 w-full rounded-2xl border"
        />

        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-semibold tracking-wide text-primary-foreground shadow-[0_10px_40px_-10px] shadow-primary/60 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:w-auto"
        >
          <Download className="size-5" aria-hidden="true" />
          DESCARREGAR EBOOK
        </a>

        <p className="mt-6 text-sm text-muted-foreground">
          Também receberás o acesso no email usado na compra.{' '}
          <Link href="/" className="text-primary underline-offset-4 hover:underline">
            Voltar à página inicial
          </Link>
        </p>
      </div>
    </main>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Porque Ela Se Afasta? | Ebook de Relacionamentos',
  description:
    'Descobre os erros emocionais que afastam mulheres e aprende como construir relações mais fortes e saudáveis.',
  generator: 'v0.app',
  openGraph: {
    title: 'Porque Ela Se Afasta? | Ebook de Relacionamentos',
    description:
      'Descobre os erros emocionais que afastam mulheres e aprende como construir relações mais fortes e saudáveis.',
    images: ['/images/ebook-cover.png'],
    locale: 'pt_PT',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

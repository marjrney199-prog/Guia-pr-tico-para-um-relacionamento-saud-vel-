import { ArrowRight } from 'lucide-react'
import { CHECKOUT_URL } from '@/lib/config'
import { cn } from '@/lib/utils'

export function CheckoutButton({
  children = 'QUERO O MEU EBOOK AGORA',
  size = 'lg',
  className,
}: {
  children?: React.ReactNode
  size?: 'lg' | 'xl'
  className?: string
}) {
  return (
    <a
      href={CHECKOUT_URL}
      className={cn(
        'group inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary font-semibold tracking-wide text-primary-foreground shadow-[0_10px_40px_-10px] shadow-primary/60 transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-primary/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:w-auto',
        size === 'xl' ? 'px-10 py-6 text-lg md:text-xl' : 'px-8 py-4 text-base',
        className,
      )}
    >
      {children}
      <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </a>
  )
}

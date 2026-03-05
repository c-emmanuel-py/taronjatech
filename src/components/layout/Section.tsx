import { type ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  /** Optional aria-label for landmark */
  ariaLabel?: string
}

export function Section({ id, children, className, ariaLabel }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-16 sm:py-20 lg:py-24', className)}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  )
}

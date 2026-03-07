import { type ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  /** Optional aria-label for landmark */
  ariaLabel?: string
  /** For navbar contrast: 'dark' = section has dark bg (navbar uses light text) */
  dataTheme?: 'dark' | 'light'
}

export function Section({ id, children, className, ariaLabel, dataTheme }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('py-6 sm:py-8 lg:py-10', className)}
      aria-label={ariaLabel}
      data-theme={dataTheme}
    >
      {children}
    </section>
  )
}

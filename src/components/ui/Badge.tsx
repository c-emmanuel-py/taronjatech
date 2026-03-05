import { type ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-0.5 text-xs font-medium text-gray-700',
        className
      )}
    >
      {children}
    </span>
  )
}

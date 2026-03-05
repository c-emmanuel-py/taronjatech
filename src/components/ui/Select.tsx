import { type SelectHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/cn'

export const Select = forwardRef<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:bg-gray-50 disabled:opacity-70',
          className
        )}
        {...props}
      >
        {children}
      </select>
    )
  }
)
Select.displayName = 'Select'

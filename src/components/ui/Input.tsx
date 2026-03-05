import { type InputHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/cn'

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:bg-gray-50 disabled:opacity-70',
          className
        )}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

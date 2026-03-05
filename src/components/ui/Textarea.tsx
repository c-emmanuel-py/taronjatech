import { type TextareaHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/utils/cn'

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-900 placeholder-gray-500 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:bg-gray-50 disabled:opacity-70 min-h-[120px]',
        className
      )}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

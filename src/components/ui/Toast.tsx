import { useEffect } from 'react'
import { cn } from '@/utils/cn'

interface ToastProps {
  message: string
  type: 'success' | 'error'
  onClose: () => void
  duration?: number
}

export function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, duration)
    return () => clearTimeout(t)
  }, [onClose, duration])

  return (
    <div
      role="alert"
      className={cn(
        'fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg px-4 py-3 shadow-lg animate-fade-in',
        type === 'success' && 'bg-gray-900 text-white',
        type === 'error' && 'bg-red-600 text-white'
      )}
    >
      {message}
    </div>
  )
}

import { type ReactNode, useEffect } from 'react'
import { cn } from '@/utils/cn'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  className?: string
}

export function Modal({ isOpen, onClose, children, title, className }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'relative z-10 w-full max-w-md rounded-xl bg-white p-6 shadow-xl',
          className
        )}
      >
        {title && (
          <h2 id="modal-title" className="text-lg font-semibold text-gray-900 mb-4">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  )
}

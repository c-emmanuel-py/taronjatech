import { useState, useEffect } from 'react'
import { useI18n } from '@/i18n/useI18n'
import { cn } from '@/utils/cn'

export function BackToTop() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg transition-all duration-300 hover:bg-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      )}
      aria-label={t('ui.backToTop')}
    >
      <span aria-hidden>↑</span>
    </button>
  )
}

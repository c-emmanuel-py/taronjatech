import { useEffect, useState } from 'react'
import { useI18n } from '@/i18n/useI18n'
import { scrollToId } from '@/utils/scroll'
import { Container } from './Container'
import { LanguageToggle } from './LanguageToggle'
import { Button } from '@/components/ui/Button'
import { cn } from '@/utils/cn'
import logoMark from '@/assets/logo-mark.svg'

const CALENDLY_PLACEHOLDER = 'https://calendly.com'

const navLinks = [
  { id: 'services', key: 'nav.services' },
  { id: 'industries', key: 'nav.industries' },
  { id: 'process', key: 'nav.process' },
  { id: 'cases', key: 'nav.cases' },
  { id: 'security', key: 'nav.security' },
  { id: 'sow', key: 'nav.sow' },
  { id: 'team', key: 'nav.team' },
  { id: 'contact', key: 'nav.contact' },
] as const

export function Navbar() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent border-b border-white/10'
      )}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between gap-4"
          aria-label="Principal"
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2 text-xl font-semibold hover:opacity-90 transition-opacity"
          >
            <img
              src={logoMark}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 shrink-0"
            />
            <span className={scrolled ? 'text-gray-900' : 'text-white'}>
              {t('nav.logo')}
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ id, key }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(id)
                }}
                className={cn(
                  'text-sm font-medium transition-colors',
                  scrolled
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-gray-300 hover:text-white'
                )}
              >
                {t(key)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Button
              variant="primary"
              size="sm"
              asChild={false}
              className={!scrolled ? 'shadow-lg' : ''}
              onClick={() => window.open(CALENDLY_PLACEHOLDER, '_blank', 'noopener,noreferrer')}
            >
              {t('nav.cta')}
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}

import { useI18n } from '@/i18n/useI18n'
import { scrollToId } from '@/utils/scroll'
import { Container } from './Container'
import { LanguageToggle } from './LanguageToggle'
import { Button } from '@/components/ui/Button'
import logoMark from '@/assets/taronja-logo.png'

const CALENDLY_PLACEHOLDER = 'https://calendly.com'

const navLinks = [
  { id: 'services', key: 'nav.services' },
  { id: 'industries', key: 'nav.industries' },
  { id: 'process', key: 'nav.process' },
  { id: 'security', key: 'nav.security' },
  { id: 'sow', key: 'nav.sow' },
  { id: 'team', key: 'nav.team' },
  { id: 'contact', key: 'nav.contact' },
] as const

export function Navbar() {
  const { t } = useI18n()

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0B0D12]/95 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-300">
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
            className="flex items-center gap-2 text-xl font-semibold text-white hover:opacity-90 transition-opacity"
          >
            <img
              src={logoMark}
              alt="Taronja Tech logo"
              width={28}
              height={28}
              className="h-7 w-7 shrink-0"
            />
            <span>{t('nav.logo')}</span>
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
                className="text-sm font-medium text-gray-200 hover:text-white transition-colors"
              >
                {t(key)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageToggle variant="dark" />
            <Button
              variant="primary"
              size="sm"
              asChild={false}
              className="shadow-lg text-white"
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

import { useI18n } from '@/i18n/useI18n'
import { Container } from './Container'

const WHATSAPP_URL = 'https://wa.me/18293081609'
const EMAIL = 'admin@taronjats.com'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12" role="contentinfo">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-gray-900">Taronja Tech Solutions S.R.L.</p>
            <p className="mt-1 text-sm text-gray-600">{t('footer.location')}</p>
            <div className="mt-3 flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                {t('contact.whatsapp')}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm font-medium text-accent hover:text-accent-hover transition-colors"
              >
                {EMAIL}
              </a>
            </div>
          </div>
          <div className="text-sm text-gray-600 max-w-md">
            {t('footer.legal')}
          </div>
        </div>
      </Container>
    </footer>
  )
}

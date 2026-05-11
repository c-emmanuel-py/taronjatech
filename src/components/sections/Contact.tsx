import { useState } from 'react'
import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { Toast } from '@/components/ui/Toast'

const WHATSAPP_URL = 'https://wa.me/18293081609'
const EMAIL = 'admin@taronjats.com'

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const { t } = useI18n()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
    setToast({ message: t('contact.success'), type: 'success' })
    ;(e.target as HTMLFormElement).reset()
    setStatus('idle')
  }

  return (
    <Section id="contact" ariaLabel={t('contact.headline')}>
      <Container>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-medium text-gray-900 sm:text-4xl">{t('contact.headline')}</h2>
            <p className="mt-3 text-gray-600">{t('contact.sub')}</p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-accent">✓</span>
                <span>{t('contact.guarantee1')}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-accent">✓</span>
                <span>{t('contact.guarantee2')}</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-accent">✓</span>
                <span>{t('contact.guarantee3')}</span>
              </li>
            </ul>

            <p className="mt-8 text-sm font-medium text-gray-700">{t('contact.orContact')}</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')}
              >
                {t('contact.whatsapp')}
              </Button>
              <a href={`mailto:${EMAIL}`}>
                <Button variant="outline" size="md">
                  {t('contact.emailLabel')}: {EMAIL}
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div>
              <Input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder={t('contact.placeholderName')}
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <Input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder={t('contact.placeholderEmail')}
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <Input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder={t('contact.placeholderCompany')}
                disabled={status === 'loading'}
              />
            </div>
            <div>
              <Textarea
                id="contact-message"
                name="message"
                required
                placeholder={t('contact.placeholderMessage')}
                disabled={status === 'loading'}
                rows={4}
              />
            </div>
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? t('contact.sending') : `${t('contact.cta')} →`}
            </Button>
            <p className="text-center text-xs text-gray-400">{t('contact.reassurance')}</p>
          </form>
          </div>
        </div>
      </Container>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </Section>
  )
}

import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'

const members = [
  {
    nameKey: 'team.emmanuel',
    roleKey: 'team.emmanuelRole',
    bioKey: 'team.emmanuelBio',
    initials: 'EO',
  },
  {
    nameKey: 'team.nicole',
    roleKey: 'team.nicoleRole',
    bioKey: 'team.nicoleBio',
    initials: 'NT',
  },
] as const

export function Team() {
  const { t } = useI18n()

  return (
    <Section id="team" ariaLabel={t('team.title')}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {t('team.title')}
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          {members.map((member) => (
            <Card key={member.nameKey} className="text-center">
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-xl font-semibold text-gray-600"
                aria-hidden
              >
                {member.initials}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{t(member.nameKey)}</h3>
              <p className="text-sm font-medium text-accent">{t(member.roleKey)}</p>
              <p className="mt-2 text-sm text-gray-600">{t(member.bioKey)}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}

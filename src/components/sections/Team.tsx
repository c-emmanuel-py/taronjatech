import { useState } from 'react'
import { useI18n } from '@/i18n/useI18n'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Card } from '@/components/ui/Card'
import { Modal } from '@/components/ui/Modal'

const members = [
  {
    nameKey: 'team.emmanuel',
    roleKey: 'team.emmanuelRole',
    bioKey: 'team.emmanuelBio',
    descriptionKey: 'team.emmanuelDescription',
    initials: 'EO',
    image: undefined as string | undefined,
  },
  {
    nameKey: 'team.nicole',
    roleKey: 'team.nicoleRole',
    bioKey: 'team.nicoleBio',
    descriptionKey: 'team.nicoleDescription',
    initials: 'NT',
    image: '/team/nicole.png',
  },
  {
    nameKey: 'team.elias',
    roleKey: 'team.eliasRole',
    bioKey: 'team.eliasBio',
    descriptionKey: 'team.eliasDescription',
    initials: 'ER',
    image: undefined as string | undefined,
  },
  {
    nameKey: 'team.kelvin',
    roleKey: 'team.kelvinRole',
    bioKey: 'team.kelvinBio',
    descriptionKey: 'team.kelvinDescription',
    initials: 'KC',
    image: undefined as string | undefined,
  },
  {
    nameKey: 'team.david',
    roleKey: 'team.davidRole',
    bioKey: 'team.davidBio',
    descriptionKey: 'team.davidDescription',
    initials: 'DT',
    image: undefined as string | undefined,
  },
] as const

type Member = (typeof members)[number]

export function Team() {
  const { t } = useI18n()
  const [selectedMember, setSelectedMember] = useState<Member | null>(null)

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
            <div
              key={member.nameKey}
              role="button"
              tabIndex={0}
              onClick={() => setSelectedMember(member)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setSelectedMember(member)
                }
              }}
              className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-xl"
            >
              <Card className="text-center transition-all duration-200 hover:shadow-lg hover:border-accent/30">
              <div
                className="mx-auto flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-200 text-xl font-semibold text-gray-600"
                aria-hidden
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt=""
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  member.initials
                )}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{t(member.nameKey)}</h3>
              <p className="text-sm font-medium text-accent">{t(member.roleKey)}</p>
              <p className="mt-2 text-sm text-gray-600">{t(member.bioKey)}</p>
              <p className="mt-2 text-xs text-gray-500">{t('team.clickForDescription')}</p>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      <Modal
        isOpen={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
        title={selectedMember ? t(selectedMember.nameKey) : undefined}
        className="max-w-2xl overflow-hidden px-6 pb-0 pt-6"
      >
        {selectedMember && (
          <div className="flex flex-col sm:flex-row -mx-6 sm:mt-4">
            <div className="w-full sm:w-64 sm:min-h-[300px] shrink-0 bg-gray-100">
              {selectedMember.image ? (
                <img
                  src={selectedMember.image}
                  alt=""
                  width={256}
                  height={300}
                  className="w-full h-64 sm:h-full sm:min-h-[300px] object-cover object-top"
                />
              ) : (
                <div className="w-full h-64 sm:min-h-[300px] flex items-center justify-center bg-gray-200">
                  <span className="text-4xl font-semibold text-gray-600">
                    {selectedMember.initials}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-1 pl-6 pr-6 py-6 sm:py-4 justify-center min-w-0">
              <p className="text-sm font-medium text-accent">
                {t(selectedMember.roleKey)}
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {t(selectedMember.descriptionKey)}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </Section>
  )
}

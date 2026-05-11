export type ShowcaseProjectId = 'insync' | 'naniko' | 'antoni'

export type ShowcaseProject = {
  id: ShowcaseProjectId
  logoSrc: string | null
}

export const projectsShowcase: ShowcaseProject[] = [
  { id: 'insync', logoSrc: '/projects/insync.png' },
  { id: 'naniko', logoSrc: '/projects/naniko.png' },
  { id: 'antoni', logoSrc: '/projects/antoni.png' },
]

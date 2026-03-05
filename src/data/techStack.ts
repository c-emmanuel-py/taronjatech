import sonarqubeLogo from '@/assets/logos/sonarqube.svg'
import playwrightLogo from '@/assets/logos/playwright.svg'
import awsLogo from '@/assets/logos/aws.svg'

export type TechCategory = 'frontend' | 'mobile' | 'backend' | 'db' | 'devops' | 'testing' | 'cloud'

/** Base URL for Simple Icons CDN: cdn.simpleicons.org/slug/color (color optional, uses brand default) */
const icon = (slug: string, color?: string) =>
  color
    ? `https://cdn.simpleicons.org/${slug}/${color.replace('#', '')}`
    : `https://cdn.simpleicons.org/${slug}`

export interface TechItem {
  name: string
  category: TechCategory
  /** Logo URL (SVG from CDN or local asset) */
  logo: string
}

export const techStack: TechItem[] = [
  { name: 'React', category: 'frontend', logo: icon('react', '#61DAFB') },
  { name: 'Vite', category: 'frontend', logo: icon('vite', '#646CFF') },
  { name: 'React Native', category: 'mobile', logo: icon('react', '#61DAFB') },
  { name: 'Spring Boot', category: 'backend', logo: icon('springboot', '#6DB33F') },
  { name: 'Node', category: 'backend', logo: icon('nodedotjs', '#339933') },
  { name: 'Python', category: 'backend', logo: icon('python', '#3776AB') },
  { name: 'PostgreSQL', category: 'db', logo: icon('postgresql', '#4169E1') },
  { name: 'Docker', category: 'devops', logo: icon('docker', '#2496ED') },
  { name: 'Jenkins', category: 'devops', logo: icon('jenkins', '#D24939') },
  { name: 'GitHub Actions', category: 'devops', logo: icon('githubactions', '#2088FF') },
  { name: 'SonarQube', category: 'testing', logo: sonarqubeLogo },
  { name: 'Playwright', category: 'testing', logo: playwrightLogo },
  { name: 'AWS (S3, Secrets, CloudWatch)', category: 'cloud', logo: awsLogo },
  { name: 'Railway', category: 'cloud', logo: icon('railway', '#0B0D0E') },
]

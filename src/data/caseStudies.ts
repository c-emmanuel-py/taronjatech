export interface CaseStudy {
  id: string
  problemKey: string
  solutionKey: string
  resultKey: string
  tags: ('backend' | 'mobile' | 'devops' | 'integrations')[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'A',
    problemKey: 'cases.problemA',
    solutionKey: 'cases.solutionA',
    resultKey: 'cases.resultA',
    tags: ['backend', 'integrations'],
  },
  {
    id: 'B',
    problemKey: 'cases.problemB',
    solutionKey: 'cases.solutionB',
    resultKey: 'cases.resultB',
    tags: ['mobile'],
  },
  {
    id: 'C',
    problemKey: 'cases.problemC',
    solutionKey: 'cases.solutionC',
    resultKey: 'cases.resultC',
    tags: ['devops'],
  },
]

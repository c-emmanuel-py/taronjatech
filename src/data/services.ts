export type ServiceCategory = 'A' | 'B' | 'C' | 'D'

export interface ServiceItem {
  id: string
  category: ServiceCategory
  titleKey: string
  descKey: string
  deliverableKeys: [string, string, string]
}

export const services: ServiceItem[] = [
  {
    id: 'web-apps',
    category: 'A',
    titleKey: 'services.webAppsTitle',
    descKey: 'services.webAppsDesc',
    deliverableKeys: ['services.webApps1', 'services.webApps2', 'services.webApps3'],
  },
  {
    id: 'mobile-apps',
    category: 'A',
    titleKey: 'services.mobileAppsTitle',
    descKey: 'services.mobileAppsDesc',
    deliverableKeys: ['services.mobileApps1', 'services.mobileApps2', 'services.mobileApps3'],
  },
  {
    id: 'backend-apis',
    category: 'A',
    titleKey: 'services.backendApisTitle',
    descKey: 'services.backendApisDesc',
    deliverableKeys: ['services.backendApis1', 'services.backendApis2', 'services.backendApis3'],
  },
  {
    id: 'integrations',
    category: 'A',
    titleKey: 'services.integrationsTitle',
    descKey: 'services.integrationsDesc',
    deliverableKeys: ['services.integrations1', 'services.integrations2', 'services.integrations3'],
  },
  {
    id: 'internal-systems',
    category: 'A',
    titleKey: 'services.internalSystemsTitle',
    descKey: 'services.internalSystemsDesc',
    deliverableKeys: ['services.internalSystems1', 'services.internalSystems2', 'services.internalSystems3'],
  },
  {
    id: 'docker',
    category: 'B',
    titleKey: 'services.dockerTitle',
    descKey: 'services.dockerDesc',
    deliverableKeys: ['services.docker1', 'services.docker2', 'services.docker3'],
  },
  {
    id: 'cicd',
    category: 'B',
    titleKey: 'services.cicdTitle',
    descKey: 'services.cicdDesc',
    deliverableKeys: ['services.cicd1', 'services.cicd2', 'services.cicd3'],
  },
  {
    id: 'observability',
    category: 'B',
    titleKey: 'services.observabilityTitle',
    descKey: 'services.observabilityDesc',
    deliverableKeys: ['services.observability1', 'services.observability2', 'services.observability3'],
  },
  {
    id: 'envs',
    category: 'B',
    titleKey: 'services.envsTitle',
    descKey: 'services.envsDesc',
    deliverableKeys: ['services.envs1', 'services.envs2', 'services.envs3'],
  },
  {
    id: 'hardening',
    category: 'B',
    titleKey: 'services.hardeningTitle',
    descKey: 'services.hardeningDesc',
    deliverableKeys: ['services.hardening1', 'services.hardening2', 'services.hardening3'],
  },
  {
    id: 'arch-design',
    category: 'C',
    titleKey: 'services.archDesignTitle',
    descKey: 'services.archDesignDesc',
    deliverableKeys: ['services.archDesign1', 'services.archDesign2', 'services.archDesign3'],
  },
  {
    id: 'audit',
    category: 'C',
    titleKey: 'services.auditTitle',
    descKey: 'services.auditDesc',
    deliverableKeys: ['services.audit1', 'services.audit2', 'services.audit3'],
  },
  {
    id: 'refactor',
    category: 'C',
    titleKey: 'services.refactorTitle',
    descKey: 'services.refactorDesc',
    deliverableKeys: ['services.refactor1', 'services.refactor2', 'services.refactor3'],
  },
  {
    id: 'doc-handover',
    category: 'C',
    titleKey: 'services.docHandoverTitle',
    descKey: 'services.docHandoverDesc',
    deliverableKeys: ['services.docHandover1', 'services.docHandover2', 'services.docHandover3'],
  },
  {
    id: 'roadmap',
    category: 'C',
    titleKey: 'services.roadmapTitle',
    descKey: 'services.roadmapDesc',
    deliverableKeys: ['services.roadmap1', 'services.roadmap2', 'services.roadmap3'],
  },
  {
    id: 'etl',
    category: 'D',
    titleKey: 'services.etlTitle',
    descKey: 'services.etlDesc',
    deliverableKeys: ['services.etl1', 'services.etl2', 'services.etl3'],
  },
  {
    id: 'automation',
    category: 'D',
    titleKey: 'services.automationTitle',
    descKey: 'services.automationDesc',
    deliverableKeys: ['services.automation1', 'services.automation2', 'services.automation3'],
  },
  {
    id: 'dashboards',
    category: 'D',
    titleKey: 'services.dashboardsTitle',
    descKey: 'services.dashboardsDesc',
    deliverableKeys: ['services.dashboards1', 'services.dashboards2', 'services.dashboards3'],
  },
  {
    id: 'bots',
    category: 'D',
    titleKey: 'services.botsTitle',
    descKey: 'services.botsDesc',
    deliverableKeys: ['services.bots1', 'services.bots2', 'services.bots3'],
  },
  {
    id: 'workflows',
    category: 'D',
    titleKey: 'services.workflowsTitle',
    descKey: 'services.workflowsDesc',
    deliverableKeys: ['services.workflows1', 'services.workflows2', 'services.workflows3'],
  },
]

export const categoryKeyMap: Record<ServiceCategory, string> = {
  A: 'services.categoryA',
  B: 'services.categoryB',
  C: 'services.categoryC',
  D: 'services.categoryD',
}

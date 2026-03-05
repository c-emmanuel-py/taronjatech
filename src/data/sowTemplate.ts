import type { Lang } from '../i18n/translations'

export function getSowContent(lang: Lang): string {
  const isEs = lang === 'es'
  return isEs ? sowEs : sowEn
}

const sowEs = `# Statement of Work — Ejemplo
## Taronja Tech Solutions S.R.L.

---

## 1. Alcance (Scope)
Descripción del proyecto, objetivos y límites del trabajo. Incluye funcionalidades incluidas y excluidas.

## 2. Entregables (Deliverables)
- Código fuente en repositorio accesible
- Documentación técnica (README, ADRs, runbooks según proyecto)
- Sesión de handover
- Entregables específicos acordados por fase

## 3. Timeline
- Fase 1: [fechas]
- Fase 2: [fechas]
- Release: [fecha estimada]

## 4. Responsabilidades
- **Taronja Tech:** desarrollo, pruebas, documentación, handover.
- **Cliente:** feedback en demos, acceso a entornos y datos necesarios, aprobación de hitos.

## 5. Supuestos (Assumptions)
- Disponibilidad de puntos de contacto y reuniones de seguimiento.
- Entornos y credenciales proporcionados en tiempo y forma.
- Cambios de alcance documentados y acordados.

## 6. Criterios de aceptación
Definidos por feature/hito y aceptación formal del cliente antes del cierre de fase.

## 7. Soporte post-entrega
Período de garantía y opciones de soporte (horas, retainer) según acuerdo.

---
*Documento de ejemplo. El SOW real se adapta a cada proyecto.*
`

const sowEn = `# Statement of Work — Sample
## Taronja Tech Solutions S.R.L.

---

## 1. Scope
Project description, objectives and boundaries of the work. Includes in-scope and out-of-scope items.

## 2. Deliverables
- Source code in accessible repository
- Technical documentation (README, ADRs, runbooks as needed)
- Handover session
- Phase-specific deliverables as agreed

## 3. Timeline
- Phase 1: [dates]
- Phase 2: [dates]
- Release: [estimated date]

## 4. Responsibilities
- **Taronja Tech:** development, testing, documentation, handover.
- **Client:** feedback on demos, access to required environments and data, milestone sign-off.

## 5. Assumptions
- Availability of points of contact and follow-up meetings.
- Environments and credentials provided in a timely manner.
- Scope changes documented and agreed.

## 6. Acceptance criteria
Defined per feature/milestone and formal client acceptance before phase closure.

## 7. Post-delivery support
Warranty period and support options (hours, retainer) as agreed.

---
*Sample document. The actual SOW is tailored to each project.*
`

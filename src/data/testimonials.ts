export interface Testimonial {
  id: string
  quoteKey: string
  roleKey: string
  industryKey: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quoteKey: 'testimonials.quote1',
    roleKey: 'testimonials.role1',
    industryKey: 'testimonials.industry1',
  },
  {
    id: '2',
    quoteKey: 'testimonials.quote2',
    roleKey: 'testimonials.role2',
    industryKey: 'testimonials.industry2',
  },
  {
    id: '3',
    quoteKey: 'testimonials.quote3',
    roleKey: 'testimonials.role3',
    industryKey: 'testimonials.industry3',
  },
]

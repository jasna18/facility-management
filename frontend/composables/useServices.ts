// Local services data — replaces a backend API.
// Used across Home and Services pages.

export interface Service {
  id: string
  title: string
  icon: string
  image?: string
  summary: string
  features: string[]
}

const services: Service[] = [
  {
    id: 'mep',
    title: 'MEP',
    icon: '⚙️',
    image: '/images/service-hero-mep.png',
    summary:
      'Mechanical, electrical and plumbing — integrated building services, installed, balanced and maintained.',
    features: ['Mechanical & HVAC plant', 'LV power & lighting', 'Plumbing & drainage', 'Fire & life-safety']
  },
  {
    id: 'hvac',
    title: 'HVAC & Energy',
    icon: '❄️',
    image: '/images/hero.png',
    summary:
      'Heating, ventilation, air-conditioning and energy optimisation for comfort and lower running costs.',
    features: ['AC installation & service', 'Air-quality management', 'Energy audits', 'Smart controls']
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Grounds',
    icon: '🌿',
    image: '/images/service-hero-landscaping.png',
    summary:
      'Professional grounds care that keeps external spaces healthy, safe and welcoming all year round.',
    features: ['Lawn & garden care', 'Seasonal planting', 'Irrigation', 'Pathway upkeep']
  },
  {
    id: 'maintenance',
    title: 'Building Maintenance',
    icon: '🔧',
    summary:
      'Planned preventive and reactive maintenance to keep every system running and downtime to a minimum.',
    features: ['Electrical & plumbing', 'Carpentry & repairs', 'Painting & finishing', '24/7 reactive call-outs']
  }
]

export const useServices = () => {
  const all = (): Service[] => services
  const featured = (count = 3): Service[] => services.slice(0, count)
  const byId = (id: string): Service | undefined => services.find((s) => s.id === id)
  return { all, featured, byId }
}

// Local services data — replaces a backend API.
// Used across Home and Services pages.

export interface Service {
  id: string
  title: string
  icon: string
  summary: string
  features: string[]
}

const services: Service[] = [

  {
    id: 'maintenance',
    title: 'Building Maintenance',
    icon: '🔧',
    summary:
      'Planned preventive and reactive maintenance to keep every system running and downtime to a minimum.',
    features: ['Electrical & plumbing', 'Carpentry & repairs', 'Painting & finishing', '24/7 reactive call-outs']
  },
  {
    id: 'hvac',
    title: 'HVAC & Energy',
    icon: '❄️',
    summary:
      'Heating, ventilation, air-conditioning and energy optimisation for comfort and lower running costs.',
    features: ['AC installation & service', 'Air-quality management', 'Energy audits', 'Smart controls']
  },
  {
    id: 'landscaping',
    title: 'Landscaping & Grounds',
    icon: '🌿',
    summary:
      'Professional grounds care that keeps external spaces healthy, safe and welcoming all year round.',
    features: ['Lawn & garden care', 'Seasonal planting', 'Irrigation', 'Pathway upkeep']
  },
  
]

export const useServices = () => {
  const all = (): Service[] => services
  const featured = (count = 3): Service[] => services.slice(0, count)
  const byId = (id: string): Service | undefined => services.find((s) => s.id === id)
  return { all, featured, byId }
}

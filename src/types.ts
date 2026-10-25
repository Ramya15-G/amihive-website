export type NavLinkItem = {
  label: string
  href: string
  pageKey: 'home' | 'about' | 'services' | 'projects' | 'faq' | 'contact'
}

export type ServiceItem = {
  id: string
  title: string
  category: string
  summary: string
  description: string
  features: string[]
  technologies: string[]
  icon: string
  gradient: string
  imageUrl?: string
}

export type ProjectItem = {
  id: string
  title: string
  category: 'All' | 'Web & Cloud' | 'Mobile Apps' | 'AI & Automation' | 'IoT & Hardware'
  badge: string
  summary: string
  description: string
  challenge: string
  solution: string
  keyBullets: string[]
  metrics: { label: string; value: string }[]
  technologies: string[]
  accentColor: string
  mockupType: 'browser' | 'mobile' | 'dashboard' | 'terminal' | 'hologram'
  imageUrl?: string
}

export type TestimonialItem = {
  id: string
  clientName: string
  clientRole: string
  quote: string
  rating: number
  logoInitial: string
}

export type SkillStat = {
  name: string
  percentage: number
}

export type FaqItem = {
  id: string
  question: string
  answer: string
  category?: string
}

export type ContactFormData = {
  fullName: string
  company: string
  email: string
  phone: string
  subject: string
  service: string
  budget: string
  message: string
}

export type FormErrors = Partial<Record<keyof ContactFormData, string>>

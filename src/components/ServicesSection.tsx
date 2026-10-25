import { useState, type FC } from 'react'
import {
  IconWeb,
  IconMobile,
  IconAi,
  IconSoftware,
  IconCloud,
  IconSecurity,
  IconDesign,
  IconArrowRight,
  IconCheck,
  IconClose,
} from './Icons'
import { TechOrbitWheel } from './TechOrbitWheel'
import { InteractiveServiceCard } from './InteractiveServiceCard'
import { type ServiceItem } from '../types'
import { SiteImages } from '../assets/images'

const VERIFIED_SERVICES: ServiceItem[] = [
  {
    id: 'web-software-dev',
    title: 'Web & Software Development',
    category: 'Engineering',
    icon: 'web',
    gradient: 'from-blue to-cyan',
    imageUrl: SiteImages.serviceWebDev,
    summary:
      'Build responsive, high-performance websites and custom software that align with your business goals and provide an exceptional user experience.',
    description:
      'From custom web applications to scalable business software, we architect clean, maintainable digital products. Utilizing modern component systems, type-safe full-stack frameworks, and automated regression testing, we ensure your platforms operate smoothly under enterprise load.',
    features: [
      'Responsive, accessible web applications (WCAG 2.1 AA)',
      'Enterprise SaaS architectures & custom business portals',
      'API-first headless integrations & real-time WebSockets',
      'Continuous deployment with automated zero-downtime releases',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind', 'PostgreSQL'],
  },
  {
    id: 'ai-automation',
    title: 'AI Automation & Intelligence',
    category: 'AI & Data',
    icon: 'ai',
    gradient: 'from-orange to-amber',
    imageUrl: SiteImages.serviceAiAuto,
    summary:
      'Automate workflows and eliminate repetitive tasks using powerful AI-driven automation, NLP chatbots, and predictive processing.',
    description:
      'We turn manual operational bottlenecks into autonomous digital pipelines. Whether integrating conversational AI agents, automating document validation, or training domain-specific intelligence models, our AI solutions deliver measurable labor savings.',
    features: [
      'Intelligent NLP virtual assistants with human-like accuracy',
      'Automated document extraction, OCR, and classification',
      'End-to-end workflow automation with failover alerts',
      'Secure enterprise LLM deployments with private data guardrails',
    ],
    technologies: ['Python', 'FastAPI', 'PyTorch', 'OpenAI / Gemini', 'Celery', 'LangChain'],
  },
  {
    id: 'ecommerce-apps',
    title: 'E-commerce Applications',
    category: 'E-Commerce',
    icon: 'software',
    gradient: 'from-blue to-indigo',
    imageUrl: SiteImages.serviceEcommerce,
    summary:
      'Build scalable and secure e-commerce platforms to boost your online business with high-concurrency checkouts and inventory tracking.',
    description:
      'We engineer conversion-optimized online storefronts and multi-vendor marketplaces. Built with lightning-fast catalog search, frictionless payment gateways, and real-time inventory synchronization.',
    features: [
      'High-concurrency checkout flow with sub-second response',
      'Omnichannel inventory synchronization & multi-warehouse tracking',
      'Integrated payment gateways (Stripe, Razorpay, Apple Pay)',
      'Advanced order tracking, sales analytics, and customer loyalty',
    ],
    technologies: ['Next.js', 'Node.js', 'Stripe', 'Redis', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'automation-process',
    title: 'Automation & Process Optimization',
    category: 'Operations',
    icon: 'cloud',
    gradient: 'from-cyan to-blue',
    imageUrl: SiteImages.serviceCloudSolutions,
    summary:
      'Streamline your operations, reduce manual tasks, and improve efficiency with smart automation solutions tailored to your business.',
    description:
      'Eliminate human error and operational latency by interconnecting your CRM, ERP, accounting, and communication tools through intelligent webhook triggers and data pipelines.',
    features: [
      'Multi-platform webhook orchestration & event streaming',
      'Legacy database bridge connectors & ETL pipelines',
      'Automated invoice generation & financial reconciliation',
      'Real-time SLA alerting and exception handling queues',
    ],
    technologies: ['Node.js', 'Go', 'Kafka', 'Redis Streams', 'Docker', 'AWS Lambda'],
  },
  {
    id: 'branding-design',
    title: 'Logo, Branding & UI/UX Design',
    category: 'Design & Growth',
    icon: 'design',
    gradient: 'from-orange to-rose',
    imageUrl: SiteImages.serviceUiUx,
    summary:
      'Enhance your brand presence online with creative design, distinctive brand identity, and high-converting user interfaces.',
    description:
      'Distinctive brands win customer trust. Our design studio crafts cohesive visual identities, brand style guides, custom graphic assets, and ROI-driven digital marketing strategies that captivate audiences.',
    features: [
      'Complete brand identity design, style guidelines, and logo marks',
      'Conversion rate optimization (CRO) & landing page design',
      'High-converting social media marketing campaigns',
      'Audience segmentation, retention email flows, and analytics',
    ],
    technologies: ['Figma', 'Adobe Creative Cloud', 'Design Systems', 'Google Analytics 4'],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Asset Protection',
    category: 'Security',
    icon: 'security',
    gradient: 'from-emerald to-blue',
    imageUrl: SiteImages.serviceCybersecurity,
    summary:
      'Protect your digital assets with advanced cybersecurity solutions, encrypted pipelines, and zero-trust infrastructure.',
    description:
      'Security is non-negotiable. We implement enterprise vulnerability auditing, penetration testing, automated patch management, and strict compliance posture to safeguard your applications and customer data.',
    features: [
      'Zero-trust network architecture & role-based access control (RBAC)',
      'Automated dependency scanning & static security analysis (SAST)',
      'End-to-end data encryption in transit (TLS 1.3) and at rest (AES-256)',
      'OWASP Top-10 defense mitigation & security compliance auditing',
    ],
    technologies: ['Docker', 'AWS IAM', 'Cloudflare', 'Vault', 'Zero-Trust', 'WAF'],
  },
  {
    id: 'seo-growth',
    title: 'Search Engine Optimization (SEO)',
    category: 'Design & Growth',
    icon: 'web',
    gradient: 'from-amber to-orange',
    imageUrl: SiteImages.serviceWebDev,
    summary:
      'Boost your search rankings, improve Core Web Vitals, and grow organic online visibility with technical and content SEO.',
    description:
      'We combine technical SEO auditing, semantic markup optimization, and sub-second page performance to ensure your digital platform ranks prominently on search engines for high-intent queries.',
    features: [
      'Technical SEO architecture, structured schema, and sitemaps',
      'Core Web Vitals optimization (LCP, FID, CLS compliance)',
      'Competitor keyword discovery & search intent mapping',
      'Automated performance monitoring and crawl error alerts',
    ],
    technologies: ['Lighthouse', 'Schema.org', 'Next.js SSR', 'Semantic HTML5', 'OpenGraph'],
  },
  {
    id: 'mobile-app-dev',
    title: 'Next-Gen Mobile App Engineering',
    category: 'Engineering',
    icon: 'mobile',
    gradient: 'from-blue to-purple',
    imageUrl: SiteImages.serviceMobileApp,
    summary:
      'Modern iOS and Android applications engineered for seamless navigation, dark mode support, and elevated user experience.',
    description:
      'Deliver rich native-feeling mobile applications across Apple App Store and Google Play. Features offline data caching, biometrics, hardware sensor integrations, and push messaging.',
    features: [
      'Cross-platform development with shared codebases (Flutter / React Native)',
      'Offline-first SQLite local storage & background synchronization',
      'Biometric authentication (FaceID, Fingerprint) & push notifications',
      'Automated CI/CD build distribution to TestFlight and Google Play',
    ],
    technologies: ['Flutter', 'React Native', 'TypeScript', 'Swift', 'Kotlin', 'Firebase'],
  },
]

type ServicesSectionProps = {
  onSelectServiceForContact?: (serviceTitle: string) => void
}

export const ServicesSection: FC<ServicesSectionProps> = ({ onSelectServiceForContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = ['All', 'Engineering', 'AI & Data', 'E-Commerce', 'Operations', 'Design & Growth', 'Security']

  const filteredServices =
    activeCategory === 'All'
      ? VERIFIED_SERVICES
      : VERIFIED_SERVICES.filter((s) => s.category === activeCategory)

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'web':
        return <IconWeb size={26} />
      case 'mobile':
        return <IconMobile size={26} />
      case 'ai':
        return <IconAi size={26} />
      case 'software':
        return <IconSoftware size={26} />
      case 'cloud':
        return <IconCloud size={26} />
      case 'security':
        return <IconSecurity size={26} />
      case 'design':
        return <IconDesign size={26} />
      default:
        return <IconSoftware size={26} />
    }
  }

  return (
    <section id="services" className="section-padding services-section" aria-labelledby="services-heading">
      <div className="container">
        {/* Section Header (from Page 2 of PDF) */}
        <div className="section-header text-center">
          <span className="section-eyebrow">WHAT WE DO</span>
          <h2 id="services-heading" className="section-title">
            Digital Services for{' '}
            <span className="text-orange">Modern Business Growth</span>
          </h2>
          <p className="section-lead">
            We help businesses harness modern technologies — AI automation, smart analytics,
            and custom digital solutions — to scale faster, improve efficiency, and deliver powerful customer experiences.
          </p>
        </div>

        {/* Category Filters */}
        <div className="filter-tabs-container">
          <div className="filter-tabs" role="tablist" aria-label="Service categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`filter-tab-btn ${activeCategory === category ? 'filter-tab-btn--active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Verified Services Grid (from Pages 2, 3, 4 of PDF) */}
        <div className="services-grid">
          {filteredServices.map((service) => (
            <InteractiveServiceCard key={service.id}>
              <div className="service-card-modern__top">
                <div className="service-card-modern__icon" aria-hidden="true">
                  {getServiceIcon(service.icon)}
                </div>
                <span className="service-card-modern__category">{service.category}</span>
              </div>

              <h3 className="service-card-modern__title">{service.title}</h3>
              <p className="service-card-modern__summary">{service.summary}</p>

              {/* Feature Highlights */}
              <ul className="service-card-modern__features">
                {service.features.slice(0, 2).map((feat) => (
                  <li key={feat} className="service-feature-item">
                    <span className="feature-check-icon">
                      <IconCheck size={14} />
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Badges */}
              <div className="service-card-modern__tech-list">
                {service.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Footer Actions */}
              <div className="service-card-modern__footer">
                <button
                  type="button"
                  className="service-learn-more-btn"
                  onClick={() => setSelectedService(service)}
                >
                  <span>Architecture Details</span>
                  <IconArrowRight size={16} />
                </button>
              </div>
            </InteractiveServiceCard>
          ))}
        </div>

        {/* Future-Ready Technology for Modern Enterprises (Pages 4 & 5 of PDF) */}
        <div className="future-tech-section">
          <div className="future-tech-grid">
            <div className="future-tech-copy">
              <span className="section-eyebrow">TECHNOLOGY STACK</span>
              <h3 className="future-tech-title">
                Future-Ready Technology for{' '}
                <span className="text-orange">Modern Enterprises</span>
              </h3>
              <p className="future-tech-lead">
                We engineer intelligent, scalable, and secure systems using{' '}
                <strong>React, Next.js, Node.js, .NET, Python AI, AWS, Docker, Kubernetes, MongoDB, and PostgreSQL</strong>.
              </p>
              <div className="future-tech-bullets">
                <div className="bullet-row">
                  <span className="bullet-tick">✓</span>
                  <span>Modern component micro-frontends with high-throughput backend APIs</span>
                </div>
                <div className="bullet-row">
                  <span className="bullet-tick">✓</span>
                  <span>Containerized multi-cloud deployment with zero-downtime updates</span>
                </div>
                <div className="bullet-row">
                  <span className="bullet-tick">✓</span>
                  <span>Encrypted databases and high-speed in-memory caching</span>
                </div>
              </div>
              <a
                href="#contact"
                className="btn btn--orange btn--lg future-tech-btn"
                onClick={() => {
                  const contactEl = document.getElementById('contact')
                  contactEl?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Explore Our Technology
              </a>
            </div>

            {/* Interactive 3D Tech Orbit Wheel */}
            <div className="future-tech-visual">
              <TechOrbitWheel />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Service Deep Dive */}
      {selectedService && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedService(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header__info">
                <span className="modal-category">{selectedService.category}</span>
                <h3 id="service-modal-title" className="modal-title">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedService(null)}
                aria-label="Close dialog"
              >
                <IconClose size={22} />
              </button>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedService.description}</p>

              <h4 className="modal-subtitle">Key Deliverables & Standards</h4>
              <ul className="modal-features-list">
                {selectedService.features.map((feature) => (
                  <li key={feature} className="modal-feature-item">
                    <span className="modal-feature-icon">
                      <IconCheck size={16} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h4 className="modal-subtitle">Technologies & Tooling</h4>
              <div className="modal-tech-cloud">
                {selectedService.technologies.map((tech) => (
                  <span key={tech} className="tech-badge tech-badge--modal">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn--outline"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => {
                  if (onSelectServiceForContact) {
                    onSelectServiceForContact(selectedService.title)
                  }
                  setSelectedService(null)
                  const contactSection = document.getElementById('contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Request Proposal for this Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

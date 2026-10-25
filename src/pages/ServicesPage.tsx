import { type FC } from 'react'
import { PageHeader } from '../components/PageHeader'
import { ServicesSection } from '../components/ServicesSection'
import { IconCheck, IconArrowRight, IconShield, IconSpeed, IconSoftware } from '../components/Icons'

type ServicesPageProps = {
  onNavigate: (pageKey: 'home' | 'about' | 'services' | 'projects' | 'faq' | 'contact') => void
  onSelectServiceForContact: (serviceTitle: string) => void
}

const ENGAGEMENT_MODELS = [
  {
    icon: <IconSoftware size={26} />,
    title: 'Dedicated Engineering Pods',
    badge: 'Long-Term Scale',
    description:
      'Seamlessly embed a senior cross-functional pod of full-stack developers, UI/UX designers, and QA engineers directly into your product roadmap.',
    deliverables: [
      'Direct Slack/Teams communication channels',
      'Daily standups & bi-weekly sprint demos',
      'Flexible month-to-month scalability',
    ],
  },
  {
    icon: <IconSpeed size={26} />,
    title: 'Fixed-Scope Milestones',
    badge: 'Turnkey Delivery',
    description:
      'Ideal for defined project scopes, MVP validation, or specialized module implementations with clear deadlines and guaranteed deliverables.',
    deliverables: [
      'Comprehensive architectural specification',
      'Fixed pricing with milestone sign-offs',
      'Zero surprise costs or scope inflation',
    ],
  },
  {
    icon: <IconShield size={26} />,
    title: 'Continuous Modernization & SLA',
    badge: '24/7 Operations',
    description:
      'Round-the-clock infrastructure monitoring, security patching, cloud cost optimization, and proactive performance tuning for live production systems.',
    deliverables: [
      'Sub-15 minute critical incident response',
      'Automated dependency security scanning',
      'Quarterly architectural optimization reviews',
    ],
  },
]

export const ServicesPage: FC<ServicesPageProps> = ({ onNavigate, onSelectServiceForContact }) => {
  return (
    <div className="page-view page-view--services">
      {/* 1. Page Header with Breadcrumbs */}
      <PageHeader
        eyebrow="WHAT WE DELIVER"
        title="Future-Ready Engineering, Cloud &"
        highlightWord="AI Solutions"
        subtitle="We help businesses harness cutting-edge technologies — AI automation, scalable cloud architectures, high-concurrency commerce, and zero-trust cybersecurity."
        breadcrumbs={[
          { label: 'Home', onClick: () => onNavigate('home') },
          { label: 'Services' },
        ]}
      />

      {/* 2. Complete 8 Verified Services Showcase with Category Filter, 3D Architecture Illustrations, Detail Modals & Tech Orbit Wheel */}
      <ServicesSection onSelectServiceForContact={onSelectServiceForContact} />

      {/* 3. Flexible Engagement Models */}
      <section className="section-padding services-models-section" aria-labelledby="engagement-models-title">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">HOW WE WORK WITH YOU</span>
            <h2 id="engagement-models-title" className="section-title">
              Flexible Engagement Models Tailored to{' '}
              <span className="text-orange">Your Growth</span>
            </h2>
            <p className="section-lead">
              Whether you are an ambitious startup needing an MVP or an established enterprise scaling
              high-throughput systems, we adapt our collaboration structure to fit your velocity.
            </p>
          </div>

          <div className="engagement-models-grid">
            {ENGAGEMENT_MODELS.map((model) => (
              <div key={model.title} className="engagement-card">
                <div className="engagement-card__header">
                  <div className="engagement-card__icon">{model.icon}</div>
                  <span className="engagement-card__badge">{model.badge}</span>
                </div>
                <h3 className="engagement-card__title">{model.title}</h3>
                <p className="engagement-card__desc">{model.description}</p>
                <ul className="engagement-card__bullets">
                  {model.deliverables.map((item) => (
                    <li key={item} className="engagement-bullet">
                      <span className="engagement-check">
                        <IconCheck size={14} />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="engagement-card__footer">
                  <button
                    type="button"
                    className="btn btn--outline btn--sm"
                    onClick={() => {
                      onSelectServiceForContact(model.title)
                      onNavigate('contact')
                    }}
                  >
                    <span>Inquire About This Model</span>
                    <IconArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ready to build CTA */}
      <section className="section-padding services-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <div className="about-cta-content text-center">
              <span className="section-eyebrow">NEXT STEP</span>
              <h2 className="about-cta-title">
                Need a Custom Architectural Solution for{' '}
                <span className="text-orange">Your Business?</span>
              </h2>
              <p className="about-cta-lead">
                Our solutions architects provide free initial technical scoping and architectural
                guidance to assess your technology stack and timeline.
              </p>
              <div className="about-cta-actions">
                <button
                  type="button"
                  className="btn btn--orange btn--lg"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Request a Scoping Consultation</span>
                  <IconArrowRight size={18} />
                </button>
                <button
                  type="button"
                  className="btn btn--outline-light btn--lg"
                  onClick={() => onNavigate('projects')}
                >
                  <span>Explore Case Studies</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

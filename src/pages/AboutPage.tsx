import { type FC } from 'react'
import { PageHeader } from '../components/PageHeader'
import { AboutSection } from '../components/AboutSection'
import { IconShield, IconSpeed, IconCode, IconCheck, IconArrowRight } from '../components/Icons'
import { InteractiveServiceCard } from '../components/InteractiveServiceCard'

type AboutPageProps = {
  onNavigate: (pageKey: 'home' | 'about' | 'services' | 'projects' | 'faq' | 'contact') => void
}

const VALUES = [
  {
    icon: <IconCode size={26} />,
    title: 'Engineering Integrity',
    description:
      'We write clean, modular, and type-safe code that scales gracefully. Every release passes strict linting, automated testing, and security scans.',
    color: '#2563eb',
    bg: '#eff6ff',
  },
  {
    icon: <IconShield size={26} />,
    title: 'Security-First Architecture',
    description:
      'Zero-trust network principles, end-to-end data encryption, and OWASP compliance are integrated from day one — not treated as an afterthought.',
    color: '#16a34a',
    bg: '#f0fdf4',
  },
  {
    icon: <IconSpeed size={26} />,
    title: 'Radical Transparency',
    description:
      'Direct pod collaboration without communication barriers. Clients have live access to sprint boards, code repositories, and weekly staging builds.',
    color: '#0891b2',
    bg: '#ecfeff',
  },
  {
    icon: <IconCheck size={26} />,
    title: 'Measurable Business Returns',
    description:
      'We align every sprint milestone with your key commercial metrics — whether that is sub-second latency, higher conversion, or operational automation.',
    color: '#ff7a00',
    bg: '#fff7ed',
  },
]

export const AboutPage: FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="page-view page-view--about">
      {/* 1. Page Header with Breadcrumbs */}
      <PageHeader
        eyebrow="WHO WE ARE"
        title="Scalable IT Solutions for"
        highlightWord="Modern Businesses"
        subtitle="At AmiHive, we engineer smart, scalable, and high-performance digital ecosystems designed to accelerate enterprise transformation and sustainable commercial growth."
        breadcrumbs={[
          { label: 'Home', onClick: () => onNavigate('home') },
          { label: 'About Us' },
        ]}
      />

      {/* 2. Core About Section with Collaboration Photo, Skills, Pillars & 3-Step Process */}
      <AboutSection />

      {/* 3. Core Values & Engineering Culture Manifesto */}
      <section className="section-padding about-values-section" aria-labelledby="values-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">OUR CULTURE &amp; VALUES</span>
            <h2 id="values-heading" className="section-title">
              The Principles That Drive Our{' '}
              <span className="text-orange">Engineering Standard</span>
            </h2>
            <p className="section-lead">
              Our culture is built on deep technical curiosity, disciplined agile execution,
              and genuine partnership with every client we empower.
            </p>
          </div>

          <div className="values-grid">
            {VALUES.map((val) => (
              <InteractiveServiceCard key={val.title} element="div" className="value-card">
                <div
                  className="value-card__icon"
                  style={{ color: val.color, backgroundColor: val.bg }}
                >
                  {val.icon}
                </div>
                <h3 className="value-card__title">{val.title}</h3>
                <p className="value-card__desc">{val.description}</p>
              </InteractiveServiceCard>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ready to Collaborate CTA */}
      <section className="section-padding about-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <div className="about-cta-content text-center">
              <span className="section-eyebrow">GET IN TOUCH</span>
              <h2 className="about-cta-title">
                Ready to Build Your Next Solution With{' '}
                <span className="text-orange">AmiHive?</span>
              </h2>
              <p className="about-cta-lead">
                Whether you need dedicated full-stack engineering pods or end-to-end digital transformation,
                our solutions desk is ready to discuss your architecture.
              </p>
              <div className="about-cta-actions">
                <button
                  type="button"
                  className="btn btn--orange btn--lg"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Start a Conversation</span>
                  <IconArrowRight size={18} />
                </button>
                <button
                  type="button"
                  className="btn btn--outline-light btn--lg"
                  onClick={() => onNavigate('services')}
                >
                  <span>View Our Services</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

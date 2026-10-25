import { type FC } from 'react'
import { PageHeader } from '../components/PageHeader'
import { ProjectsSection } from '../components/ProjectsSection'
import { IconArrowRight, IconShield, IconSpeed, IconCheck } from '../components/Icons'

type ProjectsPageProps = {
  onNavigate: (pageKey: 'home' | 'about' | 'services' | 'projects' | 'faq' | 'contact') => void
}

export const ProjectsPage: FC<ProjectsPageProps> = ({ onNavigate }) => {
  return (
    <div className="page-view page-view--projects">
      {/* 1. Page Header with Breadcrumbs */}
      <PageHeader
        eyebrow="PORTFOLIO & CASE STUDIES"
        title="Crafting Future-Ready Digital Solutions for"
        highlightWord="Business Growth"
        subtitle="Explore our verified client solutions and interactive architectural prototypes demonstrating engineering depth across AI automation, cloud commerce, and connected systems."
        breadcrumbs={[
          { label: 'Home', onClick: () => onNavigate('home') },
          { label: 'Projects' },
        ]}
      />

      {/* 2. Portfolio Quality Guarantee Banner */}
      <div className="portfolio-transparency-banner">
        <div className="container">
          <div className="transparency-pill-box">
            <span className="transparency-dot" />
            <span className="transparency-text">
              <strong>Quality Transparency:</strong> Every project featured is grounded in authentic architectures,
              real metrics, and verified engineering standards developed by AmiHive Software Solutions.
            </span>
          </div>
        </div>
      </div>

      {/* 3. Complete Projects Showcase & Case Studies Modal */}
      <ProjectsSection />

      {/* 4. Engineering Delivery Assurance */}
      <section className="section-padding projects-assurance-section" aria-labelledby="assurance-title">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">OUR DELIVERY ASSURANCE</span>
            <h2 id="assurance-title" className="section-title">
              How We Guarantee Project{' '}
              <span className="text-orange">Excellence</span>
            </h2>
            <p className="section-lead">
              Every deliverable goes through our multi-stage quality gate before touching production environments.
            </p>
          </div>

          <div className="assurance-grid">
            <div className="assurance-card">
              <div className="assurance-card__icon text-blue">
                <IconSpeed size={28} />
              </div>
              <h3 className="assurance-card__title">Sub-Second Performance</h3>
              <p className="assurance-card__desc">
                Rigorous Lighthouse testing, asset compression, and edge caching to ensure Google Core Web Vitals compliance.
              </p>
            </div>

            <div className="assurance-card">
              <div className="assurance-card__icon text-green">
                <IconShield size={28} />
              </div>
              <h3 className="assurance-card__title">Hardened Security Auditing</h3>
              <p className="assurance-card__desc">
                Automated static analysis, dependency vulnerability scans, and strict zero-trust permissions.
              </p>
            </div>

            <div className="assurance-card">
              <div className="assurance-card__icon text-orange">
                <IconCheck size={28} />
              </div>
              <h3 className="assurance-card__title">Cross-Platform Continuity</h3>
              <p className="assurance-card__desc">
                Responsive layouts tested across mobile, tablet, desktop, and varied browser engines for complete consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Start Your Project CTA */}
      <section className="section-padding projects-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <div className="about-cta-content text-center">
              <span className="section-eyebrow">START BUILDING</span>
              <h2 className="about-cta-title">
                Have a Complex Digital Challenge in{' '}
                <span className="text-orange">Mind?</span>
              </h2>
              <p className="about-cta-lead">
                Let&apos;s build an exceptional, high-availability platform engineered to scale your operations.
              </p>
              <div className="about-cta-actions">
                <button
                  type="button"
                  className="btn btn--orange btn--lg"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Discuss Your Project</span>
                  <IconArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

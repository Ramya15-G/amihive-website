import { type FC } from 'react'
import { Hero } from '../components/Hero'
import { Capabilities } from '../components/Capabilities'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { ContactCta } from '../components/ContactCta'
import { IconArrowRight, IconWeb, IconAi, IconSoftware, IconCheck } from '../components/Icons'
import { InteractiveServiceCard } from '../components/InteractiveServiceCard'

type HomePageProps = {
  onNavigate: (pageKey: 'home' | 'about' | 'services' | 'projects' | 'faq' | 'contact') => void
  onSelectServiceForContact: (serviceTitle: string) => void
}

export const HomePage: FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="page-view page-view--home">
      {/* 1. Cinematic Hero Section */}
      <Hero
        onGetStarted={() => onNavigate('contact')}
        onExploreServices={() => onNavigate('services')}
      />

      {/* 2. Core Capabilities Ticker */}
      <Capabilities />

      {/* 3. Services Overview Preview */}
      <section className="section-padding services-preview-section" aria-labelledby="services-preview-heading">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-eyebrow">CORE EXPERTISE</span>
            <h2 id="services-preview-heading" className="section-title">
              Intelligent IT Solutions Engineered for{' '}
              <span className="text-orange">Business Growth</span>
            </h2>
            <p className="section-lead">
              We engineer scalable software, AI-driven automation pipelines, and enterprise cloud
              architectures designed to accelerate digital transformation.
            </p>
          </div>

          <div className="services-grid services-grid--preview">
            {/* Card 1: Web & Software Dev */}
            <InteractiveServiceCard>
              <div className="service-card-image-wrap">
                <img
                  src="/images/amihive-images/img1.jpg"
                  alt="Web & Software Development Architecture"
                  className="service-card-img"
                  loading="lazy"
                />
                <div className="service-image-vignette" />
              </div>
              <div className="service-card-modern__top">
                <div className="service-card-modern__icon" aria-hidden="true">
                  <IconWeb size={26} />
                </div>
                <span className="service-card-modern__category">Engineering</span>
              </div>
              <h3 className="service-card-modern__title">Web &amp; Software Development</h3>
              <p className="service-card-modern__summary">
                Build responsive, high-performance websites and custom software that align with your business goals and provide an exceptional user experience.
              </p>
              <ul className="service-card-modern__features">
                <li className="service-feature-item">
                  <span className="feature-check-icon"><IconCheck size={14} /></span>
                  <span>Responsive, accessible web applications (WCAG 2.1 AA)</span>
                </li>
                <li className="service-feature-item">
                  <span className="feature-check-icon"><IconCheck size={14} /></span>
                  <span>Enterprise SaaS architectures &amp; custom business portals</span>
                </li>
              </ul>
              <div className="service-card-modern__footer">
                <button
                  type="button"
                  className="service-learn-more-btn"
                  onClick={() => onNavigate('services')}
                >
                  <span>Explore Service Architecture</span>
                  <IconArrowRight size={16} />
                </button>
              </div>
            </InteractiveServiceCard>

            {/* Card 2: AI Automation */}
            <InteractiveServiceCard>
              <div className="service-card-image-wrap">
                <img
                  src="/images/amihive-images/img2.jpg"
                  alt="AI Automation and Workflow Intelligence"
                  className="service-card-img"
                  loading="lazy"
                />
                <div className="service-image-vignette" />
              </div>
              <div className="service-card-modern__top">
                <div className="service-card-modern__icon" aria-hidden="true">
                  <IconAi size={26} />
                </div>
                <span className="service-card-modern__category">AI &amp; Data</span>
              </div>
              <h3 className="service-card-modern__title">AI Automation &amp; Intelligence</h3>
              <p className="service-card-modern__summary">
                Automate workflows and eliminate repetitive tasks using powerful AI-driven automation, NLP chatbots, and predictive processing.
              </p>
              <ul className="service-card-modern__features">
                <li className="service-feature-item">
                  <span className="feature-check-icon"><IconCheck size={14} /></span>
                  <span>Intelligent NLP virtual assistants with human-like accuracy</span>
                </li>
                <li className="service-feature-item">
                  <span className="feature-check-icon"><IconCheck size={14} /></span>
                  <span>End-to-end workflow automation with failover alerts</span>
                </li>
              </ul>
              <div className="service-card-modern__footer">
                <button
                  type="button"
                  className="service-learn-more-btn"
                  onClick={() => onNavigate('services')}
                >
                  <span>Explore Service Architecture</span>
                  <IconArrowRight size={16} />
                </button>
              </div>
            </InteractiveServiceCard>

            {/* Card 3: E-Commerce */}
            <InteractiveServiceCard>
              <div className="service-card-image-wrap">
                <img
                  src="/images/amihive-images/e%20commerence.jpg"
                  alt="High-Performance E-Commerce Applications"
                  className="service-card-img"
                  loading="lazy"
                />
                <div className="service-image-vignette" />
              </div>
              <div className="service-card-modern__top">
                <div className="service-card-modern__icon" aria-hidden="true">
                  <IconSoftware size={26} />
                </div>
                <span className="service-card-modern__category">E-Commerce</span>
              </div>
              <h3 className="service-card-modern__title">E-commerce Applications</h3>
              <p className="service-card-modern__summary">
                Build scalable and secure e-commerce platforms to boost your online business with high-concurrency checkouts and inventory tracking.
              </p>
              <ul className="service-card-modern__features">
                <li className="service-feature-item">
                  <span className="feature-check-icon"><IconCheck size={14} /></span>
                  <span>High-concurrency checkout flow with sub-second response</span>
                </li>
                <li className="service-feature-item">
                  <span className="feature-check-icon"><IconCheck size={14} /></span>
                  <span>Omnichannel inventory synchronization &amp; tracking</span>
                </li>
              </ul>
              <div className="service-card-modern__footer">
                <button
                  type="button"
                  className="service-learn-more-btn"
                  onClick={() => onNavigate('services')}
                >
                  <span>Explore Service Architecture</span>
                  <IconArrowRight size={16} />
                </button>
              </div>
            </InteractiveServiceCard>
          </div>

          <div className="services-preview-actions text-center">
            <button
              type="button"
              className="btn btn--primary btn--lg"
              onClick={() => onNavigate('services')}
            >
              <span>Explore All 8 Verified Services</span>
              <IconArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 4. Featured Case Study Spotlight (Aurora Workspace) */}
      <section className="section-padding featured-spotlight-section" aria-labelledby="featured-spotlight-title">
        <div className="container">
          <div className="featured-case-banner">
            <div className="featured-case-grid">
              <div className="featured-case-copy">
                <span className="featured-pill">FEATURED CASE STUDY</span>
                <h2 id="featured-spotlight-title" className="featured-title">
                  Aurora — Collaborative Workspace
                </h2>
                <p className="featured-lead">
                  A next-generation mixed-reality workspace designed to power immersive teamwork,
                  real-time decision-making, and seamless digital productivity.
                </p>

                <ul className="featured-bullet-list">
                  <li className="featured-bullet-item">
                    <span className="bullet-dot" />
                    <span>Real-time immersive multi-user 3D collaboration</span>
                  </li>
                  <li className="featured-bullet-item">
                    <span className="bullet-dot" />
                    <span>AI-driven contextual suggestions for smarter workflows</span>
                  </li>
                  <li className="featured-bullet-item">
                    <span className="bullet-dot" />
                    <span>Cross-device continuity with persistent environments</span>
                  </li>
                </ul>

                <div className="featured-actions">
                  <button
                    type="button"
                    className="btn btn--orange btn--lg"
                    onClick={() => onNavigate('projects')}
                  >
                    <span>View Case Study &amp; Gallery</span>
                    <IconArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div className="featured-case-visual">
                <div className="workspace-device-mockup workspace-device-mockup--photo">
                  <div className="screen-frame screen-frame--main">
                    <div className="screen-header-bar">
                      <span className="screen-dot screen-dot--red" />
                      <span className="screen-dot screen-dot--yellow" />
                      <span className="screen-dot screen-dot--green" />
                      <span className="screen-title-tab">aurora-workspace.amihive.app</span>
                    </div>
                    <div className="screen-viewport screen-viewport--image">
                      <img
                        src="/images/project_aurora_workspace.jpg"
                        alt="Aurora Collaborative Workspace UI"
                        className="featured-showcase-img"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose AmiHive */}
      <WhyChooseUs />

      {/* 6. Client Testimonials */}
      <TestimonialsSection />

      {/* 7. Conversion CTA Banner */}
      <ContactCta
        onContactClick={() => onNavigate('contact')}
        onExploreProjects={() => onNavigate('projects')}
      />
    </div>
  )
}

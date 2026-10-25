import { type FC } from 'react'
import { IconArrowRight } from './Icons'

type ContactCtaProps = {
  onContactClick: () => void
  onExploreProjects: () => void
}

export const ContactCta: FC<ContactCtaProps> = ({ onContactClick, onExploreProjects }) => {
  return (
    <section className="cta-banner-section" aria-labelledby="cta-banner-title">
      <div className="container">
        <div className="cta-banner-box">
          <img
            src="/images/amihive-images/launch.jpg"
            alt="AmiHive Innovation Portal"
            className="cta-banner-bg-img"
            loading="lazy"
          />
          <div className="cta-banner-img-overlay" />
          <div className="cta-ambient-glow" aria-hidden="true" />

          <div className="cta-banner-content">
            <span className="cta-badge">LET&apos;S TALK</span>
            <h2 id="cta-banner-title" className="cta-banner-title">
              LET&apos;S BUILD YOUR NEXT{' '}
              <span className="text-orange">PROJECT TOGETHER</span>
            </h2>
            <p className="cta-banner-desc">
              Whether you need custom software development, AI-powered automation,
              cloud modernization, or enterprise-level digital strategy, AmiHive is ready
              to build scalable solutions tailored to your growth.
            </p>

            <div className="cta-banner-actions">
              <button
                type="button"
                className="btn btn--orange btn--lg"
                onClick={onContactClick}
              >
                <span>Start Your Project</span>
                <IconArrowRight size={18} />
              </button>

              <button
                type="button"
                className="btn btn--outline-light btn--lg"
                onClick={onExploreProjects}
              >
                <span>View Project Showcase</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { type FC } from 'react'
import { TechOrbSphere } from './TechOrbSphere'
import { IconArrowRight } from './Icons'

type HeroProps = {
  onGetStarted: () => void
  onExploreServices: () => void
}

export const Hero: FC<HeroProps> = ({ onGetStarted, onExploreServices }) => {
  return (
    <section id="home" className="hero-section hero-section--cinematic" aria-labelledby="hero-title">
      {/* Dynamic ambient energy glows */}
      <div className="hero-ambient-glow hero-ambient-glow--top" aria-hidden="true" />
      <div className="hero-ambient-glow hero-ambient-glow--bottom" aria-hidden="true" />
      <div className="hero-ambient-glow hero-ambient-glow--accent" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      {/* Floating geometric cyber particles */}
      <div className="hero-cyber-particles" aria-hidden="true">
        <span className="particle particle--1" />
        <span className="particle particle--2" />
        <span className="particle particle--3" />
        <span className="particle particle--4" />
      </div>

      <div className="hero-container">
        <div className="hero-grid">
          {/* Left Column: Authentic Brand Messaging with Staggered Entrance */}
          <div className="hero-copy">
            {/* Top Eyebrow Badge in Brand Orange */}
            <div className="hero-badge">
              <span className="hero-badge__dot" />
              <span className="hero-badge__text">
                PREMIUM IT SOLUTIONS &amp; DIGITAL TRANSFORMATION
              </span>
            </div>

            {/* Main Title preserving exact words and highlighted keywords in Orange */}
            <h1 id="hero-title" className="hero-title">
              Accelerate Your{' '}
              <span className="text-orange-glow">Business Growth</span>
              <br />
              With Intelligent{' '}
              <span className="text-orange-glow">Technology</span>
            </h1>

            {/* Verified Authentic Supporting Copy */}
            <p className="hero-lead">
              We build cutting-edge digital ecosystems powered by cloud, automation,
              AI, full-stack engineering, and enterprise-grade architectures —
              designed to scale your business.
            </p>

            {/* Call to Actions with High-Gloss Micro-Interactions */}
            <div className="hero-actions">
              <button
                type="button"
                className="btn btn--orange btn--lg hero-btn-main"
                onClick={onGetStarted}
              >
                <span>GET STARTED</span>
                <IconArrowRight size={18} />
              </button>

              <button
                type="button"
                className="btn btn--outline-light btn--lg hero-btn-secondary"
                onClick={onExploreServices}
              >
                <span>EXPLORE SERVICES</span>
              </button>
            </div>

            {/* Enterprise Trust Indicators */}
            <div className="hero-trust-badges">
              <div className="trust-item">
                <span className="trust-item__value">120+</span>
                <span className="trust-item__label">Deployments</span>
              </div>
              <div className="trust-separator" />
              <div className="trust-item">
                <span className="trust-item__value">99.8%</span>
                <span className="trust-item__label">Client Satisfaction</span>
              </div>
              <div className="trust-separator" />
              <div className="trust-item">
                <span className="trust-item__value">24/7</span>
                <span className="trust-item__label">Mission-Critical SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature 3D Tech Sphere */}
          <div className="hero-visual-col">
            <div className="hero-artwork-frame">
              <div className="hero-orb-display">
                <TechOrbSphere />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

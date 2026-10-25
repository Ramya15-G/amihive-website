import { useState, type FC } from 'react'
import { IconCheck, IconShield, IconSpeed, IconCode } from './Icons'
import { InteractiveServiceCard } from './InteractiveServiceCard'

const SKILLS_DATA = [
  { name: 'Programming & Full-Stack Development', percentage: 91, color: '#2563eb' },
  { name: 'Creative Design, Graphics & 3D Visualization', percentage: 87, color: '#ff7a00' },
  { name: 'Animation & Motion Experience', percentage: 72, color: '#3b82f6' },
  { name: 'Digital Marketing & Brand Growth', percentage: 68, color: '#f97316' },
]

export const AboutSection: FC = () => {
  const [activePillar, setActivePillar] = useState<number | null>(null)

  return (
    <section id="about" className="section-padding about-section" aria-labelledby="about-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">WHO WE ARE</span>
          <h2 id="about-heading" className="section-title">
            Scalable IT Solutions for{' '}
            <span className="text-orange">Modern Businesses</span>
          </h2>
          <p className="section-lead">
            At AmiHive, we engineer smart, scalable, and high-performance digital solutions designed
            to accelerate business transformation. By blending deep technical expertise with creative
            problem-solving, we help organizations unlock new opportunities and achieve sustainable growth.
          </p>
        </div>

        {/* Narrative & Interactive Skill Progress Bars */}
        <div className="about-grid">
          {/* Left Narrative */}
          <div className="about-narrative">
            <h3 className="about-narrative__title">
              Lead With Innovation. Build Smarter.
            </h3>
            <p className="about-narrative__text">
              We merge creativity, strategy, and advanced technology to transform ideas into impactful
              digital solutions — delivering innovation, precision, and exceptional brand experiences.
            </p>
            <p className="about-narrative__text">
              Whether it’s custom software development, AI-powered automation, cloud modernization, or
              enterprise-level digital strategy, we focus on building technology that strengthens your
              operations and drives long-term success in a rapidly evolving digital world.
            </p>

            {/* Authentic Engineering Studio & Collaboration Photography */}
            <div className="about-media-frame">
              <img
                src="/images/amihive-images/code.jpg"
                alt="Modern software development workspace with a multi-language technology stack"
                className="about-featured-img"
                loading="lazy"
              />
              <div className="about-media-badge">
                <span className="badge-pulse" />
                <span className="badge-text">Direct Engineering Pod Collaboration</span>
              </div>
            </div>

            {/* Verified Technical Skill Competency Meters (Page 19) */}
            <div className="about-skills-container" aria-label="Core Engineering Competencies">
              <h4 className="skills-heading">Technical Competencies &amp; Delivery Strength</h4>
              <div className="skills-list">
                {SKILLS_DATA.map((skill) => (
                  <div key={skill.name} className="skill-meter-item">
                    <div className="skill-meter-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-pct" style={{ color: skill.color }}>
                        {skill.percentage}%
                      </span>
                    </div>
                    <div className="skill-track">
                      <div
                        className="skill-bar"
                        style={{
                          width: `${skill.percentage}%`,
                          background: `linear-gradient(90deg, #1e40af, ${skill.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: 4 Colorful Strategic Capability Pillars (Page 19) */}
          <div className="about-cards-quad">
            {/* 1. Innovative Creative Team */}
            <InteractiveServiceCard
              element="div"
              className={`quad-card quad-card--blue ${activePillar === 0 ? 'is-expanded' : ''}`}
              onMouseEnter={() => setActivePillar(0)}
              onMouseLeave={() => setActivePillar(null)}
            >
              <div className="quad-card__icon">
                <IconCode size={26} />
              </div>
              <h4 className="quad-card__title">Innovative Creative Team</h4>
              <p className="quad-card__text">
                Our team blends imagination with strategic thinking to craft compelling visuals and architectures that strengthen your brand identity.
              </p>
            </InteractiveServiceCard>

            {/* 2. Intelligent IT Solutions */}
            <InteractiveServiceCard
              element="div"
              className={`quad-card quad-card--green ${activePillar === 1 ? 'is-expanded' : ''}`}
              onMouseEnter={() => setActivePillar(1)}
              onMouseLeave={() => setActivePillar(null)}
            >
              <div className="quad-card__icon">
                <IconSpeed size={26} />
              </div>
              <h4 className="quad-card__title">Intelligent IT Solutions</h4>
              <p className="quad-card__text">
                We deliver smart, scalable, and data-driven digital solutions that empower businesses to grow and evolve with total confidence.
              </p>
            </InteractiveServiceCard>

            {/* 3. Reliable & High-Performance Workflow */}
            <InteractiveServiceCard
              element="div"
              className={`quad-card quad-card--cyan ${activePillar === 2 ? 'is-expanded' : ''}`}
              onMouseEnter={() => setActivePillar(2)}
              onMouseLeave={() => setActivePillar(null)}
            >
              <div className="quad-card__icon">
                <IconShield size={26} />
              </div>
              <h4 className="quad-card__title">Reliable &amp; High-Performance Workflow</h4>
              <p className="quad-card__text">
                Time-tested agile sprint processes ensuring on-time delivery without compromising on code quality, security, or maintainability.
              </p>
            </InteractiveServiceCard>

            {/* 4. Goal-Focused Execution */}
            <InteractiveServiceCard
              element="div"
              className={`quad-card quad-card--orange ${activePillar === 3 ? 'is-expanded' : ''}`}
              onMouseEnter={() => setActivePillar(3)}
              onMouseLeave={() => setActivePillar(null)}
            >
              <div className="quad-card__icon">
                <IconCheck size={26} />
              </div>
              <h4 className="quad-card__title">Goal-Focused Execution</h4>
              <p className="quad-card__text">
                We align every design, strategy, and development milestone directly with your business goals to deliver measurable commercial returns.
              </p>
            </InteractiveServiceCard>
          </div>
        </div>

        {/* Strategic 3-Phase Approach (Page 8 & 18) */}
        <div className="about-strategic-approach">
          <div className="approach-header text-center">
            <span className="section-eyebrow">OUR STRATEGIC APPROACH</span>
            <h3 className="approach-title">
              Deep Understanding, Intelligent Design, High Performance
            </h3>
            <p className="approach-subtitle">
              From exploratory discovery to enterprise launch, our 3-phase strategic pipeline turns complex requirements into high-availability systems.
            </p>
          </div>

          {/* Panoramic Development Workflow Visual */}
          <div className="approach-workflow-banner">
            <img
              src="/images/amihive-images/design.jpg"
              alt="Creative technology innovation and product design concept"
              className="approach-workflow-img"
              loading="lazy"
            />
            <div className="workflow-gradient-overlay" />
          </div>

          <div className="approach-three-grid">
            <InteractiveServiceCard element="div" className="approach-card">
              <div className="approach-icon approach-icon--discover">
                <span>🔍</span>
              </div>
              <h4 className="approach-card__title">01. Discover & Analyze</h4>
              <p className="approach-card__desc">
                We begin by understanding your business goals, audience, and challenges — creating data-driven strategies for long-term success.
              </p>
            </InteractiveServiceCard>

            <InteractiveServiceCard element="div" className="approach-card">
              <div className="approach-icon approach-icon--design">
                <span>✒️</span>
              </div>
              <h4 className="approach-card__title">02. Design & Develop</h4>
              <p className="approach-card__desc">
                We craft intuitive UI/UX and build robust digital experiences using modern frameworks, clean engineering, and automated testing.
              </p>
            </InteractiveServiceCard>

            <InteractiveServiceCard element="div" className="approach-card">
              <div className="approach-icon approach-icon--launch">
                <span>🚀</span>
              </div>
              <h4 className="approach-card__title">03. Launch & Empower</h4>
              <p className="approach-card__desc">
                We deploy your solution and provide ongoing support with an emphasis on scalability, high availability, and future-ready performance.
              </p>
            </InteractiveServiceCard>
          </div>
        </div>
      </div>
    </section>
  )
}

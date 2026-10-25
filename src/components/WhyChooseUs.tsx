import { type FC } from 'react'
import { InteractiveServiceCard } from './InteractiveServiceCard'
import { IconShield, IconSpeed, IconSoftware, IconClock } from './Icons'

const REASONS = [
  {
    icon: <IconShield size={28} />,
    title: 'Reliable & Enterprise-Grade Security',
    description:
      'We implement advanced security standards to keep your data, applications, and infrastructure fully protected.',
    badge: 'Enterprise Security',
    color: '#16a34a',
    bg: '#dcfce7',
  },
  {
    icon: <IconSoftware size={28} />,
    title: 'Customer-Focused Collaboration',
    description:
      'We work closely with you so every solution aligns perfectly with your goals, timeline, and business priorities.',
    badge: 'Direct Pod Access',
    color: '#2563eb',
    bg: '#eff6ff',
  },
  {
    icon: <IconSpeed size={28} />,
    title: 'Cutting-Edge & Innovative Solutions',
    description:
      'We deliver modern, scalable, and future-ready digital solutions engineered for your sustainable commercial growth.',
    badge: 'Modern Tech Stack',
    color: '#3b82f6',
    bg: '#eff6ff',
  },
  {
    icon: <IconClock size={28} />,
    title: 'On-Time & Efficient Delivery',
    description:
      'Every project is executed with precision to ensure timely delivery without compromising on code quality.',
    badge: 'Sprint Precision',
    color: '#ff7a00',
    bg: '#fff7ed',
  },
]

export const WhyChooseUs: FC = () => {
  return (
    <section className="section-padding why-choose-section" aria-labelledby="why-heading">
      <div className="container">
        {/* Section Header (from Page 7 of PDF) */}
        <div className="section-header text-center">
          <span className="section-eyebrow">WHY CHOOSE US</span>
          <h2 id="why-heading" className="section-title">
            Your Trusted Partner for{' '}
            <span className="text-orange">Future-Ready IT Solutions</span>
          </h2>
          <p className="section-lead">
            We empower businesses with high-quality, innovative, and reliable digital solutions
            designed for long-term growth.
          </p>
        </div>

        {/* 4 Cards Grid (from Page 7 of PDF) */}
        <div className="why-grid">
          {REASONS.map((item) => (
            <InteractiveServiceCard key={item.title} element="div" className="why-card">
              <div className="why-card__top">
                <div className="why-card__icon" style={{ color: item.color, background: item.bg }}>
                  {item.icon}
                </div>
                <span className="why-card__badge">{item.badge}</span>
              </div>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__description">{item.description}</p>
            </InteractiveServiceCard>
          ))}
        </div>

        {/* Comparison Callout: Traditional Agency vs AmiHive */}
        <div className="comparison-callout">
          <div className="comparison-box comparison-box--left">
            <h4 className="comparison-box__title">Conventional Outsourcing</h4>
            <ul className="comparison-list">
              <li className="comparison-item comparison-item--bad">
                <span className="comparison-cross">✕</span>
                <span>Opaque communication & weeks between software updates</span>
              </li>
              <li className="comparison-item comparison-item--bad">
                <span className="comparison-cross">✕</span>
                <span>Fragile code requiring continuous rewrites as traffic grows</span>
              </li>
              <li className="comparison-item comparison-item--bad">
                <span className="comparison-cross">✕</span>
                <span>Unpredictable timelines and unaccounted scope inflation</span>
              </li>
            </ul>
          </div>

          <div className="comparison-box comparison-box--right">
            <h4 className="comparison-box__title comparison-box__title--highlight">
              The AmiHive Engineering Standard
            </h4>
            <ul className="comparison-list">
              <li className="comparison-item comparison-item--good">
                <span className="comparison-tick">✓</span>
                <span>Bi-weekly working software demonstrations & direct senior architect access</span>
              </li>
              <li className="comparison-item comparison-item--good">
                <span className="comparison-tick">✓</span>
                <span>Modular, thoroughly tested architecture designed for high scalability</span>
              </li>
              <li className="comparison-item comparison-item--good">
                <span className="comparison-tick">✓</span>
                <span>Clear milestone commitments with transparent budget and sprint control</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

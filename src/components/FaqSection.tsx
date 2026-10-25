import { useState, useId, type FC } from 'react'
import { IconChevronDown } from './Icons'
import { InteractiveServiceCard } from './InteractiveServiceCard'
import { type FaqItem } from '../types'

// Exact verified questions from Pages 31-36 of the AmiHive PDF
const VERIFIED_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is included in your services?',
    answer:
      'Our services include design, development, branding, and marketing strategy tailored to your business goals.',
  },
  {
    id: 'faq-2',
    question: 'What type of company is measured?',
    answer:
      'We serve startups, enterprises, and agencies across multiple industries.',
  },
  {
    id: 'faq-3',
    question: 'How long will it take to complete a project?',
    answer:
      'Project timelines vary based on complexity, but most projects are completed within 2-6 weeks.',
  },
  {
    id: 'faq-4',
    question: 'Do you provide ongoing support after project completion?',
    answer:
      'Yes! We offer maintenance, updates, and long-term support packages for all clients.',
  },
  {
    id: 'faq-5',
    question: 'Can I customize my project based on my business needs?',
    answer:
      'Absolutely! Every project is fully customizable based on your vision and goals.',
  },
  {
    id: 'faq-6',
    question: 'Do you work with international clients?',
    answer:
      'Yes, we work with clients worldwide through online meetings, emails, and collaboration tools.',
  },
]

export const FaqSection: FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Keep the first question open by default as seen in Page 31
  })
  const baseId = useId()

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section id="faq" className="section-padding faq-section" aria-labelledby="faq-heading">
      <div className="container">
        {/* Section Header (from Page 30 of PDF) */}
        <div className="section-header text-center">
          <span className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
          <h2 id="faq-heading" className="section-title">
            Most Common <span className="text-orange">Questions</span>
          </h2>
          <p className="section-lead">
            Find quick answers about our service offerings, project timelines, custom options,
            and international client collaboration.
          </p>
        </div>

        <div className="faq-layout-split">
          {/* Left Decorative Visual Column */}
          <div className="faq-visual-card" aria-hidden="true">
            <div className="faq-visual-badge">
              <span className="faq-bot-icon">🤖</span>
              <span className="faq-badge-title">24/7 Knowledge Base</span>
            </div>
            <h3 className="faq-visual-heading">Have Questions Before Starting?</h3>
            <p className="faq-visual-sub">
              Our engineering team ensures complete transparency at every phase of discovery, sprint execution, and deployment.
            </p>
            <div className="faq-quick-stats">
              <div className="stat-pill">
                <strong>2-6 Weeks</strong>
                <span>Avg. Delivery</span>
              </div>
              <div className="stat-pill">
                <strong>100%</strong>
                <span>Custom Built</span>
              </div>
            </div>
          </div>

          {/* Right Accordion List (Pages 31-36 of PDF) */}
          <div className="faq-accordion-list">
            {VERIFIED_FAQS.map((faq) => {
              const isOpen = Boolean(openIds[faq.id])
              const buttonId = `${baseId}-btn-${faq.id}`
              const panelId = `${baseId}-panel-${faq.id}`

              return (
                <InteractiveServiceCard
                  key={faq.id}
                  element="div"
                  className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(faq.id)}
                  >
                    <span className="faq-trigger__title">{faq.question}</span>
                    <span className="faq-trigger__icon" aria-hidden="true">
                      <IconChevronDown
                        size={20}
                        className={`faq-chevron ${isOpen ? 'faq-chevron--rotated' : ''}`}
                      />
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`faq-panel ${isOpen ? 'faq-panel--visible' : ''}`}
                    hidden={!isOpen}
                  >
                    <div className="faq-panel__content">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </InteractiveServiceCard>
              )
            })}
          </div>
        </div>

        {/* Still have questions banner */}
        <div className="faq-extra-card">
          <div className="faq-extra-card__text">
            <h4 className="faq-extra-card__title">Ready to Discuss Your Project Scope?</h4>
            <p className="faq-extra-card__desc">
              Book a direct consultation with our solution architects to plan your roadmap.
            </p>
          </div>
          <a href="#contact" className="btn btn--orange btn--lg">
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

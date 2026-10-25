import { useState, useId, type FC } from 'react'
import { PageHeader } from '../components/PageHeader'
import { IconChevronDown, IconMail, IconWhatsApp, IconArrowRight } from '../components/Icons'
import { InteractiveServiceCard } from '../components/InteractiveServiceCard'
import { type FaqItem } from '../types'

type FaqPageProps = {
  onNavigate: (pageKey: 'home' | 'about' | 'services' | 'projects' | 'faq' | 'contact') => void
}

const EXTENDED_FAQS: (FaqItem & { category: string })[] = [
  {
    id: 'faq-1',
    category: 'Services & Scope',
    question: 'What is included in your services?',
    answer:
      'Our services include custom web & software development, AI automation pipelines, e-commerce applications, cybersecurity auditing, UI/UX branding, and digital marketing strategy tailored to your specific commercial goals.',
  },
  {
    id: 'faq-2',
    category: 'Services & Scope',
    question: 'What type of company does AmiHive work with?',
    answer:
      'We work with high-growth startups, mid-market businesses, established enterprises, and boutique agencies across technology, manufacturing, e-commerce, and professional services.',
  },
  {
    id: 'faq-3',
    category: 'Turnaround & Timelines',
    question: 'How long will it take to complete a project?',
    answer:
      'Project timelines vary based on architectural scope and complexity. Rapid MVP validation or specialized modules are completed in 2-4 weeks, while comprehensive enterprise platforms typically range from 4-8 weeks across agile bi-weekly sprints.',
  },
  {
    id: 'faq-4',
    category: 'Support & Maintenance',
    question: 'Do you provide ongoing support after project completion?',
    answer:
      'Yes! We provide structured SLA packages covering 24/7 infrastructure monitoring, automated security patching, dependency upgrades, cloud cost tuning, and continuous feature enhancements.',
  },
  {
    id: 'faq-5',
    category: 'Services & Scope',
    question: 'Can I customize my project based on my business needs?',
    answer:
      'Absolutely! Every solution is 100% custom-architected. We avoid rigid templates and proprietary vendor lock-in, ensuring your code remains modular, scalable, and completely owned by your company.',
  },
  {
    id: 'faq-6',
    category: 'Global Clients',
    question: 'Do you work with international clients?',
    answer:
      'Yes, we regularly collaborate with international clients across North America, Europe, the Middle East, and Asia-Pacific through synchronized video standups, clear documentation, and shared GitHub/Jira repositories.',
  },
]

export const FaqPage: FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const baseId = useId()

  const categories = ['All', 'Services & Scope', 'Turnaround & Timelines', 'Support & Maintenance', 'Global Clients']

  const filteredFaqs = EXTENDED_FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="page-view page-view--faq">
      {/* 1. Page Header with Breadcrumbs */}
      <PageHeader
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        title="Everything You Need to Know About"
        highlightWord="Partnering With Us"
        subtitle="Clear answers about our development process, turnaround timelines, technologies, and post-launch support."
        breadcrumbs={[
          { label: 'Home', onClick: () => onNavigate('home') },
          { label: 'FAQ' },
        ]}
      />

      {/* 2. Interactive Search & Category Filter Toolbar */}
      <section className="faq-toolbar-section">
        <div className="container">
          <div className="faq-toolbar-box">
            {/* Live Search Input */}
            <div className="faq-search-wrapper">
              <span className="faq-search-icon" aria-hidden="true">🔍</span>
              <input
                type="text"
                className="faq-search-input"
                placeholder="Search questions (e.g. timelines, support, customization)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search frequently asked questions"
              />
              {searchTerm && (
                <button
                  type="button"
                  className="faq-search-clear"
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear search query"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="faq-category-pills" role="tablist" aria-label="FAQ categories">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === cat}
                  className={`faq-cat-pill ${activeCategory === cat ? 'faq-cat-pill--active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Accordion Layout */}
      <section className="section-padding faq-main-section">
        <div className="container">
          <div className="faq-layout-split">
            {/* Left Helpful Advice Card */}
            <div className="faq-visual-card">
              <div className="faq-visual-badge">
                <span className="faq-bot-icon">💡</span>
                <span className="faq-badge-title">24/7 Guidance</span>
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

              <div className="faq-direct-actions">
                <a
                  href="https://wa.me/918300611720?text=Hello%20AmiHive%20Team%2C%20I%20have%20a%20question%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline-light btn--sm btn-wa-direct"
                >
                  <IconWhatsApp size={16} />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="mailto:info@amihive.com?subject=Inquiry%20regarding%20AmiHive%20Services"
                  className="btn btn--outline-light btn--sm btn-email-direct"
                >
                  <IconMail size={16} />
                  <span>Email Our Desk</span>
                </a>
              </div>
            </div>

            {/* Right Accordion Questions */}
            <div className="faq-accordion-list" role="region" aria-label="Questions list">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => {
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
                        type="button"
                        id={buttonId}
                        className="faq-trigger"
                        onClick={() => toggleItem(faq.id)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                      >
                        <span className="faq-question-text">{faq.question}</span>
                        <span
                          className={`faq-chevron ${isOpen ? 'faq-chevron--rotated' : ''}`}
                          aria-hidden="true"
                        >
                          <IconChevronDown size={20} />
                        </span>
                      </button>

                      {isOpen && (
                        <div
                          id={panelId}
                          className="faq-panel"
                          role="region"
                          aria-labelledby={buttonId}
                        >
                          <div className="faq-panel__content">
                            <span className="faq-item-category-tag">{faq.category}</span>
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      )}
                    </InteractiveServiceCard>
                  )
                })
              ) : (
                <div className="faq-empty-state">
                  <p>No questions matched &ldquo;{searchTerm}&rdquo;.</p>
                  <button
                    type="button"
                    className="btn btn--outline btn--sm"
                    onClick={() => {
                      setSearchTerm('')
                      setActiveCategory('All')
                    }}
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Still Need Help CTA */}
      <section className="section-padding faq-cta-section">
        <div className="container">
          <div className="about-cta-card">
            <div className="about-cta-content text-center">
              <span className="section-eyebrow">STILL HAVE QUESTIONS?</span>
              <h2 className="about-cta-title">
                Speak Directly with an{' '}
                <span className="text-orange">AmiHive Engineer</span>
              </h2>
              <p className="about-cta-lead">
                Schedule a 20-minute architectural consultation to review your technical requirements.
              </p>
              <div className="about-cta-actions">
                <button
                  type="button"
                  className="btn btn--orange btn--lg"
                  onClick={() => onNavigate('contact')}
                >
                  <span>Go to Contact Page</span>
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

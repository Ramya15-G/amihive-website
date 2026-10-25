import { type FC } from 'react'
import { PageHeader } from '../components/PageHeader'
import { ContactSection } from '../components/ContactSection'
import { IconShield, IconClock, IconSpeed } from '../components/Icons'

type ContactPageProps = {
  prefilledService?: string
  onNavigate: (pageKey: 'home' | 'about' | 'services' | 'projects' | 'faq' | 'contact') => void
}

export const ContactPage: FC<ContactPageProps> = ({ prefilledService, onNavigate }) => {
  return (
    <div className="page-view page-view--contact">
      {/* 1. Page Header with Breadcrumbs */}
      <PageHeader
        eyebrow="GET IN TOUCH"
        title="Smart IT Solutions for"
        highlightWord="Your Next Project"
        subtitle="Whether you're planning a new digital platform, exploring AI automation, or modernizing enterprise legacy infrastructure, our solutions desk is here to help."
        breadcrumbs={[
          { label: 'Home', onClick: () => onNavigate('home') },
          { label: 'Contact Us' },
        ]}
      />

      {/* 2. Reassurance Guarantees Banner */}
      <section className="contact-reassurance-banner">
        <div className="container">
          <div className="reassurance-grid">
            <div className="reassurance-item">
              <div className="reassurance-icon text-blue">
                <IconClock size={20} />
              </div>
              <div className="reassurance-text">
                <strong>&lt; 24-Hour Response</strong>
                <span>Guaranteed initial review from senior technical team</span>
              </div>
            </div>

            <div className="reassurance-item">
              <div className="reassurance-icon text-green">
                <IconShield size={20} />
              </div>
              <div className="reassurance-text">
                <strong>Standard NDA Included</strong>
                <span>Your intellectual property and concepts remain 100% confidential</span>
              </div>
            </div>

            <div className="reassurance-item">
              <div className="reassurance-icon text-orange">
                <IconSpeed size={20} />
              </div>
              <div className="reassurance-text">
                <strong>Direct Engineer Access</strong>
                <span>Speak directly to technical architects, not sales representatives</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Contact Form & Direct Channels with Global Hub Visual */}
      <ContactSection prefilledService={prefilledService} />
    </div>
  )
}

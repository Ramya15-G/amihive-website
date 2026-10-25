import { type FC, type MouseEvent } from 'react'
import { Logo } from './Logo'
import { IconMail, IconPhone, IconArrowDown, IconWhatsApp, IconMapPin } from './Icons'
import { type NavLinkItem } from '../types'

type FooterProps = {
  onNavigate: (pageKey: NavLinkItem['pageKey']) => void
}

export const Footer: FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear()

  const handleLink = (e: MouseEvent<HTMLAnchorElement>, pageKey: NavLinkItem['pageKey']) => {
    e.preventDefault()
    onNavigate(pageKey)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-site" aria-label="Site Footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand & Purpose Column */}
          <div className="footer-brand-col">
            <a
              href="#/home"
              className="footer-logo-link"
              onClick={(e) => handleLink(e, 'home')}
              aria-label="AmiHive Home"
            >
              <Logo variant="white-pill" size="md" />
            </a>

            <p className="footer-brand-desc">
              AmiHive Software Solutions accelerates business growth through intelligent technology,
              cloud engineering, AI automation, and enterprise-grade software architectures.
            </p>

            <div className="footer-social-platforms">
              <span className="social-label">Connect with Us:</span>
              <div className="social-icons-row">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Instagram"
                >
                  📷
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Twitter / X"
                >
                  𝕏
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column (Page 15) */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-nav-links">
              <li>
                <a href="#/home" onClick={(e) => handleLink(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#/about" onClick={(e) => handleLink(e, 'about')}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#/services" onClick={(e) => handleLink(e, 'services')}>
                  Services
                </a>
              </li>
              <li>
                <a href="#/projects" onClick={(e) => handleLink(e, 'projects')}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#/faq" onClick={(e) => handleLink(e, 'faq')}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#/contact" onClick={(e) => handleLink(e, 'contact')}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column (Page 15) */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-nav-links">
              <li>
                <a href="#/services" onClick={(e) => handleLink(e, 'services')}>
                  Web Development
                </a>
              </li>
              <li>
                <a href="#/services" onClick={(e) => handleLink(e, 'services')}>
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="#/services" onClick={(e) => handleLink(e, 'services')}>
                  AI & Automation
                </a>
              </li>
              <li>
                <a href="#/services" onClick={(e) => handleLink(e, 'services')}>
                  UI / UX Design
                </a>
              </li>
              <li>
                <a href="#/services" onClick={(e) => handleLink(e, 'services')}>
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details Column (Page 15) */}
          <div className="footer-standards-col">
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-contact-mini">
              <a href="mailto:info@amihive.com" className="footer-contact-link">
                <IconMail size={16} />
                <span>Email: info@amihive.com</span>
              </a>
              <a href="tel:+918300611720" className="footer-contact-link">
                <IconPhone size={16} />
                <span>Phone: +91 83006 11720</span>
              </a>
              <div className="footer-contact-link">
                <IconMapPin size={16} />
                <span>Location: Marthandam, Kanyakumari Dt, Tamil Nadu, India</span>
              </div>
              <a
                href="https://wa.me/918300611720?text=Hello%20AmiHive%20Team"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link footer-contact-link--wa"
              >
                <IconWhatsApp size={16} />
                <span>WhatsApp: +91 83006 11720</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom-strip">
          <p className="footer-copyright">
            © {currentYear} AmiHive Software Solutions. All rights reserved.
          </p>

          <div className="footer-legal-links">
            <a href="#contact" onClick={(e) => handleLink(e, 'contact')}>
              Privacy Policy
            </a>
            <span className="legal-dot">•</span>
            <a href="#contact" onClick={(e) => handleLink(e, 'contact')}>
              Terms of Engagement
            </a>
            <span className="legal-dot">•</span>
            <a href="#contact" onClick={(e) => handleLink(e, 'contact')}>
              Security Overview
            </a>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <span className="rotate-180">
              <IconArrowDown size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}

import { useEffect, useState, type FC, type MouseEvent } from 'react'
import { Logo } from './Logo'
import { IconClose, IconMenu } from './Icons'
import { type NavLinkItem } from '../types'

const NAV_LINKS: NavLinkItem[] = [
  { label: 'HOME', href: '#/home', pageKey: 'home' },
  { label: 'ABOUT', href: '#/about', pageKey: 'about' },
  { label: 'SERVICES', href: '#/services', pageKey: 'services' },
  { label: 'PROJECTS', href: '#/projects', pageKey: 'projects' },
  { label: 'FAQ', href: '#/faq', pageKey: 'faq' },
  { label: 'CONTACT', href: '#/contact', pageKey: 'contact' },
]

type NavbarProps = {
  activePage: NavLinkItem['pageKey']
  onNavigate: (pageKey: NavLinkItem['pageKey']) => void
}

export const Navbar: FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, link: NavLinkItem) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    onNavigate(link.pageKey)
  }

  const handleConnectClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    onNavigate('contact')
  }

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-header--scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Brand Logo */}
        <a
          href="#/home"
          className="navbar-brand"
          onClick={(e) => handleLinkClick(e, NAV_LINKS[0])}
          aria-label="AmiHive Home"
        >
          <Logo variant="white-pill" size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav" aria-label="Main Navigation">
          <ul className="navbar-nav-list">
            {NAV_LINKS.map((link) => {
              const isActive = activePage === link.pageKey
              return (
                <li key={link.label} className="navbar-nav-item">
                  <a
                    href={link.href}
                    className={`navbar-nav-link ${isActive ? 'navbar-nav-link--active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="navbar-actions">
          <a
            href="#/contact"
            className="btn btn--connect"
            onClick={handleConnectClick}
          >
            Connect Us
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <IconClose size={26} /> : <IconMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`navbar-mobile-drawer ${mobileMenuOpen ? 'navbar-mobile-drawer--open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="navbar-mobile-drawer-inner">
          <nav aria-label="Mobile Navigation">
            <ul className="navbar-mobile-list">
              {NAV_LINKS.map((link) => {
                const isActive = activePage === link.pageKey
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`navbar-mobile-link ${isActive ? 'navbar-mobile-link--active' : ''}`}
                      onClick={(e) => handleLinkClick(e, link)}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="mobile-active-bullet" />}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="navbar-mobile-cta">
            <a
              href="#/contact"
              className="btn btn--primary btn--block"
              onClick={handleConnectClick}
            >
              Connect Us
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

import { useState, useEffect, type FC } from 'react'
import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Capabilities } from '../components/Capabilities'
import { AboutSection } from '../components/AboutSection'
import { ServicesSection } from '../components/ServicesSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { TestimonialsSection } from '../components/TestimonialsSection'
import { FaqSection } from '../components/FaqSection'
import { ContactCta } from '../components/ContactCta'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'
import { WhatsAppWidget } from '../components/WhatsAppWidget'
import { type NavLinkItem } from '../types'

export const Home: FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home')
  const [prefilledService, setPrefilledService] = useState<string>('')

  // Scroll spy to highlight active nav link
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'projects', 'faq', 'contact']

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll reveal observer for subtle staggered section and card entrances
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.08,
      }
    )

    const targets = document.querySelectorAll(
      '.section-header, .about-narrative, .about-cards-quad, .approach-three-grid, .service-card, .future-ready-tech-wrapper, .featured-case-banner, .project-card-interactive, .why-card, .comparison-callout, .testimonial-showcase, .faq-item, .contact-info-card, .contact-form-card, .cta-card'
    )

    targets.forEach((target) => {
      target.classList.add('reveal-item')
      observer.observe(target)
    })

    return () => observer.disconnect()
  }, [])

  // Listen to hash changes in URL
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '')
      if (hash) {
        const target = document.getElementById(hash)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
          setActiveSection(hash)
        }
      }
    }

    handleHash()
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleNavigate = (pageKey: NavLinkItem['pageKey'], sectionId?: string) => {
    const targetId = sectionId || pageKey
    setActiveSection(pageKey)
    window.location.hash = `#/${pageKey}`

    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setPrefilledService(serviceTitle)
    handleNavigate('contact', 'contact')
  }

  return (
    <div className="site-wrapper">
      {/* Persistent Navigation Bar with Official Brand Logo */}
      <Navbar activePage={activeSection as NavLinkItem['pageKey']} onNavigate={handleNavigate} />

      <main id="main-content">
        {/* A. Hero Section with Authentic Headline, Cinematic Glow, & Digital Globe */}
        <Hero
          onGetStarted={() => handleNavigate('contact', 'contact')}
          onExploreServices={() => handleNavigate('services', 'services')}
        />

        {/* Core Technology Capabilities Bar */}
        <Capabilities />

        {/* B. About Us: Who We Are, 4 Quad Pillars, Skill Meters (91%, 87%, 72%, 68%) & 3-Step Strategy */}
        <AboutSection />

        {/* C. Verified Services Showcase & Future-Ready Tech Orbit Wheel */}
        <ServicesSection onSelectServiceForContact={handleSelectServiceForContact} />

        {/* D. Latest Case Studies: Featured Aurora Workspace & Project Gallery */}
        <ProjectsSection />

        {/* Why Choose AmiHive: 4 Core Differentiators & Operational Comparison */}
        <WhyChooseUs />

        {/* Verified Client Testimonials Carousel: Pn Granites, StitchCraft Artistry, Master */}
        <TestimonialsSection />

        {/* E. Frequently Asked Questions: Exact 6 Verified Inquiries from PDF */}
        <FaqSection />

        {/* Conversion Banner: LET'S BUILD YOUR NEXT PROJECT TOGETHER */}
        <ContactCta
          onContactClick={() => handleNavigate('contact', 'contact')}
          onExploreProjects={() => handleNavigate('projects', 'projects')}
        />

        {/* F. Contact Section: Direct Office Channels, Marthandam HQ, & Glassmorphic Form */}
        <ContactSection prefilledService={prefilledService} />
      </main>

      {/* G. Complete Site Footer with Verified Socials & Address */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Quick Connect Widget */}
      <WhatsAppWidget />
    </div>
  )
}

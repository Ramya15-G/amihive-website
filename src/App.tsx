import { useState, useEffect, useRef, type FC } from 'react'
import { flushSync } from 'react-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { WhatsAppWidget } from './components/WhatsAppWidget'
import { ErrorBoundary } from './components/ErrorBoundary'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ProjectsPage } from './pages/ProjectsPage'
import { FaqPage } from './pages/FaqPage'
import { ContactPage } from './pages/ContactPage'
import { type NavLinkItem } from './types'
import './App.css'

type PageKey = NavLinkItem['pageKey']

type ViewTransitionDocument = Document & {
  startViewTransition?: (updateCallback: () => void) => {
    ready: Promise<void>
    updateCallbackDone: Promise<void>
    finished: Promise<void>
  }
}

export const App: FC = () => {
  // Parse initial route from window.location.hash (#/about, #/services, etc.)
  const parseRoute = (): PageKey => {
    const raw = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase()
    if (raw === 'about') return 'about'
    if (raw === 'services') return 'services'
    if (raw === 'projects') return 'projects'
    if (raw === 'faq') return 'faq'
    if (raw === 'contact') return 'contact'
    return 'home'
  }

  const [activePage, setActivePage] = useState<PageKey>(parseRoute)
  const [prefilledService, setPrefilledService] = useState<string>('')
  const activePageRef = useRef(activePage)

  const updateActivePage = (page: PageKey) => {
    if (activePageRef.current === page) return

    const update = () => {
      activePageRef.current = page
      flushSync(() => setActivePage(page))
    }
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const viewTransitionDocument = document as ViewTransitionDocument

    if (viewTransitionDocument.startViewTransition && !reducedMotion) {
      const transition = viewTransitionDocument.startViewTransition(update)
      void Promise.allSettled([
        transition.ready,
        transition.updateCallbackDone,
        transition.finished,
      ])
    } else {
      update()
    }
  }

  // Sync state with browser URL hash change (back/forward navigation & direct links)
  useEffect(() => {
    const handleHashChange = () => {
      const page = parseRoute()
      updateActivePage(page)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    // Set initial normalized hash if empty
    if (!window.location.hash || window.location.hash === '#') {
      window.history.replaceState(null, '', '#/home')
    }

    window.addEventListener('hashchange', handleHashChange)
    window.addEventListener('popstate', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
      window.removeEventListener('popstate', handleHashChange)
    }
  }, [])

  // Dynamic document title update per route
  useEffect(() => {
    const titles: Record<PageKey, string> = {
      home: 'AmiHive — Smart IT Solutions for Next-Gen Business',
      about: 'About Us — AmiHive Software Solutions',
      services: 'Engineering & AI Services — AmiHive Software Solutions',
      projects: 'Projects & Case Studies — AmiHive Software Solutions',
      faq: 'Frequently Asked Questions — AmiHive Software Solutions',
      contact: 'Contact Us — AmiHive Software Solutions',
    }
    document.title = titles[activePage] || 'AmiHive — Smart IT Solutions'
  }, [activePage])

  // Explicit navigation handler
  const handleNavigate = (pageKey: PageKey) => {
    if (window.location.hash !== `#/${pageKey}`) {
      window.location.hash = `#/${pageKey}`
    } else {
      updateActivePage(pageKey)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Pre-fill contact form service and navigate to contact page
  const handleSelectServiceForContact = (serviceTitle: string) => {
    setPrefilledService(serviceTitle)
    handleNavigate('contact')
  }

  return (
    <ErrorBoundary>
      <div className="site-wrapper">
        {/* Persistent Responsive Navbar with active route indicators */}
        <Navbar activePage={activePage} onNavigate={handleNavigate} />

        {/* Dynamic Route View Container with entry transition */}
        <main id="main-content" tabIndex={-1} className="site-main" key={activePage}>
          {activePage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onSelectServiceForContact={handleSelectServiceForContact}
            />
          )}

          {activePage === 'about' && (
            <AboutPage onNavigate={handleNavigate} />
          )}

          {activePage === 'services' && (
            <ServicesPage
              onNavigate={handleNavigate}
              onSelectServiceForContact={handleSelectServiceForContact}
            />
          )}

          {activePage === 'projects' && (
            <ProjectsPage onNavigate={handleNavigate} />
          )}

          {activePage === 'faq' && (
            <FaqPage onNavigate={handleNavigate} />
          )}

          {activePage === 'contact' && (
            <ContactPage
              prefilledService={prefilledService}
              onNavigate={handleNavigate}
            />
          )}
        </main>

        {/* Persistent Responsive Footer with working page routing */}
        <Footer onNavigate={handleNavigate} />

        {/* Persistent Live Assistance Floating Widget */}
        <WhatsAppWidget />
      </div>
    </ErrorBoundary>
  )
}

export default App

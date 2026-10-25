import { useState, type FC } from 'react'
import { IconArrowRight, IconClose, IconCheck } from './Icons'
import { type ProjectItem } from '../types'
import { SiteImages } from '../assets/images'
import { InteractiveServiceCard } from './InteractiveServiceCard'

const VERIFIED_PROJECTS: ProjectItem[] = [
  {
    id: 'ai-chat-automation',
    title: 'AI-Powered Chat Automation',
    category: 'AI & Automation',
    badge: 'NLP & Conversational AI',
    summary:
      'An intelligent NLP-driven virtual assistant built to streamline customer interactions with real-time, human-like responses.',
    description:
      'Engineered to handle thousands of concurrent customer support inquiries with sub-second response times. Integrated with enterprise knowledge bases and multi-turn contextual memory.',
    challenge:
      'Customer support teams were overwhelmed with repetitive Tier-1 questions, resulting in 45-minute average response times.',
    solution:
      'Trained custom transformer retrieval models with strict corporate guardrails, enabling autonomous resolution of 78% of common inquiries.',
    keyBullets: [
      'Sub-800ms natural language response latency',
      'Multi-turn conversational context retention',
      'Seamless human escalation triggers with complete conversation transcripts',
    ],
    metrics: [
      { label: 'Auto-Resolution', value: '78%' },
      { label: 'Response Latency', value: '< 800ms' },
      { label: 'User Rating', value: '4.9/5' },
    ],
    technologies: ['Python', 'FastAPI', 'PyTorch', 'LangChain', 'Redis', 'Docker'],
    accentColor: '#FF7A00',
    mockupType: 'hologram',
    imageUrl: SiteImages.serviceAiAuto,
  },
  {
    id: 'ecommerce-dashboard',
    title: 'E-Commerce Intelligence Dashboard',
    category: 'Web & Cloud',
    badge: 'Enterprise Analytics',
    summary:
      'A high-performance analytics platform that simplifies order tracking, sales insights, and inventory forecasting.',
    description:
      'Consolidates multi-channel commerce streams into a single responsive operational center. Features real-time order lifecycle monitoring, sales velocity alerts, and automated stock reordering.',
    challenge:
      'Fragmented data across Shopify, Amazon, and offline warehouses caused delayed inventory auditing and frequent stockouts.',
    solution:
      'Architected an event-driven telemetry pipeline aggregating webhook data into live PostgreSQL time-series dashboards with interactive charts.',
    keyBullets: [
      'Real-time order synchronization across 12+ sales channels',
      'Predictive inventory exhaustion alerts based on machine learning velocity models',
      'Role-based operational views for warehouse staff, finance, and executives',
    ],
    metrics: [
      { label: 'Sync Delay', value: '< 250ms' },
      { label: 'Stockout Reduction', value: '64%' },
      { label: 'Data Freshness', value: 'Real-Time' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind'],
    accentColor: '#2563EB',
    mockupType: 'dashboard',
    imageUrl: SiteImages.projectEcommerceDash,
  },
  {
    id: 'next-gen-mobile-ui',
    title: 'Next-Gen Mobile App UI',
    category: 'Mobile Apps',
    badge: 'iOS & Android Experience',
    summary:
      'A modern mobile interface engineered for seamless navigation, dark mode support, and elevated user experience.',
    description:
      'Crafted with 60fps gesture fluid animations, offline caching, and biometric authorization. Designed to maximize user retention and daily active usage.',
    challenge:
      'Legacy mobile application suffered from clunky navigation menus, slow cold starts, and poor accessibility scores.',
    solution:
      'Rebuilt from the ground up using Flutter and clean architecture patterns, reducing cold start time by 65% and achieving 100% WCAG color compliance.',
    keyBullets: [
      'Universal dark & light theme auto-detection with custom design tokens',
      'Biometric FaceID and fingerprint instant credential vault',
      'Offline-first data caching with silent background synchronization',
    ],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'App Store Score', value: '4.8★' },
      { label: 'Cold Start', value: '0.6s' },
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'SQLite', 'REST APIs'],
    accentColor: '#3B82F6',
    mockupType: 'mobile',
    imageUrl: SiteImages.serviceMobileApp,
  },
  {
    id: 'high-conversion-marketing',
    title: 'High-Conversion Marketing Platform',
    category: 'Web & Cloud',
    badge: 'Brand & Growth',
    summary:
      'A strategically crafted landing page focused on boosting engagement, brand visibility, and qualified lead generation.',
    description:
      'Built with ultra-fast static site generation, interactive micro-animations, and integrated lead scoring webhooks to drive business customer acquisition.',
    challenge:
      'Previous corporate website suffered from bloated assets, slow loading on mobile devices, and low conversion rates.',
    solution:
      'Implemented modern Next.js static generation with WebP asset optimization, achieving a 99/100 Google Lighthouse performance score.',
    keyBullets: [
      '99/100 Mobile Lighthouse Performance score',
      'Integrated CRM webhook dispatching for immediate sales follow-up',
      'Dynamic A/B testing capability for copy and CTA experiments',
    ],
    metrics: [
      { label: 'Conversion Lift', value: '+42%' },
      { label: 'Page Load', value: '0.7s' },
      { label: 'Lighthouse', value: '99/100' },
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
    accentColor: '#EA580C',
    mockupType: 'browser',
    imageUrl: SiteImages.serviceWebDev,
  },
  {
    id: 'edge-iot-control',
    title: 'Edge IoT Device Control Suite',
    category: 'IoT & Hardware',
    badge: 'Hardware & IoT',
    summary:
      'Secure device orchestration at scale with low-latency MQTT telemetry and remote firmware diagnostics.',
    description:
      'Engineered for industrial telemetry and connected hardware networks. Features encrypted device-to-cloud handshakes and automated anomaly alerts.',
    challenge:
      'Industrial hardware nodes frequently dropped connections over intermittent cellular uplinks, causing telemetry gaps.',
    solution:
      'Deployed lightweight MQTT broker clusters with store-and-forward edge caching to guarantee zero message loss during network dropouts.',
    keyBullets: [
      'Encrypted TLS 1.3 MQTT edge communication protocols',
      'Remote over-the-air (OTA) firmware upgrade verification pipeline',
      'Automated device heartbeat monitoring and sensor failure alerts',
    ],
    metrics: [
      { label: 'Connected Nodes', value: '25,000+' },
      { label: 'Message Loss', value: '0.00%' },
      { label: 'Latency', value: '< 45ms' },
    ],
    technologies: ['Go', 'MQTT', 'Docker', 'TimescaleDB', 'Kubernetes'],
    accentColor: '#10B981',
    mockupType: 'terminal',
    imageUrl: SiteImages.projectIotCommand,
  },
  {
    id: 'smart-home-automation',
    title: 'Smart Home Automation Mesh',
    category: 'IoT & Hardware',
    badge: 'Automation Mesh',
    summary:
      'Connected smart devices working seamlessly together through synchronized routines and voice assistant integrations.',
    description:
      'A unified hub connecting lighting, climate, security sensors, and power monitoring into an intuitive local-first management console.',
    challenge:
      'Users struggled with fragmented vendor proprietary apps that could not communicate with each other.',
    solution:
      'Created a unified protocol abstraction layer compatible with Zigbee, Z-Wave, and Matter devices with sub-10ms local responsiveness.',
    keyBullets: [
      'Local-first offline operation independent of external cloud connectivity',
      'Sub-10ms command execution latency for local mesh devices',
      'End-to-end encrypted remote access via secure WireGuard tunnel',
    ],
    metrics: [
      { label: 'Local Latency', value: '< 10ms' },
      { label: 'Protocol Support', value: 'Universal' },
      { label: 'Device Capacity', value: '200+ Nodes' },
    ],
    technologies: ['Node.js', 'WebSockets', 'React', 'Docker', 'SQLite'],
    accentColor: '#F59E0B',
    mockupType: 'dashboard',
    imageUrl: SiteImages.processWorkflow,
  },
]

const ProjectCardVisualMockup: FC<{ project: ProjectItem }> = ({ project }) => {
  const { id, mockupType, accentColor, metrics, imageUrl, title } = project

  if (imageUrl) {
    return (
      <div className="project-mockup-visual-wrapper">
        <img
          src={imageUrl}
          alt={title}
          className="project-mockup-cover-img"
          loading="lazy"
        />
        <div className="project-mockup-vignette" />
        <div className="project-mockup-floating-badge" style={{ borderColor: accentColor }}>
          <span className="badge-pulse-dot" style={{ background: accentColor }} />
          <span className="badge-text">{metrics[0].label}: {metrics[0].value}</span>
        </div>
      </div>
    )
  }

  if (id === 'ai-chat-automation' || mockupType === 'hologram') {
    return (
      <div className="custom-mockup mockup--chat">
        <div className="chat-mini-bubble chat-mini-bubble--user">
          <span>Reduce response times with AI?</span>
        </div>
        <div className="chat-mini-bubble chat-mini-bubble--ai">
          <div className="chat-ai-header">
            <span className="chat-ai-pulse" style={{ background: accentColor }} />
            <span className="chat-ai-name">AmiHive NLP Agent</span>
          </div>
          <p className="chat-ai-text">
            Transformer ready. Auto-resolution: <strong>{metrics[0].value}</strong> ({metrics[1].value}).
          </p>
        </div>
        <div className="chat-mini-input">
          <span className="chat-placeholder">Ask intelligent assistant...</span>
          <span className="chat-send-btn" style={{ background: accentColor }}>➔</span>
        </div>
      </div>
    )
  }

  if (id === 'ecommerce-dashboard') {
    return (
      <div className="custom-mockup mockup--dashboard">
        <div className="dash-mini-top">
          <div className="dash-stat">
            <span className="dash-stat__num">$128.4k</span>
            <span className="dash-stat__badge">+24.8%</span>
          </div>
          <div className="dash-stat-pill">
            <span>Sync: {metrics[0].value}</span>
          </div>
        </div>
        <div className="dash-chart-bars">
          <div className="dash-chart-bar" style={{ height: '40%' }} />
          <div className="dash-chart-bar" style={{ height: '65%' }} />
          <div className="dash-chart-bar" style={{ height: '50%' }} />
          <div className="dash-chart-bar dash-chart-bar--accent" style={{ height: '88%', background: accentColor }} />
          <div className="dash-chart-bar" style={{ height: '60%' }} />
          <div className="dash-chart-bar dash-chart-bar--orange" style={{ height: '95%' }} />
          <div className="dash-chart-bar" style={{ height: '72%' }} />
        </div>
        <div className="dash-footer-row">
          <span className="dash-dot-live">● Live Orders</span>
          <span className="dash-warehouse-tag">Stockouts: -64%</span>
        </div>
      </div>
    )
  }

  if (id === 'next-gen-mobile-ui' || mockupType === 'mobile') {
    return (
      <div className="custom-mockup mockup--mobile">
        <div className="mobile-mockup-frame">
          <div className="mobile-mockup-notch" />
          <div className="mobile-mockup-screen">
            <div className="mobile-screen-header">
              <span className="mobile-screen-brand">AmiHive Mobile</span>
              <span className="mobile-fps-badge" style={{ color: accentColor }}>{metrics[0].value}</span>
            </div>
            <div className="mobile-screen-card">
              <span className="mobile-card-tag">Biometric Vault</span>
              <span className="mobile-card-sub">FaceID / TouchID Active</span>
            </div>
            <div className="mobile-action-pill" style={{ background: accentColor }}>
              <span>Instant Launch ({metrics[2].value})</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (id === 'edge-iot-control' || mockupType === 'terminal') {
    return (
      <div className="custom-mockup mockup--terminal">
        <div className="terminal-header-line">
          <span className="terminal-user">root@amihive-edge:~$</span>
        </div>
        <div className="terminal-body-lines">
          <div className="term-line term-line--cyan">[TLS 1.3] Handshake verified</div>
          <div className="term-line term-line--green">[OK] Nodes: {metrics[0].value} synced</div>
          <div className="term-line term-line--amber">[TELEMETRY] Loss: {metrics[1].value} ({metrics[2].value})</div>
          <div className="term-cursor-line">
            <span className="term-prompt">&gt;</span>
            <span className="term-cursor">_</span>
          </div>
        </div>
      </div>
    )
  }

  if (id === 'smart-home-automation') {
    return (
      <div className="custom-mockup mockup--mesh">
        <div className="mesh-tiles-grid">
          <div className="mesh-tile mesh-tile--active">
            <span className="mesh-tile__name">Living Room</span>
            <span className="mesh-tile__val">22.5°C</span>
            <span className="mesh-tile__status text-green">● Online</span>
          </div>
          <div className="mesh-tile">
            <span className="mesh-tile__name">Security Mesh</span>
            <span className="mesh-tile__val">Armed</span>
            <span className="mesh-tile__status text-amber">● Zigbee</span>
          </div>
          <div className="mesh-tile mesh-tile--wide">
            <div className="mesh-wide-header">
              <span className="mesh-tile__name">Mesh Latency</span>
              <span className="mesh-tile__val text-orange">{metrics[0].value}</span>
            </div>
            <div className="mesh-progress-track">
              <div className="mesh-progress-fill" style={{ width: '92%', background: accentColor }} />
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Default browser / marketing mockup
  return (
    <div className="custom-mockup mockup--browser">
      <div className="browser-top-bar">
        <span className="browser-url-pill">https://amihive.com/growth</span>
      </div>
      <div className="browser-preview-body">
        <div className="browser-hero-wire">
          <div className="browser-title-wire" />
          <div className="browser-desc-wire" />
          <div className="browser-btn-wire" style={{ background: accentColor }}>Get Started</div>
        </div>
        <div className="browser-score-badge">
          <span className="browser-score-val" style={{ color: accentColor }}>{metrics[0].value}</span>
          <span className="browser-score-lbl">Conversion</span>
        </div>
      </div>
      <div className="browser-perf-tag">Lighthouse: {metrics[2].value}</div>
    </div>
  )
}

export const ProjectsSection: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)

  const categories = ['All', 'Web & Cloud', 'Mobile Apps', 'AI & Automation', 'IoT & Hardware']

  const filteredProjects =
    activeCategory === 'All'
      ? VERIFIED_PROJECTS
      : VERIFIED_PROJECTS.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding projects-section" aria-labelledby="projects-heading">
      <div className="container">
        {/* Section Header (from Page 9 of PDF) */}
        <div className="section-header text-center">
          <span className="section-eyebrow">LATEST CASE STUDIES</span>
          <h2 id="projects-heading" className="section-title">
            Crafting Future-Ready Digital Solutions for{' '}
            <span className="text-orange">Business Growth</span>
          </h2>
          <p className="section-lead">
            Explore how we bring ideas to life through innovative design, smart engineering,
            and scalable technology delivering digital experiences for businesses worldwide.
          </p>
        </div>

        {/* Featured Case Study Hero Banner: Aurora Collaborative Workspace (Pages 21 & 22 of PDF) */}
        <div className="featured-case-banner">
          <div className="featured-case-grid">
            <div className="featured-case-copy">
              <span className="featured-pill">FEATURED CASE STUDY</span>
              <h3 className="featured-title">Aurora — Collaborative Workspace</h3>
              <p className="featured-lead">
                A next-generation mixed-reality workspace designed to power immersive teamwork,
                real-time decision-making, and seamless digital productivity.
              </p>

              {/* Verified Bullets from Page 22 */}
              <ul className="featured-bullet-list">
                <li className="featured-bullet-item">
                  <span className="bullet-dot" />
                  <span>Real-time immersive multi-user 3D collaboration</span>
                </li>
                <li className="featured-bullet-item">
                  <span className="bullet-dot" />
                  <span>AI-driven contextual suggestions for smarter workflows</span>
                </li>
                <li className="featured-bullet-item">
                  <span className="bullet-dot" />
                  <span>Cross-device continuity with persistent environments</span>
                </li>
              </ul>

              <div className="featured-actions">
                <button
                  type="button"
                  className="btn btn--orange btn--lg"
                  onClick={() =>
                    setSelectedProject({
                      id: 'aurora-workspace',
                      title: 'Aurora — Collaborative Workspace',
                      category: 'Web & Cloud',
                      badge: 'Featured Case Study',
                      summary:
                        'A next-generation mixed-reality workspace designed to power immersive teamwork, real-time decision-making, and seamless digital productivity.',
                      description:
                        'Aurora transforms traditional remote team workflows into an interactive spatial environment. By integrating low-latency WebRTC data channels with AI-powered contextual assistance, team members can collaborate on complex data visualization and architecture models in real time.',
                      challenge:
                        'Distributed engineering and design teams needed a way to review live 3D models and code architecture simultaneously without high latency.',
                      solution:
                        'Engineered a WebGL-powered spatial canvas with WebRTC data synchronization and secure enterprise identity integration.',
                      keyBullets: [
                        'Real-time immersive multi-user 3D collaboration',
                        'AI-driven contextual suggestions for smarter workflows',
                        'Cross-device continuity with persistent environments',
                      ],
                      metrics: [
                        { label: 'Sync Latency', value: '< 35ms' },
                        { label: 'Active Users', value: '500+ Pods' },
                        { label: 'Efficiency Gain', value: '+45%' },
                      ],
                      technologies: ['Three.js', 'React', 'TypeScript', 'WebRTC', 'Node.js', 'Docker'],
                      accentColor: '#FF7A00',
                      mockupType: 'browser',
                      imageUrl: SiteImages.projectAurora,
                    })
                  }
                >
                  <span>Explore Case Study</span>
                  <IconArrowRight size={18} />
                </button>
              </div>
            </div>

            {/* Visual Representation of Multi-Screen Aurora Workspace (from Page 22) */}
            <div className="featured-case-visual" aria-hidden="true">
              <div className="workspace-device-mockup">
                <div className="screen-frame screen-frame--main">
                  <div className="screen-header-bar">
                    <span className="screen-dot screen-dot--red" />
                    <span className="screen-dot screen-dot--yellow" />
                    <span className="screen-dot screen-dot--green" />
                    <span className="screen-title-tab">aurora-workspace.amihive.app</span>
                  </div>
                  <div className="screen-viewport screen-viewport--workspace">
                    <img
                      src={SiteImages.projectAurora}
                      alt="Aurora Collaborative Workspace"
                      className="workspace-cover-img"
                    />
                    <div className="workspace-overlay-hud">
                      <div className="code-node-cluster">
                        <span className="node-pill">Node: CloudSync</span>
                        <span className="node-pill node-pill--orange">State: Active (0.02s)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="screen-frame screen-frame--sub">
                  <div className="screen-viewport screen-viewport--mobile">
                    <img
                      src={SiteImages.serviceMobileApp}
                      alt="Aurora Companion Mobile"
                      className="workspace-mobile-cover-img"
                    />
                    <div className="mobile-sub-sync-tag">
                      <span className="mobile-sub-text">Sync: Connected</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs-container">
          <div className="filter-tabs" role="tablist" aria-label="Project categories">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat}
                className={`filter-tab-btn ${activeCategory === cat ? 'filter-tab-btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Gallery Grid (Pages 10, 11, 24-29 of PDF) */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <InteractiveServiceCard key={project.id} className="project-card-interactive">
              {/* Dynamic Mockup Header */}
              <div className="project-card__mockup-head">
                <div className="mockup-header-bar">
                  <div className="mockup-dots">
                    <span className="dot dot--r" />
                    <span className="dot dot--y" />
                    <span className="dot dot--g" />
                  </div>
                  <span className="mockup-domain">{project.badge}</span>
                </div>

                <div className="mockup-screen-preview">
                  <div className="screen-ambient-glow" style={{ background: project.accentColor }} />
                  <ProjectCardVisualMockup project={project} />
                </div>
              </div>

              {/* Card Body */}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__summary">{project.summary}</p>

                {/* Tech Pills */}
                <div className="project-card__tech">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Button (Matching Page 10 Orange Button) */}
                <div className="project-card__action">
                  <button
                    type="button"
                    className="btn btn--orange btn--sm btn--project-view"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Details</span>
                    <IconArrowRight size={14} />
                  </button>
                </div>
              </div>
            </InteractiveServiceCard>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-modal-title"
        >
          <div className="modal-content modal-content--lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-header__info">
                <span className="modal-category">{selectedProject.badge}</span>
                <h3 id="case-modal-title" className="modal-title">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close dialog"
              >
                <IconClose size={22} />
              </button>
            </div>

            <div className="modal-body">
              {selectedProject.imageUrl && (
                <div className="modal-hero-cover-container">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="modal-hero-cover-img"
                  />
                  <div className="modal-hero-cover-overlay" />
                </div>
              )}
              <div className="modal-metrics-bar">
                {selectedProject.metrics.map((metric) => (
                  <div key={metric.label} className="modal-metric-box">
                    <span className="modal-metric-box__value">{metric.value}</span>
                    <span className="modal-metric-box__label">{metric.label}</span>
                  </div>
                ))}
              </div>

              <div className="modal-section">
                <h4 className="modal-subtitle">Project Overview</h4>
                <p className="modal-description">{selectedProject.description}</p>
              </div>

              {selectedProject.keyBullets && selectedProject.keyBullets.length > 0 && (
                <div className="modal-section">
                  <h4 className="modal-subtitle">Core Architectural Highlights</h4>
                  <ul className="modal-bullets-list">
                    {selectedProject.keyBullets.map((bullet) => (
                      <li key={bullet} className="modal-bullet-row">
                        <span className="bullet-check">
                          <IconCheck size={16} />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="modal-split">
                <div className="modal-split__col">
                  <h4 className="modal-subtitle modal-subtitle--challenge">Operational Challenge</h4>
                  <p className="modal-text">{selectedProject.challenge}</p>
                </div>
                <div className="modal-split__col">
                  <h4 className="modal-subtitle modal-subtitle--solution">AmiHive Solution</h4>
                  <p className="modal-text">{selectedProject.solution}</p>
                </div>
              </div>

              <div className="modal-section">
                <h4 className="modal-subtitle">Technical Stack</h4>
                <div className="modal-tech-cloud">
                  {selectedProject.technologies.map((t) => (
                    <span key={t} className="tech-badge tech-badge--modal">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn--outline"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => {
                  setSelectedProject(null)
                  const contactEl = document.getElementById('contact')
                  contactEl?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Discuss a Similar Project
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

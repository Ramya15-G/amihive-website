import { type FC } from 'react'

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Strategic Scoping',
    subtitle: 'Clarifying Core Objectives',
    description:
      'We dive deep into your workflow requirements, technical constraints, data architecture, and end-user profiles. We define an actionable roadmap before writing a single line of code.',
    deliverables: ['Technical Spec Sheet', 'Architecture Blueprint', 'Sprint Schedule'],
  },
  {
    step: '02',
    title: 'UI/UX Prototyping & System Design',
    subtitle: 'Designing with Intention',
    description:
      'Our designers and system architects work hand-in-hand to craft intuitive user flows, accessible component design systems, database schemas, and API contracts.',
    deliverables: ['Clickable Wireframes', 'Design Tokens', 'API Specification'],
  },
  {
    step: '03',
    title: 'Agile Engineering & Continuous Testing',
    subtitle: 'Building with Reliability',
    description:
      'Development occurs in focused bi-weekly sprints. Every pull request undergoes automated linting, test suite execution, and peer code reviews before staging deployment.',
    deliverables: ['Sprint Deployments', 'Automated Test Suites', 'Code Documentation'],
  },
  {
    step: '04',
    title: 'Production Launch & Zero-Downtime CI/CD',
    subtitle: 'Deploying with Confidence',
    description:
      'We execute controlled zero-downtime releases utilizing blue-green or canary deployment strategies on secure cloud environments, backed by comprehensive telemetry.',
    deliverables: ['Cloud Infrastructure', 'Live Production Cutover', 'DNS & SSL Config'],
  },
  {
    step: '05',
    title: 'Continuous Optimization & 24/7 SLA',
    subtitle: 'Iterating for Long-Term Value',
    description:
      'Software succeeds through ongoing iteration. We provide ongoing proactive monitoring, security patches, performance tuning, and feature expansion as your user base expands.',
    deliverables: ['Telemetry Monitoring', 'Proactive Security Patches', 'Feature Enhancements'],
  },
]

export const ProcessSection: FC = () => {
  return (
    <section className="section-padding process-section" aria-labelledby="process-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">OUR METHODOLOGY</span>
          <h2 id="process-heading" className="section-title">
            A Structured Process from{' '}
            <span className="text-orange">Concept to Production</span>
          </h2>
          <p className="section-lead">
            Every AmiHive project adheres to a disciplined, transparent engineering lifecycle
            engineered to deliver maximum quality without unpredictable delays.
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-timeline">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.step} className="process-step-item">
              <div className="process-step-marker">
                <span className="process-step-number">{step.step}</span>
                {idx < PROCESS_STEPS.length - 1 && <span className="process-step-line" />}
              </div>

              <div className="process-step-content">
                <div className="process-step-header">
                  <span className="process-step-subtitle">{step.subtitle}</span>
                  <h3 className="process-step-title">{step.title}</h3>
                </div>
                <p className="process-step-description">{step.description}</p>

                <div className="process-step-deliverables">
                  <span className="deliverables-title">Key Outputs:</span>
                  <div className="deliverables-tags">
                    {step.deliverables.map((item) => (
                      <span key={item} className="deliverable-tag">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

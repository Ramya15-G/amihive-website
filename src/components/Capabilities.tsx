import { type FC } from 'react'

const DOMAINS = [
  { name: 'Cloud Architecture & DevOps', tag: 'AWS • Azure • GCP' },
  { name: 'Intelligent AI & Automation', tag: 'ML • LLMs • Workflows' },
  { name: 'Full-Stack Web Engineering', tag: 'React • Node • TS' },
  { name: 'Enterprise Mobile Solutions', tag: 'iOS • Android • Flutter' },
  { name: 'High-Performance APIs', tag: 'REST • GraphQL • gRPC' },
  { name: 'Cybersecurity & Compliance', tag: 'Zero-Trust • HIPAA' },
]

export const Capabilities: FC = () => {
  return (
    <section className="capabilities-bar" aria-label="AmiHive Core Capabilities">
      <div className="capabilities-bar__container">
        <div className="capabilities-bar__label">
          <span className="capabilities-pulse" />
          <span>CORE STRENGTHS</span>
        </div>

        <div className="capabilities-bar__list">
          {DOMAINS.map((item, index) => (
            <div key={item.name} className="capability-chip">
              <span className="capability-chip__index">0{index + 1}</span>
              <div className="capability-chip__info">
                <span className="capability-chip__name">{item.name}</span>
                <span className="capability-chip__tag">{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

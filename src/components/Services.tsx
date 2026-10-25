import { IconAi, IconMobile, IconSoftware, IconWeb } from './Icons'

const SERVICES = [
  {
    title: 'Web Development',
    description:
      'Responsive, performant websites and web applications designed for clarity, speed, and long-term maintainability.',
    Icon: IconWeb,
  },
  {
    title: 'Mobile App Development',
    description:
      'Native-feeling mobile experiences that keep users engaged while staying aligned with your product goals.',
    Icon: IconMobile,
  },
  {
    title: 'AI & Automation',
    description:
      'Practical automation and intelligent workflows that reduce friction and free teams to focus on higher-value work.',
    Icon: IconAi,
  },
  {
    title: 'Custom Software',
    description:
      'Purpose-built systems tailored to your operations—scalable foundations instead of one-size-fits-all tools.',
    Icon: IconSoftware,
  },
]

export function Services() {
  return (
    <section id="services" className="section services" aria-labelledby="services-heading">
      <div className="section__header">
        <p className="section__eyebrow">What we build</p>
        <h2 id="services-heading" className="section__title">
          Technology that moves business forward.
        </h2>
        <p className="section__lead">
          From polished interfaces to reliable backend systems, AmiHive helps teams
          turn product ideas into dependable digital solutions.
        </p>
      </div>

      <div className="services__grid">
        {SERVICES.map(({ title, description, Icon }) => (
          <article key={title} className="service-card">
            <div className="service-card__icon" aria-hidden="true">
              <Icon className="service-card__svg" />
            </div>
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__text">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

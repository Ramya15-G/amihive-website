const PROJECTS = [
  {
    title: 'Product Platform Concept',
    category: 'Web Product',
    description:
      'An illustrative concept for a multi-module product hub with modular navigation and calm operational clarity.',
    visual: 'lattice',
  },
  {
    title: 'Operations Workflow Studio',
    category: 'Automation',
    description:
      'A concept preview exploring connected process flows, status visibility, and intelligent task routing.',
    visual: 'orbit',
  },
  {
    title: 'Customer Experience Layer',
    category: 'Digital Experience',
    description:
      'An illustrative interface direction focused on guided journeys, content hierarchy, and responsive interaction.',
    visual: 'signal',
  },
] as const

export function FeaturedWork() {
  return (
    <section id="work" className="section work" aria-labelledby="work-heading">
      <div className="section__header">
        <p className="section__eyebrow">Selected concepts</p>
        <h2 id="work-heading" className="section__title">
          Ideas brought to life.
        </h2>
        <p className="section__lead">
          Illustrative project previews that show how AmiHive approaches visual
          systems and product thinking. Replace these with verified portfolio
          details when available.
        </p>
      </div>

      <div className="work__grid">
        {PROJECTS.map((project) => (
          <article key={project.title} className="work-card">
            <div className={`work-card__visual work-card__visual--${project.visual}`} aria-hidden="true">
              <div className="work-card__visual-inner" />
            </div>
            <div className="work-card__body">
              <p className="work-card__category">{project.category}</p>
              <h3 className="work-card__title">{project.title}</h3>
              <p className="work-card__text">{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

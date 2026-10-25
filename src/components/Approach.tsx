const STEPS = [
  {
    number: '01',
    title: 'Understand the problem',
    description:
      'We start by clarifying goals, constraints, and the people who will use the product—so the solution fits the real need.',
  },
  {
    number: '02',
    title: 'Design with intention',
    description:
      'Interfaces and system architecture are shaped together, prioritizing clarity, usability, and technical feasibility.',
  },
  {
    number: '03',
    title: 'Build with reliability',
    description:
      'Development focuses on clean structure, maintainable code, and steady delivery of working software.',
  },
  {
    number: '04',
    title: 'Improve continuously',
    description:
      'After launch, we refine based on feedback and evolving requirements—keeping products useful as they grow.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="section approach" aria-labelledby="approach-heading">
      <div className="section__header">
        <p className="section__eyebrow">Why AmiHive</p>
        <h2 id="approach-heading" className="section__title">
          A practical approach to digital products.
        </h2>
        <p className="section__lead">
          Our process stays grounded: understand carefully, design thoughtfully,
          develop reliably, and keep improving.
        </p>
      </div>

      <ol className="approach__timeline">
        {STEPS.map((step) => (
          <li key={step.number} className="approach__step">
            <div className="approach__marker" aria-hidden="true">
              <span className="approach__number">{step.number}</span>
            </div>
            <div className="approach__content">
              <h3 className="approach__title">{step.title}</h3>
              <p className="approach__text">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

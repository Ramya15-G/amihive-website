import { type FC } from 'react'

type BreadcrumbItem = {
  label: string
  pageKey?: string
  onClick?: () => void
}

type PageHeaderProps = {
  eyebrow: string
  title: string
  highlightWord?: string
  subtitle: string
  breadcrumbs: BreadcrumbItem[]
}

export const PageHeader: FC<PageHeaderProps> = ({
  eyebrow,
  title,
  highlightWord,
  subtitle,
  breadcrumbs,
}) => {
  return (
    <section className="page-header-banner" aria-label={title}>
      {/* Dynamic ambient energy glows */}
      <div className="page-header-glow page-header-glow--primary" aria-hidden="true" />
      <div className="page-header-glow page-header-glow--secondary" aria-hidden="true" />
      <div className="page-header-grid-pattern" aria-hidden="true" />

      <div className="container">
        {/* Accessible Breadcrumbs */}
        <nav className="page-breadcrumbs" aria-label="Breadcrumbs">
          <ol className="breadcrumbs-list">
            {breadcrumbs.map((crumb, index) => {
              const isLast = index === breadcrumbs.length - 1
              return (
                <li key={crumb.label} className="breadcrumb-item">
                  {!isLast ? (
                    <>
                      <button
                        type="button"
                        className="breadcrumb-link"
                        onClick={crumb.onClick}
                      >
                        {crumb.label}
                      </button>
                      <span className="breadcrumb-separator" aria-hidden="true">
                        /
                      </span>
                    </>
                  ) : (
                    <span className="breadcrumb-current" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>

        {/* Header Titles */}
        <div className="page-header-content">
          <span className="section-eyebrow">{eyebrow}</span>
          <h1 className="page-header-title">
            {title}{' '}
            {highlightWord && <span className="text-orange">{highlightWord}</span>}
          </h1>
          <p className="page-header-lead">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}

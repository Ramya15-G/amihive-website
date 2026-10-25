import { useState, useEffect, type FC } from 'react'
import { IconArrowRight } from './Icons'
import { type TestimonialItem } from '../types'

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'pn-granites',
    clientName: 'Pn Granites',
    clientRole: 'Granite Supplier & Export Partner',
    quote:
      'The team delivered exceptional quality and a seamless experience. Their creativity, attention to detail, and commitment to our vision were outstanding.',
    rating: 5,
    logoInitial: 'PG',
  },
  {
    id: 'stitchcraft',
    clientName: 'StitchCraft Artistry',
    clientRole: 'Aari Work Specialist & Boutique Commerce',
    quote:
      'A reliable and highly skilled team. They handled our project with professionalism, clear communication, and strong technical expertise from initial wireframe to launch.',
    rating: 5,
    logoInitial: 'SA',
  },
  {
    id: 'master-batter',
    clientName: 'Master',
    clientRole: 'Dosa & Idli Batter Supply Enterprise',
    quote:
      'Their strategic approach and innovative ideas helped elevate our brand’s digital presence. Truly a technology partner you can trust.',
    rating: 5,
    logoInitial: 'M',
  },
]

export const TestimonialsSection: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const current = TESTIMONIALS[currentIndex]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }

  // Auto-advance every 6 seconds unless hovered
  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [isAutoPlaying])

  return (
    <section className="section-padding testimonials-section" aria-labelledby="testimonials-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <span className="section-eyebrow">CLIENT TESTIMONIALS</span>
          <h2 id="testimonials-heading" className="section-title">
            Real Feedback from Partners Who{' '}
            <span className="text-orange">Trusted Us</span>
          </h2>
          <p className="section-lead">
            Hear directly from organizations that partnered with AmiHive to scale their digital presence,
            automate operations, and modernize their systems.
          </p>
        </div>

        {/* Carousel Showcase Card */}
        <div
          className="testimonial-showcase"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Ambient Quote Symbol Background */}
          <div className="quote-mark-bg" aria-hidden="true">
            “
          </div>

          <div className="testimonial-card-inner">
            {/* Avatar / Brand Emblem */}
            <div className="testimonial-client-badge">
              <span className="client-avatar-text">{current.logoInitial}</span>
              <span className="verified-check" title="Verified Client">✓</span>
            </div>

            {/* Client Identity */}
            <h3 className="testimonial-client-name">{current.clientName}</h3>
            <p className="testimonial-client-role">{current.clientRole}</p>

            {/* Star Rating */}
            <div className="testimonial-stars" aria-label={`${current.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`star ${i < current.rating ? 'star--filled' : 'star--empty'}`}
                >
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="testimonial-quote">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Counter & Controls */}
            <div className="testimonial-controls-bar">
              <span className="testimonial-counter">
                <strong>0{currentIndex + 1}</strong> / 0{TESTIMONIALS.length}
              </span>

              <div className="testimonial-nav-buttons">
                <button
                  type="button"
                  className="testimonial-nav-btn testimonial-nav-btn--prev"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                >
                  <span className="rotate-180">
                    <IconArrowRight size={18} />
                  </span>
                </button>
                <button
                  type="button"
                  className="testimonial-nav-btn testimonial-nav-btn--next"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                >
                  <IconArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

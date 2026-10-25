import { useEffect, useRef } from 'react'

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Respect user's motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      element.classList.add('is-revealed')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-revealed')
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return ref
}

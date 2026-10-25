import { useEffect, useRef, type FC, type MouseEventHandler, type ReactNode } from 'react'

type InteractiveServiceCardProps = {
  children: ReactNode
  className?: string
  element?: 'article' | 'div'
  onMouseEnter?: MouseEventHandler<HTMLElement>
  onMouseLeave?: MouseEventHandler<HTMLElement>
}

export const InteractiveServiceCard: FC<InteractiveServiceCardProps> = ({
  children,
  className = 'service-card-modern',
  element = 'article',
  onMouseEnter,
  onMouseLeave,
}) => {
  const cardRef = useRef<HTMLElement | null>(null)
  const frameRef = useRef<number | null>(null)
  const targetRef = useRef({ tiltX: 0, tiltY: 0, spotlightX: 50, spotlightY: 50 })
  const currentRef = useRef({ tiltX: 0, tiltY: 0, spotlightX: 50, spotlightY: 50 })

  useEffect(() => {
    const card = cardRef.current
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (!card) return

    const render = () => {
      const current = currentRef.current
      const target = targetRef.current
      const easing = 0.16

      current.tiltX += (target.tiltX - current.tiltX) * easing
      current.tiltY += (target.tiltY - current.tiltY) * easing
      current.spotlightX += (target.spotlightX - current.spotlightX) * easing
      current.spotlightY += (target.spotlightY - current.spotlightY) * easing

      card.style.setProperty('--service-tilt-x', `${current.tiltX.toFixed(3)}deg`)
      card.style.setProperty('--service-tilt-y', `${current.tiltY.toFixed(3)}deg`)
      card.style.setProperty('--service-spotlight-x', `${current.spotlightX.toFixed(2)}%`)
      card.style.setProperty('--service-spotlight-y', `${current.spotlightY.toFixed(2)}%`)

      const stillMoving =
        Math.abs(target.tiltX - current.tiltX) > 0.01 ||
        Math.abs(target.tiltY - current.tiltY) > 0.01 ||
        Math.abs(target.spotlightX - current.spotlightX) > 0.01 ||
        Math.abs(target.spotlightY - current.spotlightY) > 0.01

      frameRef.current = stillMoving ? requestAnimationFrame(render) : null
    }

    const scheduleRender = () => {
      if (frameRef.current === null) {
        frameRef.current = requestAnimationFrame(render)
      }
    }

    const handlePointerMove = (event: PointerEvent) => {
      if (!finePointer.matches || reducedMotion.matches || event.pointerType === 'touch') return

      const rect = card.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100
      const offsetX = (x - 50) / 50
      const offsetY = (y - 50) / 50

      targetRef.current = {
        tiltX: offsetY * 4,
        tiltY: offsetX * -4,
        spotlightX: x,
        spotlightY: y,
      }
      scheduleRender()
    }

    const handlePointerLeave = () => {
      if (!finePointer.matches || reducedMotion.matches) return

      targetRef.current = { tiltX: 0, tiltY: 0, spotlightX: 50, spotlightY: 50 }
      scheduleRender()
    }

    card.addEventListener('pointermove', handlePointerMove)
    card.addEventListener('pointerleave', handlePointerLeave)

    return () => {
      card.removeEventListener('pointermove', handlePointerMove)
      card.removeEventListener('pointerleave', handlePointerLeave)
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  const CardElement = element

  return (
    <CardElement
      ref={(node) => {
        cardRef.current = node
      }}
      className={`interactive-tilt-card ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </CardElement>
  )
}

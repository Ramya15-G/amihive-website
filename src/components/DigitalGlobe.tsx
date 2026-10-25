import { useEffect, useRef, type FC } from 'react'

export const DigitalGlobe: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let angle = 0

    // Setup high DPI safely
    const resize = () => {
      try {
        const dpr = window.devicePixelRatio || 1
        const rect = canvas.getBoundingClientRect()
        const width = rect.width || 420
        const height = rect.height || 420
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr)
      } catch (err) {
        console.warn('Globe canvas resize error:', err)
      }
    }

    resize()
    window.addEventListener('resize', resize)

    // Generate points on sphere surface
    const POINT_COUNT = 240
    const points: { x: number; y: number; z: number; isOrange: boolean }[] = []
    const radius = 165

    for (let i = 0; i < POINT_COUNT; i++) {
      const theta = Math.acos(2 * Math.random() - 1)
      const phi = Math.sqrt(Math.PI * POINT_COUNT) * theta
      points.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
        isOrange: i % 6 === 0, // Accent nodes with AmiHive Orange
      })
    }

    const draw = () => {
      try {
        const rect = canvas.getBoundingClientRect()
        const width = rect.width || 420
        const height = rect.height || 420
        if (width <= 0 || height <= 0) {
          animationFrameId = requestAnimationFrame(draw)
          return
        }

        const cx = width / 2
        const cy = height / 2

        ctx.clearRect(0, 0, width, height)

        // Outer radial ambient glow
        const radial = ctx.createRadialGradient(cx, cy, 20, cx, cy, Math.max(30, radius * 1.3))
        radial.addColorStop(0, 'rgba(37, 99, 235, 0.25)')
        radial.addColorStop(0.65, 'rgba(29, 78, 216, 0.1)')
        radial.addColorStop(1, 'rgba(15, 23, 42, 0)')
        ctx.fillStyle = radial
        ctx.beginPath()
        ctx.arc(cx, cy, radius * 1.3, 0, Math.PI * 2)
        ctx.fill()

        // Orbital boundary rings
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)'
        ctx.lineWidth = 1.2
        ctx.beginPath()
        ctx.arc(cx, cy, radius, 0, Math.PI * 2)
        ctx.stroke()

        // Tilted Equator & Latitude rings
        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(0.3)
        ctx.beginPath()
        ctx.ellipse(0, 0, radius * 1.05, Math.max(1, radius * 0.4), angle * 0.5, 0, Math.PI * 2)
        ctx.strokeStyle = 'rgba(255, 122, 0, 0.35)'
        ctx.lineWidth = 1
        ctx.setLineDash([5, 7])
        ctx.stroke()
        ctx.setLineDash([])
        ctx.restore()

        // Rotate points around Y axis
        angle += 0.007
        const cosA = Math.cos(angle)
        const sinA = Math.sin(angle)

        // Project 3D points to 2D
        const projected = points
          .map((p) => {
            const rx = p.x * cosA - p.z * sinA
            const rz = p.x * sinA + p.z * cosA
            const ry = p.y

            const fov = 360
            const scale = fov / Math.max(1, fov + rz + radius * 0.4)
            const px = cx + rx * scale
            const py = cy + ry * scale
            const alpha = Math.max(0.1, Math.min(1, (rz + radius) / (2 * radius)))

            return { px, py, rz, scale, alpha, isOrange: p.isOrange }
          })
          .sort((a, b) => a.rz - b.rz)

        // Draw connections
        ctx.lineWidth = 0.5
        for (let i = 0; i < projected.length; i += 3) {
          const p1 = projected[i]
          if (p1.rz > -20) {
            for (let j = i + 1; j < Math.min(i + 5, projected.length); j++) {
              const p2 = projected[j]
              const dist = Math.hypot(p1.px - p2.px, p1.py - p2.py)
              if (dist < 40) {
                ctx.strokeStyle = p1.isOrange
                  ? `rgba(255, 122, 0, ${p1.alpha * 0.3})`
                  : `rgba(96, 165, 250, ${p1.alpha * 0.22})`
                ctx.beginPath()
                ctx.moveTo(p1.px, p1.py)
                ctx.lineTo(p2.px, p2.py)
                ctx.stroke()
              }
            }
          }
        }

        // Render luminous nodes
        for (const p of projected) {
          const size = Math.max(1.2, p.scale * 2.5)
          ctx.beginPath()
          ctx.arc(p.px, p.py, size, 0, Math.PI * 2)

          if (p.isOrange) {
            ctx.fillStyle = `rgba(255, 122, 0, ${p.alpha * 0.95})`
          } else {
            ctx.fillStyle = `rgba(147, 197, 253, ${p.alpha * 0.85})`
          }
          ctx.fill()
        }
      } catch (err) {
        console.warn('Globe animation frame error:', err)
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="digital-globe-wrapper" aria-hidden="true">
      {/* Background SVG Globe Silhouette */}
      <svg
        className="digital-globe-svg-bg"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="200" cy="200" r="160" stroke="rgba(37, 99, 235, 0.2)" strokeWidth="1.5" />
        <circle cx="200" cy="200" r="120" stroke="rgba(255, 122, 0, 0.15)" strokeWidth="1" strokeDasharray="6 6" />
        <ellipse cx="200" cy="200" rx="160" ry="60" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="1" />
        <ellipse cx="200" cy="200" rx="60" ry="160" stroke="rgba(59, 130, 246, 0.18)" strokeWidth="1" />
      </svg>

      <canvas ref={canvasRef} className="digital-globe-canvas" />

      {/* Floating telemetry metrics badges */}
      <div className="globe-telemetry-badge globe-telemetry-badge--1">
        <span className="telemetry-dot telemetry-dot--green" />
        <span className="telemetry-label">Cloud Latency: <strong>&lt; 24ms</strong></span>
      </div>

      <div className="globe-telemetry-badge globe-telemetry-badge--2">
        <span className="telemetry-dot telemetry-dot--orange" />
        <span className="telemetry-label">System Uptime: <strong>99.98%</strong></span>
      </div>
    </div>
  )
}

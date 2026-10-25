import { useEffect, useRef, useState, useId, type FC, type MouseEvent, type TouchEvent } from 'react'
import { TechIcons } from './TechIcons'

export type TechLogoItem = {
  id: string
  name: string
  category: string
  color: string
  accentColor: string
  orbitRadius: number // Distance from center
  orbitSpeed: number  // Radians per second
  inclination: number // Orbit tilt angle (radians)
  phase: number       // Starting phase offset (radians)
  iconKey: keyof typeof TechIcons
  capability: string
}

export const TECH_ORBIT_ITEMS: TechLogoItem[] = [
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend Architecture',
    color: '#61DAFB',
    accentColor: '#38BDF8',
    orbitRadius: 180,
    orbitSpeed: 0.28,
    inclination: 0.25,
    phase: 0,
    iconKey: 'react',
    capability: 'High-performance interactive web portals, atomic design systems & SPA state management.',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'Full-Stack Framework',
    color: '#FFFFFF',
    accentColor: '#E2E8F0',
    orbitRadius: 215,
    orbitSpeed: -0.22,
    inclination: -0.42,
    phase: 1.1,
    iconKey: 'nextjs',
    capability: 'Server-Side Rendering (SSR), edge computing, dynamic caching and sub-second page loads.',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Core Language',
    color: '#3178C6',
    accentColor: '#60A5FA',
    orbitRadius: 155,
    orbitSpeed: 0.32,
    inclination: 0.65,
    phase: 2.2,
    iconKey: 'typescript',
    capability: 'Strict end-to-end type safety, robust refactoring, zero runtime undefined exceptions.',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'AI & Data Engineering',
    color: '#FFD43B',
    accentColor: '#F59E0B',
    orbitRadius: 235,
    orbitSpeed: 0.18,
    inclination: 0.35,
    phase: 3.4,
    iconKey: 'python',
    capability: 'AI automation workflows, predictive ML analytics pipelines, FastAPI microservices.',
  },
  {
    id: 'pytorch',
    name: 'PyTorch AI',
    category: 'Deep Learning & NLP',
    color: '#EE4C2C',
    accentColor: '#F97316',
    orbitRadius: 175,
    orbitSpeed: -0.3,
    inclination: -0.28,
    phase: 4.5,
    iconKey: 'pytorch',
    capability: 'Custom Transformer retrieval, intelligent agent tuning, and multi-turn conversational NLP.',
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'Cross-Platform Mobile',
    color: '#02569B',
    accentColor: '#38BDF8',
    orbitRadius: 220,
    orbitSpeed: 0.24,
    inclination: 0.55,
    phase: 5.2,
    iconKey: 'flutter',
    capability: 'Fluid 60fps native iOS & Android applications with single-codebase velocity.',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend Microservices',
    color: '#5FA04E',
    accentColor: '#4ADE80',
    orbitRadius: 165,
    orbitSpeed: -0.26,
    inclination: 0.15,
    phase: 0.8,
    iconKey: 'nodejs',
    capability: 'Event-driven, high-concurrency REST & GraphQL APIs processing thousands of requests/sec.',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'Containerization',
    color: '#2496ED',
    accentColor: '#60A5FA',
    orbitRadius: 245,
    orbitSpeed: 0.16,
    inclination: -0.5,
    phase: 1.9,
    iconKey: 'docker',
    capability: 'Immutable container packaging, reproducible multi-environment builds, CI/CD parity.',
  },
  {
    id: 'aws',
    name: 'AWS Cloud',
    category: 'Cloud Infrastructure',
    color: '#FF9900',
    accentColor: '#F59E0B',
    orbitRadius: 200,
    orbitSpeed: -0.2,
    inclination: 0.48,
    phase: 2.9,
    iconKey: 'aws',
    capability: 'Resilient auto-scaling serverless architectures, multi-region failover, 99.99% uptime.',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'Relational Database',
    color: '#4169E1',
    accentColor: '#60A5FA',
    orbitRadius: 185,
    orbitSpeed: 0.27,
    inclination: -0.38,
    phase: 4.1,
    iconKey: 'postgresql',
    capability: 'ACID transactional data integrity, complex JSON indexing, read-replica clusters.',
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'API Data Layer',
    color: '#E10098',
    accentColor: '#F472B6',
    orbitRadius: 160,
    orbitSpeed: -0.34,
    inclination: 0.72,
    phase: 5.6,
    iconKey: 'graphql',
    capability: 'Zero over-fetching query flexibility, unified schema aggregation, real-time subscriptions.',
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'Orchestration',
    color: '#326CE5',
    accentColor: '#38BDF8',
    orbitRadius: 230,
    orbitSpeed: 0.19,
    inclination: -0.62,
    phase: 3.8,
    iconKey: 'kubernetes',
    capability: 'Automated pod healing, zero-downtime rolling deployments, distributed workload balancing.',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'UI Styling System',
    color: '#06B6D4',
    accentColor: '#22D3EE',
    orbitRadius: 195,
    orbitSpeed: 0.23,
    inclination: 0.32,
    phase: 2.7,
    iconKey: 'tailwind',
    capability: 'Design-token powered utility architectures, dark mode parity, micro-bundle footprints.',
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'In-Memory Cache',
    color: '#DC382D',
    accentColor: '#EF4444',
    orbitRadius: 150,
    orbitSpeed: -0.36,
    inclination: -0.45,
    phase: 1.4,
    iconKey: 'redis',
    capability: 'Sub-millisecond caching layers, pub/sub messaging channels, distributed rate limiting.',
  },
]

export const TechOrbSphere: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const tooltipId = useId()

  // State
  const [activeTech, setActiveTech] = useState<TechLogoItem | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [speedMultiplier, setSpeedMultiplier] = useState(1)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStartRef = useRef({ x: 0, y: 0, tiltX: 0, tiltY: 0 })

  // Projected 3D items for DOM rendering
  const [projectedItems, setProjectedItems] = useState<
    {
      item: TechLogoItem
      x: number
      y: number
      z: number
      scale: number
      opacity: number
      isBehind: boolean
    }[]
  >([])

  // Animation frame loop
  useEffect(() => {
    let animId: number
    let lastTime = performance.now()
    let currentRotation = 0

    // Canvas setup
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Internal particles on sphere surface
    const PARTICLE_COUNT = 70
    const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const u = Math.random()
      const v = Math.random()
      const theta = u * 2.0 * Math.PI
      const phi = Math.acos(2.0 * v - 1.0)
      const r = 120 + Math.random() * 8
      return {
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        isOrange: i % 4 === 0,
        size: Math.random() * 2 + 1,
      }
    })

    const render = (time: number) => {
      const delta = (time - lastTime) / 1000
      lastTime = time

      if (!isPaused) {
        currentRotation += delta * speedMultiplier * 0.45
      }

      const rect = canvas.getBoundingClientRect()
      const width = rect.width || 440
      const height = rect.height || 440

      // Match display size with DPR
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr)
      }

      const cx = width / 2
      const cy = height / 2
      const fov = 420

      ctx.clearRect(0, 0, width, height)

      // 1. Draw Volumetric Core Glass Sphere Glow
      const coreRadius = Math.min(width, height) * 0.28
      const gradient = ctx.createRadialGradient(
        cx - coreRadius * 0.35,
        cy - coreRadius * 0.35,
        coreRadius * 0.05,
        cx,
        cy,
        coreRadius * 1.15
      )
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.45)')
      gradient.addColorStop(0.2, 'rgba(59, 130, 246, 0.32)')
      gradient.addColorStop(0.65, 'rgba(15, 23, 42, 0.85)')
      gradient.addColorStop(0.9, 'rgba(30, 58, 138, 0.95)')
      gradient.addColorStop(1, 'rgba(255, 122, 0, 0.45)') // Subtle orange rim light

      // Outer halo
      const halo = ctx.createRadialGradient(cx, cy, coreRadius * 0.8, cx, cy, coreRadius * 1.5)
      halo.addColorStop(0, 'rgba(37, 99, 235, 0.25)')
      halo.addColorStop(0.7, 'rgba(255, 122, 0, 0.12)')
      halo.addColorStop(1, 'transparent')

      ctx.fillStyle = halo
      ctx.beginPath()
      ctx.arc(cx, cy, coreRadius * 1.5, 0, Math.PI * 2)
      ctx.fill()

      // 2. Draw 3 Multi-Axis Orbital Rings in 3D
      const rings = [
        { r: coreRadius * 1.35, tiltX: 0.42, tiltY: 0.15, color: 'rgba(37, 99, 235, 0.35)' },
        { r: coreRadius * 1.62, tiltX: -0.35, tiltY: 0.45, color: 'rgba(255, 122, 0, 0.3)' },
        { r: coreRadius * 1.88, tiltX: 0.18, tiltY: -0.55, color: 'rgba(56, 189, 248, 0.25)' },
      ]

      rings.forEach((ring, idx) => {
        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(ring.tiltX + tilt.x * 0.2)
        ctx.scale(1, Math.cos(ring.tiltY + tilt.y * 0.2))

        ctx.strokeStyle = ring.color
        ctx.lineWidth = 1.2
        ctx.setLineDash([4, 6])
        ctx.lineDashOffset = -(currentRotation * 25 * (idx % 2 === 0 ? 1 : -1))

        ctx.beginPath()
        ctx.arc(0, 0, ring.r, 0, Math.PI * 2)
        ctx.stroke()
        ctx.restore()
      })

      // 3. Draw Core Glass Sphere Body
      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, coreRadius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // Glass specular reflection crescent
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(cx, cy, coreRadius - 2, -Math.PI * 0.75, -Math.PI * 0.1)
      ctx.stroke()

      // Orange ambient rim glow on bottom right
      ctx.strokeStyle = 'rgba(255, 122, 0, 0.45)'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.arc(cx, cy, coreRadius - 1.5, Math.PI * 0.2, Math.PI * 0.6)
      ctx.stroke()
      ctx.restore()

      // 4. Draw Rotating Internal 3D Holographic Matrix Points
      const rotY = currentRotation * 0.5 + tilt.x * 0.5
      const rotX = tilt.y * 0.5
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)

      particles.forEach((p) => {
        // Rotate around Y
        const x1 = p.x * cosY - p.z * sinY
        const z1 = p.z * cosY + p.x * sinY
        // Rotate around X
        const y2 = p.y * cosX - z1 * sinX
        const z2 = z1 * cosX + p.y * sinX

        const scale = fov / (fov + z2)
        const px = cx + x1 * scale
        const py = cy + y2 * scale

        if (z2 > -coreRadius) {
          ctx.beginPath()
          ctx.arc(px, py, Math.max(0.6, p.size * scale), 0, Math.PI * 2)
          ctx.fillStyle = p.isOrange
            ? `rgba(255, 122, 0, ${Math.min(1, 0.4 + (z2 / coreRadius) * 0.4)})`
            : `rgba(96, 165, 250, ${Math.min(1, 0.3 + (z2 / coreRadius) * 0.5)})`
          ctx.fill()
        }
      })

      // 5. Calculate 3D Coordinates for All Technology Logo Badges
      const projected = TECH_ORBIT_ITEMS.map((item) => {
        // Base orbit angle
        const angle = currentRotation * item.orbitSpeed + item.phase

        // 3D coordinates on orbital plane
        const baseRadius = (item.orbitRadius / 220) * (coreRadius * 1.55)
        const x0 = baseRadius * Math.cos(angle)
        const y0 = baseRadius * Math.sin(angle) * Math.cos(item.inclination)
        const z0 = baseRadius * Math.sin(angle) * Math.sin(item.inclination)

        // Apply interactive pointer tilt
        const x1 = x0 * cosY - z0 * sinY
        const z1 = z0 * cosY + x0 * sinY
        const y2 = y0 * cosX - z1 * sinX
        const z2 = z1 * cosX + y0 * sinX

        const scale = fov / (fov + z2)
        const screenX = cx + x1 * scale
        const screenY = cy + y2 * scale

        // Z-depth properties
        // z2 > 0: in front of the sphere; z2 < 0: behind the sphere
        const isBehind = z2 < -25
        const normalizedScale = Math.max(0.65, Math.min(1.28, scale * 1.05))
        const opacity = isBehind
          ? Math.max(0.35, 0.65 + z2 / 400)
          : Math.min(1, 0.85 + (z2 / 200) * 0.15)

        return {
          item,
          x: screenX,
          y: screenY,
          z: z2,
          scale: normalizedScale,
          opacity,
          isBehind,
        }
      })

      // Sort by Z for proper layering
      projected.sort((a, b) => a.z - b.z)
      setProjectedItems(projected)

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)
    return () => cancelAnimationFrame(animId)
  }, [isPaused, speedMultiplier, tilt])

  // Mouse move for parallax tilt
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const deltaX = (e.clientX - dragStartRef.current.x) * 0.006
      const deltaY = (e.clientY - dragStartRef.current.y) * 0.006
      setTilt({
        x: dragStartRef.current.tiltX + deltaX,
        y: Math.max(-0.6, Math.min(0.6, dragStartRef.current.tiltY + deltaY)),
      })
      return
    }

    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    // Smooth subtle tilt
    setTilt((prev) => ({
      x: prev.x + (x * 0.5 - prev.x) * 0.1,
      y: prev.y + (y * 0.35 - prev.y) * 0.1,
    }))
  }

  // Touch drag for mobile rotation
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      setIsDragging(true)
      dragStartRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
        tiltX: tilt.x,
        tiltY: tilt.y,
      }
    }
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (isDragging && e.touches.length === 1) {
      const deltaX = (e.touches[0].clientX - dragStartRef.current.x) * 0.008
      const deltaY = (e.touches[0].clientY - dragStartRef.current.y) * 0.008
      setTilt({
        x: dragStartRef.current.tiltX + deltaX,
        y: Math.max(-0.6, Math.min(0.6, dragStartRef.current.tiltY + deltaY)),
      })
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div
      ref={containerRef}
      className="tech-orb-viewport"
      onMouseMove={handleMouseMove}
      onMouseDown={(e) => {
        setIsDragging(true)
        dragStartRef.current = {
          x: e.clientX,
          y: e.clientY,
          tiltX: tilt.x,
          tiltY: tilt.y,
        }
      }}
      onMouseUp={() => setIsDragging(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Interactive 3D Technology Sphere"
    >
      {/* 1. Underlying Volumetric Canvas */}
      <canvas ref={canvasRef} className="tech-orb-canvas" />

      {/* 2. Top-Layer 3D Projected SVG Tech Logo Badges */}
      <div className="tech-orb-badges-layer" aria-hidden="true">
        {projectedItems.map(({ item, x, y, scale, opacity, isBehind }) => {
          const isActive = activeTech?.id === item.id
          const IconComponent = TechIcons[item.iconKey]

          return (
            <div
              key={item.id}
              className={`orb-tech-node ${isBehind ? 'is-behind' : 'is-front'} ${isActive ? 'is-active' : ''}`}
              style={{
                transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`,
                opacity: isActive ? 1 : opacity,
                zIndex: isBehind ? 2 : Math.round(scale * 100),
                borderColor: isActive ? '#FF7A00' : isBehind ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.28)',
                boxShadow: isActive
                  ? `0 0 25px ${item.accentColor}, 0 0 10px rgba(255,122,0,0.6)`
                  : isBehind
                  ? 'none'
                  : `0 8px 20px rgba(0,0,0,0.4), 0 0 15px ${item.color}22`,
              }}
              onMouseEnter={() => {
                setActiveTech(item)
                setIsPaused(true)
              }}
              onMouseLeave={() => {
                setActiveTech(null)
                setIsPaused(false)
              }}
              onClick={() => {
                setActiveTech(isActive ? null : item)
              }}
            >
              <div className="orb-tech-node__inner">
                <span className="orb-tech-icon" style={{ color: item.color }}>
                  {IconComponent ? <IconComponent size={22} /> : null}
                </span>
                <span className="orb-tech-name">{item.name}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* 3. Floating HUD Tooltip when a technology is hovered or tapped */}
      {activeTech && (
        <div
          id={tooltipId}
          className="orb-tech-hud-card"
          role="status"
          aria-live="polite"
        >
          <div className="hud-card-header">
            <span
              className="hud-card-indicator"
              style={{ background: activeTech.accentColor, boxShadow: `0 0 8px ${activeTech.accentColor}` }}
            />
            <span className="hud-card-category">{activeTech.category}</span>
            <span className="hud-card-badge">PRODUCTION STACK</span>
          </div>
          <h4 className="hud-card-title">{activeTech.name}</h4>
          <p className="hud-card-text">{activeTech.capability}</p>
          <div className="hud-card-footer">
            <span className="hud-pulse-dot" />
            <span>AmiHive Core Architecture • Verified Skill</span>
          </div>
        </div>
      )}

      {/* 4. Interactive Overlay Controls */}
      <div className="orb-interactive-toolbar">
        <div className="orb-control-pills">
          <button
            type="button"
            className={`orb-ctrl-btn ${isPaused ? 'is-active' : ''}`}
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? 'Resume Orbit' : 'Pause Orbit'}
            aria-label={isPaused ? 'Resume 3D Orbit' : 'Pause 3D Orbit'}
          >
            <span>{isPaused ? '▶ Resume' : '⏸ Pause'}</span>
          </button>

          <button
            type="button"
            className="orb-ctrl-btn"
            onClick={() => {
              setSpeedMultiplier((prev) => (prev === 1 ? 1.75 : prev === 1.75 ? 0.5 : 1))
            }}
            title="Adjust Orbital Velocity"
            aria-label="Adjust orbital velocity"
          >
            <span>Speed: {speedMultiplier === 1 ? '1x' : speedMultiplier === 1.75 ? '1.75x' : '0.5x'}</span>
          </button>
        </div>

        <div className="orb-hint-label">
          <span className="drag-icon">↔</span>
          <span>Drag to rotate • Hover logo to inspect</span>
        </div>
      </div>
    </div>
  )
}

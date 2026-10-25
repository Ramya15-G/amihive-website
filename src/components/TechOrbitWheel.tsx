import { useState, type FC } from 'react'

type TechNode = {
  name: string
  color: string
  bg: string
  category: string
  iconText: string
}

const TECH_NODES: TechNode[] = [
  { name: 'React', color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.15)', category: 'Frontend', iconText: '⚛️' },
  { name: 'Next.js', color: '#FFFFFF', bg: 'rgba(255, 255, 255, 0.15)', category: 'Fullstack', iconText: '▲' },
  { name: 'Node.js', color: '#68A063', bg: 'rgba(104, 160, 99, 0.15)', category: 'Backend', iconText: '⬢' },
  { name: 'Python AI', color: '#FFD43B', bg: 'rgba(255, 212, 59, 0.15)', category: 'AI & ML', iconText: '🐍' },
  { name: 'AWS Cloud', color: '#FF9900', bg: 'rgba(255, 153, 0, 0.15)', category: 'DevOps', iconText: '☁️' },
  { name: 'Docker', color: '#2496ED', bg: 'rgba(36, 150, 237, 0.15)', category: 'Containers', iconText: '🐳' },
  { name: 'Kubernetes', color: '#326CE5', bg: 'rgba(50, 108, 229, 0.15)', category: 'Orchestration', iconText: '☸️' },
  { name: 'PostgreSQL', color: '#336791', bg: 'rgba(51, 103, 145, 0.15)', category: 'Database', iconText: '🐘' },
  { name: 'Flutter', color: '#02569B', bg: 'rgba(2, 86, 155, 0.15)', category: 'Mobile', iconText: '📱' },
  { name: 'TypeScript', color: '#3178C6', bg: 'rgba(49, 120, 198, 0.15)', category: 'Language', iconText: 'TS' },
  { name: '.NET Core', color: '#512BD4', bg: 'rgba(81, 43, 212, 0.15)', category: 'Enterprise', iconText: '🟣' },
  { name: 'MongoDB', color: '#47A248', bg: 'rgba(71, 162, 72, 0.15)', category: 'NoSQL', iconText: '🍃' },
]

export const TechOrbitWheel: FC = () => {
  const [activeNode, setActiveNode] = useState<TechNode | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div
      className="tech-orbit-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false)
        setActiveNode(null)
      }}
      aria-label="Interactive 3D Technology Wheel"
    >
      <div className={`tech-orbit-wheel ${isPaused ? 'tech-orbit-wheel--paused' : ''}`}>
        {/* Concentric orbital rings */}
        <div className="orbit-ring orbit-ring--outer" />
        <div className="orbit-ring orbit-ring--middle" />
        <div className="orbit-ring orbit-ring--inner" />

        {/* Center glowing brand core */}
        <div className="orbit-core">
          <div className="orbit-core-glow" />
          <div className="orbit-core-inner">
            <span className="core-title">AMIHIVE</span>
            <span className="core-sub">CORE STACK</span>
          </div>
        </div>

        {/* Orbiting technology nodes positioned geometrically */}
        {TECH_NODES.map((node, index) => {
          const total = TECH_NODES.length
          const angle = (index / total) * 2 * Math.PI
          // Radius of 165px
          const x = Math.cos(angle) * 165
          const y = Math.sin(angle) * 165

          return (
            <button
              key={node.name}
              type="button"
              className={`tech-node-badge ${activeNode?.name === node.name ? 'is-active' : ''}`}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                borderColor: node.color,
                boxShadow: `0 0 15px ${node.bg}`,
              }}
              onMouseEnter={() => setActiveNode(node)}
              onFocus={() => setActiveNode(node)}
              aria-label={`${node.name} (${node.category})`}
            >
              <span className="tech-node-icon" style={{ color: node.color }}>
                {node.iconText}
              </span>
              <span className="tech-node-name">{node.name}</span>
            </button>
          )
        })}
      </div>

      {/* Floating tooltip inspection card */}
      <div className="tech-orbit-inspector" aria-live="polite">
        {activeNode ? (
          <div className="inspector-card">
            <span className="inspector-category">{activeNode.category}</span>
            <h4 className="inspector-title" style={{ color: activeNode.color }}>
              {activeNode.name}
            </h4>
            <span className="inspector-badge">Production Standard at AmiHive</span>
          </div>
        ) : (
          <div className="inspector-card inspector-card--idle">
            <span className="idle-indicator" />
            <span className="idle-text">Hover any node to inspect framework integration</span>
          </div>
        )}
      </div>
    </div>
  )
}

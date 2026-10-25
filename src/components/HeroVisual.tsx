export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-visual__glow hero-visual__glow--a" />
      <div className="hero-visual__glow hero-visual__glow--b" />
      <div className="hero-visual__ring hero-visual__ring--outer" />
      <div className="hero-visual__ring hero-visual__ring--inner" />

      <svg className="hero-visual__svg" viewBox="0 0 520 520" fill="none">
        <defs>
          <linearGradient id="hiveStroke" x1="80" y1="60" x2="440" y2="460" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4568FF" />
            <stop offset="0.55" stopColor="#54D8FF" />
            <stop offset="1" stopColor="#4568FF" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="hiveFill" x1="160" y1="120" x2="360" y2="380" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4568FF" stopOpacity="0.22" />
            <stop offset="1" stopColor="#54D8FF" stopOpacity="0.06" />
          </linearGradient>
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Network links */}
        <g stroke="url(#hiveStroke)" strokeWidth="1.2" opacity="0.55">
          <path d="M260 90L360 145L360 255L260 310L160 255L160 145Z" />
          <path d="M260 150L320 185L320 255L260 290L200 255L200 185Z" />
          <path d="M260 90L260 150" />
          <path d="M360 145L320 185" />
          <path d="M360 255L320 255" />
          <path d="M260 310L260 290" />
          <path d="M160 255L200 255" />
          <path d="M160 145L200 185" />
          <path d="M120 220L160 200" />
          <path d="M400 220L360 200" />
          <path d="M260 360L260 310" />
          <path d="M110 320L160 255" />
          <path d="M410 320L360 255" />
          <path d="M180 400L210 340" />
          <path d="M340 400L310 340" />
        </g>

        {/* Central hive fill */}
        <path
          d="M260 150L320 185L320 255L260 290L200 255L200 185Z"
          fill="url(#hiveFill)"
          stroke="url(#hiveStroke)"
          strokeWidth="1.4"
        />

        {/* Outer hex frame */}
        <path
          d="M260 70L385 140V280L260 350L135 280V140L260 70Z"
          stroke="url(#hiveStroke)"
          strokeWidth="1"
          opacity="0.35"
        />

        {/* Orbit arcs */}
        <path
          className="hero-visual__orbit"
          d="M90 260C90 166 166 90 260 90"
          stroke="#54D8FF"
          strokeWidth="1"
          strokeDasharray="4 10"
          opacity="0.45"
        />
        <path
          className="hero-visual__orbit hero-visual__orbit--slow"
          d="M430 260C430 354 354 430 260 430"
          stroke="#4568FF"
          strokeWidth="1"
          strokeDasharray="3 12"
          opacity="0.4"
        />

        {/* Nodes */}
        <g filter="url(#nodeGlow)">
          <circle className="hero-visual__node" cx="260" cy="90" r="5" fill="#54D8FF" />
          <circle className="hero-visual__node" cx="360" cy="145" r="4.5" fill="#4568FF" />
          <circle className="hero-visual__node" cx="360" cy="255" r="4.5" fill="#54D8FF" />
          <circle className="hero-visual__node" cx="260" cy="310" r="5" fill="#4568FF" />
          <circle className="hero-visual__node" cx="160" cy="255" r="4.5" fill="#54D8FF" />
          <circle className="hero-visual__node" cx="160" cy="145" r="4.5" fill="#4568FF" />
          <circle className="hero-visual__node hero-visual__node--core" cx="260" cy="220" r="7" fill="#FFFFFF" />
          <circle cx="260" cy="220" r="3" fill="#4568FF" />
          <circle className="hero-visual__node" cx="120" cy="220" r="3.5" fill="#54D8FF" />
          <circle className="hero-visual__node" cx="400" cy="220" r="3.5" fill="#4568FF" />
          <circle className="hero-visual__node" cx="260" cy="360" r="3.5" fill="#54D8FF" />
          <circle className="hero-visual__node" cx="110" cy="320" r="3" fill="#4568FF" />
          <circle className="hero-visual__node" cx="410" cy="320" r="3" fill="#54D8FF" />
          <circle className="hero-visual__node" cx="180" cy="400" r="3" fill="#4568FF" />
          <circle className="hero-visual__node" cx="340" cy="400" r="3" fill="#54D8FF" />
        </g>

        {/* Soft data packets */}
        <circle className="hero-visual__packet" cx="260" cy="120" r="2" fill="#54D8FF" />
        <circle className="hero-visual__packet hero-visual__packet--b" cx="330" cy="200" r="2" fill="#4568FF" />
        <circle className="hero-visual__packet hero-visual__packet--c" cx="200" cy="250" r="2" fill="#54D8FF" />
      </svg>

      <div className="hero-visual__caption">
        <span className="hero-visual__caption-dot" />
        Connected systems architecture
      </div>
    </div>
  )
}

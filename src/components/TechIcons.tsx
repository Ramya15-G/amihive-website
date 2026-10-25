import { type FC } from 'react'

type IconProps = {
  size?: number
  className?: string
}

export const IconReact: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
)

export const IconTypeScript: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <rect width="128" height="128" rx="16" fill="#3178C6" />
    <path
      d="M70.9 92.5c2.3 3.8 6.5 6.3 11.4 6.3 6.1 0 10.4-3.4 10.4-8.3 0-5.4-4.2-7.5-11.4-10.6-10.3-4.4-15.3-9.5-15.3-19.1 0-11 8.7-19.1 21.6-19.1 9 0 15.6 3.4 19.8 10.4l-8.5 5.5c-2.4-4.2-5.7-6.2-11.3-6.2-5.7 0-9.6 3.4-9.6 7.8 0 4.8 3.5 6.8 11.1 10.1 11.4 4.9 15.8 10.2 15.8 19.7 0 12.3-9.6 19.6-22.9 19.6-11.6 0-19.8-5.3-23.7-12.7l12.6-3.4zM24.8 52.8h36.7v10.3H48.4v44.6H36.3V63.1H24.8V52.8z"
      fill="#FFFFFF"
    />
  </svg>
)

export const IconNextJs: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 180 180"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <circle cx="90" cy="90" r="90" fill="#000000" />
    <path
      d="M149.508 157.086L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.414 146.509 159.824 149.508 157.086Z"
      fill="url(#next_grad)"
    />
    <rect x="115" y="54" width="12" height="72" fill="url(#next_grad_bar)" />
    <defs>
      <linearGradient id="next_grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="next_grad_bar" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

export const IconPython: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 110 110"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M54.4 2C39 2 30.1 7.2 30.1 18.2v10.3h24.8v3.4H20.6C9.6 31.9 2 40.5 2 52.8c0 14.8 9.9 21.6 22.3 21.6h5.8v-8.8c0-8.5 7.4-15.6 15.6-15.6h25.8c6.6 0 11.9-5.4 11.9-12V32.2c0-13.6-11.8-30.2-29-30.2zm-12.7 8.9a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6z"
      fill="#3776AB"
    />
    <path
      d="M55.6 108c15.4 0 24.3-5.2 24.3-16.2V81.5H55.1v-3.4h34.3c11 0 18.6-8.6 18.6-20.9 0-14.8-9.9-21.6-22.3-21.6h-5.8v8.8c0 8.5-7.4 15.6-15.6 15.6H38.5c-6.6 0-11.9 5.4-11.9 12v25.8c0 13.6 11.8 30.2 29 30.2zm12.7-8.9a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6z"
      fill="#FFD43B"
    />
  </svg>
)

export const IconNodeJs: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M64 4.5L11.5 34.8v60.6L64 125.7l52.5-30.3V34.8L64 4.5z"
      fill="#5FA04E"
    />
    <path
      d="M64 22l38.2 22.1v44.2L64 110.4 25.8 88.3V44.1L64 22z"
      fill="#333333"
    />
    <path
      d="M64 36.8l25.4 14.7v29.4L64 95.6 38.6 80.9V51.5L64 36.8z"
      fill="#5FA04E"
    />
  </svg>
)

export const IconFlutter: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 166 202"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path d="M101.4 0L0 101.4l31.2 31.2L163.8 0h-62.4z" fill="#02569B" />
    <path d="M101.4 99.8L38.4 162.8 69.6 194 163.8 99.8h-62.4z" fill="#0175C2" />
    <path d="M69.6 194l31.2-31.2 31.8 31.2H69.6z" fill="#02569B" />
    <path d="M101.4 162.8l31.8-31.8h-63.6l31.8 31.8z" fill="#13B9FD" />
  </svg>
)

export const IconAws: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M34.8 61.2c-5.8 0-10.4 1.5-13.8 4.4-3.4 3-5.2 7-5.2 12.2 0 4.8 1.6 8.7 4.9 11.6 3.3 2.9 7.6 4.4 12.8 4.4 4.5 0 8.3-1.1 11.5-3.3 3.2-2.2 5.5-5 6.9-8.4v10.3h9.8V51.2H52.1v9.2c-1.5-3.1-3.8-5.7-7-7.7-3.2-1.9-6.7-2.9-10.3-2.9v11.4zm6.7 19.3c-1.8 1.9-4.2 2.8-7.2 2.8-3.1 0-5.6-.9-7.4-2.8-1.9-1.9-2.8-4.3-2.8-7.3 0-3.1.9-5.6 2.8-7.4 1.9-1.9 4.3-2.8 7.4-2.8 3 0 5.4.9 7.2 2.8 1.8 1.9 2.7 4.3 2.7 7.4 0 3-1 5.4-2.7 7.3zM81.5 51.2l-10.8 41.2h10.3l5.5-22.7 5.7 22.7h10.3l10.8-41.2h-10.4l-5.6 24.3-5.7-24.3H81.5z"
      fill="#FFFFFF"
    />
    <path
      d="M20.8 102.4c28.6 15.2 65.5 13.8 91.2-4.1 3.2-2.3 6.3-4.8 6.3-4.8s-2.1.2-5.4 1.8c-23.7 11.3-56.4 12.3-81.8 2.4-4.2-1.6-10.3-4.7-10.3-4.7v5.4z"
      fill="#FF9900"
    />
  </svg>
)

export const IconDocker: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M125.4 56.4c-2.4-1.8-7.7-2.7-12-1.8-1.4-8.8-7.9-14-15.6-15.6l-3.3-.7-.9 3.2c-2.1 7.4-.8 15.6 3.6 21.8-3.1 1.7-8.1 2.8-13.6 2.8H12.8c-1.8 7.9-.1 17.5 5 25.1 7.2 10.7 19.3 17 33.1 17 38.6 0 66.8-21.4 74.5-51.8z"
      fill="#2496ED"
    />
    <rect x="23.4" y="52.2" width="12.3" height="11" rx="1.5" fill="#2496ED" />
    <rect x="38.4" y="52.2" width="12.3" height="11" rx="1.5" fill="#2496ED" />
    <rect x="53.4" y="52.2" width="12.3" height="11" rx="1.5" fill="#2496ED" />
    <rect x="38.4" y="38.4" width="12.3" height="11" rx="1.5" fill="#2496ED" />
    <rect x="53.4" y="38.4" width="12.3" height="11" rx="1.5" fill="#2496ED" />
    <rect x="68.4" y="38.4" width="12.3" height="11" rx="1.5" fill="#2496ED" />
    <rect x="53.4" y="24.6" width="12.3" height="11" rx="1.5" fill="#2496ED" />
  </svg>
)

export const IconPostgreSql: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M64 4C30.9 4 4 30.9 4 64s26.9 60 60 60 60-26.9 60-60S97.1 4 64 4z"
      fill="#336791"
    />
    <path
      d="M74.8 33.2c-5.8-3.4-13.6-3.8-19.8-.8-7.6 3.6-12.8 11.6-13.4 20-.6 7.6 2.4 15.2 7.8 20.6 3.4 3.4 7.6 5.8 12.2 7 5.6 1.4 11.6.8 16.8-1.6 6.8-3.2 11.8-9.4 13.4-16.8 1.8-8.2-.8-17-6.8-22.8-3.2-3.2-6.8-4.8-10.2-5.6zm-1.6 33.2c-3.4 3.4-8.8 4.6-13.2 2.8-4.4-1.6-7.4-5.8-7.4-10.6 0-5.8 4.4-10.8 10.2-11.8 5.6-1 11.2 2.4 12.8 7.8 1 3.8.2 8.4-2.4 11.8z"
      fill="#FFFFFF"
    />
  </svg>
)

export const IconPyTorch: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M87.2 21.4a8 8 0 0 1 2.2 5.6c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-2.2.9-4.2 2.3-5.6l11.5 0z"
      fill="#EE4C2C"
    />
    <path
      d="M76.4 39.8c18.5 7.4 30.6 25.4 30.6 45.8 0 27.2-22 49.2-49.2 49.2S8.6 112.8 8.6 85.6c0-21.2 13.1-39.7 32.8-46.6l-5.6 11.6C21.8 55.4 13 69.4 13 85.6c0 24.8 20 44.8 44.8 44.8s44.8-20 44.8-44.8c0-18.4-11-34.4-27.4-41.2l1.2-4.6z"
      fill="#EE4C2C"
    />
    <path d="M57.8 14.8L72.2 4.2v25.2H57.8z" fill="#EE4C2C" />
  </svg>
)

export const IconGraphQl: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M64 12L19 38v52l45 26 45-26V38L64 12zm0 8.4l37.8 21.8v43.6L64 107.6 26.2 85.8V42.2L64 20.4z"
      fill="#E10098"
    />
    <circle cx="64" cy="12" r="8" fill="#E10098" />
    <circle cx="19" cy="38" r="8" fill="#E10098" />
    <circle cx="109" cy="38" r="8" fill="#E10098" />
    <circle cx="19" cy="90" r="8" fill="#E10098" />
    <circle cx="109" cy="90" r="8" fill="#E10098" />
    <circle cx="64" cy="116" r="8" fill="#E10098" />
    <path d="M64 12v104M19 38l90 52M19 90l90-52" stroke="#E10098" strokeWidth="3" />
  </svg>
)

export const IconKubernetes: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M64 8l48.5 28v56L64 120 15.5 92V36L64 8z"
      fill="#326CE5"
    />
    <circle cx="64" cy="64" r="22" fill="#FFFFFF" />
    <circle cx="64" cy="64" r="14" fill="#326CE5" />
    <path
      d="M64 36v14M64 78v14M38 52l12 7M78 69l12 7M38 76l12-7M78 59l12-7"
      stroke="#FFFFFF"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
)

export const IconTailwind: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M64 34c-17.6 0-26.4 8.8-26.4 26.4 5.3-8.8 11.4-12.3 18.5-10.6 4 1 6.9 3.9 10.1 7.2 5.2 5.3 11.2 11.4 24.2 11.4 17.6 0 26.4-8.8 26.4-26.4-5.3 8.8-11.4 12.3-18.5 10.6-4-1-6.9-3.9-10.1-7.2C83 40.1 77 34 64 34zM37.6 60.4C20 60.4 11.2 69.2 11.2 86.8c5.3-8.8 11.4-12.3 18.5-10.6 4 1 6.9 3.9 10.1 7.2 5.2 5.3 11.2 11.4 24.2 11.4 17.6 0 26.4-8.8 26.4-26.4-5.3 8.8-11.4 12.3-18.5 10.6-4-1-6.9-3.9-10.1-7.2-5.2-5.3-11.2-11.4-24.2-11.4z"
      fill="#06B6D4"
    />
  </svg>
)

export const IconRedis: FC<IconProps> = ({ size = 22, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path d="M64 12l48 24-48 24-48-24 48-24z" fill="#DC382D" />
    <path d="M16 48l48 24v44L16 92V48z" fill="#B32820" />
    <path d="M112 48l-48 24v44l48-24V48z" fill="#911D17" />
    <circle cx="64" cy="36" r="6" fill="#FFFFFF" />
  </svg>
)

export const TechIcons = {
  react: IconReact,
  typescript: IconTypeScript,
  nextjs: IconNextJs,
  python: IconPython,
  nodejs: IconNodeJs,
  flutter: IconFlutter,
  aws: IconAws,
  docker: IconDocker,
  postgresql: IconPostgreSql,
  pytorch: IconPyTorch,
  graphql: IconGraphQl,
  kubernetes: IconKubernetes,
  tailwind: IconTailwind,
  redis: IconRedis,
}

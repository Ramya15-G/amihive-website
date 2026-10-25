import { type FC } from 'react'

type LogoProps = {
  className?: string
  variant?: 'white-pill' | 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg'
}

export const Logo: FC<LogoProps> = ({
  className = '',
  variant = 'white-pill',
  size = 'md',
}) => {
  const isPill = variant === 'white-pill'

  const sizeClasses = {
    sm: 'logo--sm',
    md: 'logo--md',
    lg: 'logo--lg',
  }[size]

  return (
    <div
      className={`amihive-logo ${isPill ? 'amihive-logo--pill' : ''} ${sizeClasses} ${className}`.trim()}
      aria-label="AmiHive Software Solutions Logo"
    >
      <img
        className="amihive-logo__image"
        src="/brand/amihive-logo.png"
        alt=""
        aria-hidden="true"
      />
    </div>
  )
}

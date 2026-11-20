import { useState } from 'react'
import { siteConfig } from '../config'

interface BrandProps {
  variant?: 'dark' | 'light'
}

export default function Brand({ variant = 'dark' }: BrandProps) {
  const [showFallback, setShowFallback] = useState(false)
  const light = variant === 'light'

  return (
    <a href="#inicio" className="group flex shrink-0 items-center gap-3" aria-label="Ir al inicio">
      <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-wine-600/25 bg-wine-600/5 transition-transform duration-300 group-hover:scale-105">
        {showFallback ? (
          <span className={`font-display text-xl font-semibold ${light ? 'text-wine-300' : 'text-wine-600'}`}>
            M
          </span>
        ) : (
          <img
            src="/logo.svg"
            alt=""
            className="h-full w-full object-contain p-1"
            onError={() => setShowFallback(true)}
          />
        )}
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-tight ${
            light ? 'text-lead-50' : 'text-lead-900'
          }`}
        >
          {siteConfig.brandName}
        </span>
        <span
          className={`mt-1.5 text-[9px] font-bold uppercase tracking-[0.24em] ${
            light ? 'text-wine-300' : 'text-wine-600'
          }`}
        >
          {siteConfig.brandTagline}
        </span>
      </span>
    </a>
  )
}

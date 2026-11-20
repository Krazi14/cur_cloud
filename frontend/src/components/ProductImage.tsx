import { useState } from 'react'
import { Handbag } from './Icons'

interface ProductImageProps {
  src: string
  alt: string
  className?: string
  eager?: boolean
}

export default function ProductImage({ src, alt, className = '', eager = false }: ProductImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-lead-200 to-lead-300 text-wine-600 ${className}`}
        role="img"
        aria-label={alt}
      >
        <Handbag width={44} height={44} strokeWidth={1} />
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Imagen próximamente</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      onError={() => setFailed(true)}
      className={className}
    />
  )
}

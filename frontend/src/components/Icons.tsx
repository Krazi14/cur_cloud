import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  width: 20,
  height: 20,
  ...props,
})

export const ArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12h16m-6-6 6 6-6 6" />
  </svg>
)

export const ArrowUpRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)

export const Cart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 7H6" />
    <circle cx="10" cy="20" r="1.2" />
    <circle cx="18" cy="20" r="1.2" />
  </svg>
)

export const Menu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
)

export const Close = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
)

export const Check = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m4 12.5 5 5L20 6.5" />
  </svg>
)

export const Shield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3 5 6v5c0 4.4 2.9 8.3 7 10 4.1-1.7 7-5.6 7-10V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

export const Sparkles = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
    <path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" />
  </svg>
)

export const Scissors = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <path d="M8 7.5 20 18M8 16.5 20 6" />
  </svg>
)

export const Truck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7z" />
    <circle cx="7" cy="18" r="1.7" />
    <circle cx="17.5" cy="18" r="1.7" />
  </svg>
)

export const Mail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const Phone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6.5 3h3l1.5 4-2 1.5a13 13 0 0 0 6.5 6.5L17 13l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
  </svg>
)

export const Instagram = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
)

export const WhatsApp = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M20.5 11.6a8.5 8.5 0 0 1-12.7 7.3L3 20l1.2-4.6a8.5 8.5 0 1 1 16.3-3.8Z" />
    <path d="M9 8.5c.2-.5.4-.5.7-.5h.6c.2 0 .5 0 .7.5l.8 1.8c.1.3 0 .5-.2.7l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.2.5-.3.7-.1l1.8.8c.5.2.5.4.5.7v.6c0 .5-.4.9-1 .9A8.4 8.4 0 0 1 9 9.5c-.4-.6-.4-1-.1-1Z" />
  </svg>
)

export const Plus = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const Minus = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14" />
  </svg>
)

export const Send = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m21 3-9 18-2.5-7.5L2 11l19-8Z" />
    <path d="M21 3 9.5 13.5" />
  </svg>
)

export const Heart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 20s-7-4.4-7-9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.5C19 15.6 12 20 12 20Z" />
  </svg>
)

export const Handbag = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 9h16l-1 11H5L4 9Z" />
    <path d="M9 9V7a3 3 0 0 1 6 0v2" />
  </svg>
)

export const Backpack = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 9V7a5 5 0 0 1 10 0v2" />
    <rect x="5" y="9" width="14" height="11" rx="3" />
    <path d="M9 15h6v5H9z" />
  </svg>
)

export const Shoe = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 16c0-2 1-3 3-4l3-5 3 2-1 4 6 1c2 .3 3 1.3 3 3v1H3v-2Z" />
    <path d="M3 18h18" />
  </svg>
)

export const Belt = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 9h15a3 3 0 0 1 0 6H3V9Z" />
    <rect x="9" y="7" width="4" height="10" rx="1" />
    <path d="M11 9v6" />
  </svg>
)

export const Wallet = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h14a2 2 0 0 1 2 2v9H5a2 2 0 0 1-2-2V7Z" />
    <path d="M4 7V5.5A1.5 1.5 0 0 1 5.5 4H17" />
    <path d="M16 12h4v3h-4a1.5 1.5 0 0 1 0-3Z" />
  </svg>
)

export const Pouch = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 10h16l-1 9H5l-1-9Z" />
    <path d="M8 10V8a4 4 0 0 1 8 0v2" />
    <path d="M10 14h4" />
  </svg>
)

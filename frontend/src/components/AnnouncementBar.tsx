import { siteConfig } from '../config'
import { Truck, Sparkles } from './Icons'

export default function AnnouncementBar() {
  return (
    <div className="bg-wine-800 text-white/80">
      <div className="container-page flex h-9 items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] sm:gap-6 sm:text-[11px]">
        <span className="hidden items-center gap-2 sm:inline-flex">
          <Sparkles width={14} height={14} className="text-wine-200" />
          Piezas hechas a mano
        </span>
        <span className="hidden h-1 w-1 rounded-full bg-wine-300 sm:block" />
        <span className="flex items-center gap-2">
          <Truck width={14} height={14} className="text-wine-200" />
          Envíos a todo el país
        </span>
        <span className="hidden h-1 w-1 rounded-full bg-wine-300 sm:block" />
        <a
          href={`mailto:${siteConfig.email}`}
          className="hidden transition hover:text-white sm:inline"
        >
          {siteConfig.email}
        </a>
      </div>
    </div>
  )
}

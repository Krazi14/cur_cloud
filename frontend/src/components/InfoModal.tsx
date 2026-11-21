import { useEffect, useRef, useState } from 'react'
import { siteConfig, whatsappLink } from '../config'
import { ArrowRight, ArrowUpRight, Close, Scissors, Shield, Truck } from './Icons'

const STORAGE_KEY = 'peru-cueros-welcome-seen'

const highlights = [
  {
    icon: Scissors,
    title: 'Hecho a mano',
    text: 'Cada pieza se confecciona en nuestro taller con atención al detalle.',
  },
  {
    icon: Shield,
    title: 'Cuero y textil',
    text: 'Materiales seleccionados para crear artículos que acompañen por años.',
  },
  {
    icon: Truck,
    title: 'Envíos a todo el país',
    text: 'Hacemos llegar tu pedido a cualquier parte del Perú.',
  },
]

function markAsSeen() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // Almacenamiento no disponible: el modal solo se muestra en esta carga.
  }
}

export default function InfoModal() {
  const [isOpen, setIsOpen] = useState(() => {
    try {
      return window.sessionStorage.getItem(STORAGE_KEY) !== '1'
    } catch {
      return true
    }
  })
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const closeModal = () => {
    markAsSeen()
    setIsOpen(false)
  }

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        markAsSeen()
        setIsOpen(false)
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  if (!isOpen) return null

  const goToSection = (id: string) => {
    closeModal()
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center overflow-y-auto bg-lead-950/80 p-4 backdrop-blur-sm"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        onClick={closeModal}
        aria-label="Cerrar ventana de bienvenida"
        tabIndex={-1}
      />

      <div
        ref={dialogRef}
        className="relative my-auto w-full max-w-2xl animate-fade-up overflow-hidden rounded-[1.75rem] border border-white/10 bg-lead-900 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
        aria-describedby="welcome-description"
      >
        <div className="h-1.5 bg-gradient-to-r from-wine-800 via-wine-500 to-wine-800" />

        {/* Costuras decorativas, igual que el resto de la web */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
          <div className="absolute -left-16 top-1/4 h-px w-[130%] -rotate-12 border-t border-dashed border-white" />
          <div className="absolute -left-16 bottom-1/4 h-px w-[130%] -rotate-12 border-t border-dashed border-white" />
        </div>
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-wine-600/20 blur-3xl" />

        <div className="relative p-6 sm:p-9">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-wine-600 text-white shadow-wine">
                <Scissors width={21} height={21} />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-wine-300">
                  Te damos la bienvenida
                </p>
                <p className="font-display text-lg text-white">{siteConfig.brandName}</p>
              </div>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeModal}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-lead-300 transition hover:border-wine-400 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-wine-400"
              aria-label="Cerrar"
            >
              <Close width={17} height={17} />
            </button>
          </div>

          <h2 id="welcome-title" className="mt-7 font-display text-3xl leading-[1.15] text-white sm:text-4xl">
            Piezas de cuero
            <br />
            <span className="italic text-wine-400">que dejan huella.</span>
          </h2>

          <p id="welcome-description" className="mt-4 max-w-xl text-sm leading-relaxed text-lead-300 sm:text-base">
            Somos una marroquinería artesanal de Lima. Combinamos técnicas tradicionales
            con un diseño actual para crear carteras, mochilas, calzado, correas,
            billeteras, morrales y monederos para dama y caballero.
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-wine-500/40 hover:bg-wine-600/10"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-wine-600/20 text-wine-300">
                  <Icon width={18} height={18} />
                </span>
                <h3 className="mt-3 font-display text-base text-white">{title}</h3>
                <p className="mt-1 text-[12px] leading-relaxed text-lead-400">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-5 text-xs text-lead-400">
            <span>
              <span className="font-bold uppercase tracking-[0.14em] text-wine-300">Estudio: </span>
              {siteConfig.location}
            </span>
            <span>
              <span className="font-bold uppercase tracking-[0.14em] text-wine-300">Atención: </span>
              {siteConfig.whatsappDisplay}
            </span>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={() => goToSection('coleccion')} className="btn-primary justify-center sm:flex-1">
              Explorar colección
              <ArrowRight width={16} height={16} />
            </button>
            <a
              href={whatsappLink('Hola, quisiera información sobre sus productos artesanales de cuero.')}
              target="_blank"
              rel="noreferrer"
              onClick={closeModal}
              className="btn-outline-light justify-center sm:flex-1"
            >
              Hacer una consulta
              <ArrowUpRight width={16} height={16} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => goToSection('nosotros')}
            className="mx-auto mt-5 block text-[11px] font-bold uppercase tracking-[0.14em] text-lead-400 transition hover:text-wine-300"
          >
            Conocer más sobre nosotros
          </button>
        </div>
      </div>
    </div>
  )
}

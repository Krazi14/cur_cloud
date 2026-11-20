import { useState } from 'react'
import Brand from './Brand'
import { ArrowUpRight, Cart, Close, Menu } from './Icons'

interface NavbarProps {
  cartCount: number
  onOpenCart: () => void
}

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Colección', href: '#coleccion' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar({ cartCount, onOpenCart }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-lead-950/90 backdrop-blur-xl">
      <div className="container-page flex h-[76px] items-center justify-between gap-6">
        <Brand variant="light" />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.14em] text-lead-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contacto"
            className="hidden items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition hover:border-wine-400 hover:bg-wine-600 sm:inline-flex"
          >
            Hacer un pedido
            <ArrowUpRight width={15} height={15} />
          </a>

          <button
            type="button"
            onClick={onOpenCart}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-wine-400 hover:bg-white/5"
            aria-label={`Abrir carrito, ${cartCount} productos`}
          >
            <Cart width={19} height={19} />
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-wine-500 px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:bg-white/5 lg:hidden"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <Close width={20} height={20} /> : <Menu width={20} height={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="animate-fade-up border-t border-white/10 bg-lead-950 px-5 pb-7 pt-3 lg:hidden"
          aria-label="Navegación móvil"
        >
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{ animationDelay: `${index * 50}ms` }}
              className="block border-b border-white/5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-lead-200 transition hover:text-wine-300"
            >
              {link.label}
            </a>
          ))}
          <a href="#contacto" onClick={closeMenu} className="btn-primary mt-6 w-full">
            Hacer un pedido
            <ArrowUpRight width={16} height={16} />
          </a>
        </nav>
      )}
    </header>
  )
}

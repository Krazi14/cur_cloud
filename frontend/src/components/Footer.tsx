import { siteConfig, whatsappLink } from '../config'
import { categories } from '../data/catalog'
import Brand from './Brand'
import { ArrowUpRight, Instagram, WhatsApp } from './Icons'

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-lead-950 text-white">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] lg:py-20">
        <div>
          <Brand variant="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-lead-400">
            Artículos en cuero y afines, confeccionados con dedicación para dama y
            caballero. Diseño, oficio y carácter en cada pieza.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-lead-300 transition hover:border-wine-400 hover:bg-wine-600 hover:text-white"
            >
              <Instagram width={18} height={18} />
            </a>
            <a
              href={whatsappLink('Hola, quisiera hacer una consulta.')}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-lead-300 transition hover:border-wine-400 hover:bg-wine-600 hover:text-white"
            >
              <WhatsApp width={18} height={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-wine-300">
            Explora
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-lead-400">
            <li><a href="#inicio" className="transition hover:text-white">Inicio</a></li>
            <li><a href="#coleccion" className="transition hover:text-white">Colección</a></li>
            <li><a href="#nosotros" className="transition hover:text-white">Nosotros</a></li>
            <li><a href="#proceso" className="transition hover:text-white">Proceso</a></li>
            <li><a href="#contacto" className="transition hover:text-white">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-wine-300">
            Productos
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-lead-400">
            {categories.slice(0, 5).map((category) => (
              <li key={category.id}>
                <a href="#coleccion" className="transition hover:text-white">
                  {category.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-wine-300">
            Contacto
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-lead-400">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 transition hover:text-white">
                {siteConfig.email}
                <ArrowUpRight width={14} height={14} />
              </a>
            </li>
            <li>{siteConfig.whatsappDisplay}</li>
            <li>{siteConfig.location}</li>
          </ul>
          <a href="#contacto" className="btn-primary mt-7 px-6 py-3.5">
            Solicitar catálogo
            <ArrowUpRight width={15} height={15} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-6 text-[11px] text-lead-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {siteConfig.brandName}. Todos los derechos reservados.</p>
          <p>Artesanía en cuero y textil · Hecho con dedicación</p>
        </div>
      </div>
    </footer>
  )
}

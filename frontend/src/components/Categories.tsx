import type { CategoryId } from '../types'
import { categories } from '../data/catalog'
import ProductImage from './ProductImage'
import { ArrowUpRight } from './Icons'

interface CategoriesProps {
  onSelect: (id: CategoryId) => void
}

export default function Categories({ onSelect }: CategoriesProps) {
  const handleSelect = (id: CategoryId) => {
    onSelect(id)
    document.getElementById('coleccion')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="lineas" className="bg-plomo-claro section-pad">
      <div className="container-page">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Nuestras líneas</span>
            <h2 className="display-title max-w-xl text-balance">
              Algo para cada forma de vivir.
            </h2>
          </div>
          <p className="body-copy max-w-md md:text-right">
            Trabajamos con cuero y telas textiles combinadas para crear artículos
            funcionales, versátiles y con identidad propia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <button
              key={category.id}
              type="button"
              onClick={() => handleSelect(category.id)}
              style={{ animationDelay: `${index * 70}ms` }}
              className="group reveal relative h-[320px] overflow-hidden rounded-[1.75rem] bg-lead-800 text-left shadow-soft sm:h-[360px]"
            >
              <ProductImage
                src={category.image}
                alt={category.label}
                className="image-cover absolute inset-0 h-full w-full"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-lead-950 via-lead-950/25 to-transparent" />

              <span className="absolute left-5 top-5 rounded-full bg-lead-950/60 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                {category.audience}
              </span>

              <span className="absolute bottom-0 left-0 right-0 p-6">
                <span className="flex items-end justify-between gap-4">
                  <span>
                    <span className="block font-display text-2xl font-medium text-white sm:text-3xl">
                      {category.label}
                    </span>
                    <span className="mt-2 block text-xs text-lead-300">
                      {category.description}
                    </span>
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-300 group-hover:translate-x-1 group-hover:border-wine-400 group-hover:bg-wine-600">
                    <ArrowUpRight width={19} height={19} />
                  </span>
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

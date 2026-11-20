import type { CategoryId, Product } from '../types'
import { categories } from '../data/catalog'
import ProductImage from './ProductImage'
import { Cart, Sparkles } from './Icons'

type Filter = CategoryId | 'todos'

interface ProductCatalogProps {
  products: Product[]
  selectedCategory: Filter
  onSelectCategory: (filter: Filter) => void
  onAddToCart: (product: Product) => void
}

const filters: { id: Filter; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  ...categories.map(({ id, label }) => ({ id, label })),
]

export default function ProductCatalog({
  products,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
}: ProductCatalogProps) {
  const visibleProducts =
    selectedCategory === 'todos'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  return (
    <section id="coleccion" className="bg-lead-50 section-pad">
      <div className="container-page">
        <div className="mb-10 flex flex-col gap-7 border-b border-lead-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow">Colección destacada</span>
            <h2 className="display-title max-w-lg text-balance">
              Elige tu próximo favorito.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar productos">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => onSelectCategory(filter.id)}
                className={`rounded-full border px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] transition-all duration-300 ${
                  selectedCategory === filter.id
                    ? 'border-wine-600 bg-wine-600 text-white shadow-wine'
                    : 'border-lead-200 bg-white text-lead-600 hover:border-wine-400 hover:text-wine-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {visibleProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-lead-300 py-20 text-center">
            <Sparkles width={34} height={34} className="text-wine-500" />
            <p className="mt-4 font-display text-2xl text-wine-700">
              Estamos preparando esta línea
            </p>
            <p className="mt-2 text-sm text-lead-500">
              Mientras tanto, explora el resto de la colección.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {visibleProducts.map((product, index) => (
              <article
                key={product.id}
                style={{ animationDelay: `${Math.min(index, 8) * 55}ms` }}
                className="group reveal flex flex-col overflow-hidden rounded-[1.5rem] border border-lead-200 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <div className="relative h-64 overflow-hidden bg-lead-100">
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    className="image-cover h-full w-full"
                  />
                  {product.badge && (
                    <span className="absolute left-4 top-4 rounded-full bg-lead-950/80 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                      {product.badge}
                    </span>
                  )}
                  <button
                    type="button"
                    onClick={() => onAddToCart(product)}
                    className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-3 items-center justify-center rounded-full bg-wine-600 text-white opacity-0 shadow-wine transition-all duration-300 hover:bg-wine-500 group-hover:translate-y-0 group-hover:opacity-100 focus-visible:translate-y-0 focus-visible:opacity-100"
                    aria-label={`Añadir ${product.name} al carrito`}
                  >
                    <Cart width={19} height={19} />
                  </button>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-wine-600">
                    {product.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl text-lead-900">{product.name}</h3>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-lead-100 pt-4">
                    <span className="text-sm font-extrabold text-lead-900">
                      {product.price.toFixed(2)} <span className="text-xs font-bold">US$</span>
                    </span>
                    <button
                      type="button"
                      onClick={() => onAddToCart(product)}
                      className="text-[10px] font-bold uppercase tracking-[0.12em] text-wine-600 transition hover:text-wine-800"
                    >
                      Añadir +
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

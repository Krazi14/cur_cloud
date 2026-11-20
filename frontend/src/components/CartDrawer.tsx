import type { CartItem } from '../types'
import { ArrowRight, Cart, Close, Minus, Plus } from './Icons'
import ProductImage from './ProductImage'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  cart: CartItem[]
  onUpdateQuantity: (id: number, delta: number) => void
  onCheckout: () => void
}

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onCheckout,
}: CartDrawerProps) {
  if (!isOpen) return null

  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-lead-950/70 backdrop-blur-sm" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label="Cerrar carrito"
      />

      <aside className="relative flex h-full w-full max-w-md animate-slide-in flex-col border-l border-white/10 bg-lead-950 shadow-2xl">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-wine-300">
              Tu selección
            </p>
            <h2 className="mt-1 font-display text-2xl text-white">
              Carrito <span className="text-wine-400">({count})</span>
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-lead-300 transition hover:border-wine-400 hover:text-white"
            aria-label="Cerrar"
          >
            <Close width={18} height={18} />
          </button>
        </div>

        <div className="flex-1 space-y-4 overflow-y-auto px-6 py-6">
          {cart.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-wine-400">
                <Cart width={28} height={28} />
              </span>
              <p className="mt-5 font-display text-xl text-white">Tu carrito está vacío</p>
              <p className="mt-2 text-sm text-lead-400">
                Explora la colección y encuentra tu próxima pieza.
              </p>
              <button type="button" onClick={onClose} className="btn-outline-light mt-7">
                Ver colección
                <ArrowRight width={15} height={15} />
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-lead-800">
                  <ProductImage
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-white">{item.name}</p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-wider text-wine-300">
                    {item.price.toFixed(2)} US$
                  </p>
                  <div className="mt-3 inline-flex items-center gap-3 rounded-full border border-white/10 px-2 py-1">
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="text-lead-300 transition hover:text-white"
                      aria-label={`Quitar una unidad de ${item.name}`}
                    >
                      <Minus width={14} height={14} />
                    </button>
                    <span className="text-xs font-bold text-white">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="text-lead-300 transition hover:text-white"
                      aria-label={`Añadir una unidad de ${item.name}`}
                    >
                      <Plus width={14} height={14} />
                    </button>
                  </div>
                </div>
                <p className="text-sm font-bold text-white">
                  {(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-white/10 bg-lead-900 px-6 py-6">
            <div className="flex items-center justify-between text-sm text-lead-300">
              <span>Subtotal</span>
              <span className="text-xl font-bold text-white">{total.toFixed(2)} US$</span>
            </div>
            <p className="mt-2 text-[11px] text-lead-500">
              El costo de envío se confirma al finalizar el pedido.
            </p>
            <button type="button" onClick={onCheckout} className="btn-primary mt-5 w-full">
              Finalizar pedido
              <ArrowRight width={16} height={16} />
            </button>
          </div>
        )}
      </aside>
    </div>
  )
}

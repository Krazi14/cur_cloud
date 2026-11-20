import { useEffect, useState } from 'react'
import { siteConfig } from './config'
import { fallbackProducts } from './data/catalog'
import type { CartItem, CategoryId, Product } from './types'
import About from './components/About'
import AnnouncementBar from './components/AnnouncementBar'
import CartDrawer from './components/CartDrawer'
import Categories from './components/Categories'
import CheckoutModal from './components/CheckoutModal'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Process from './components/Process'
import ProductCatalog from './components/ProductCatalog'
import TrustBar from './components/TrustBar'
import Values from './components/Values'
import WhatsAppFloat from './components/WhatsAppFloat'
import { Check } from './components/Icons'

type Filter = CategoryId | 'todos'

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>(fallbackProducts)
  const [selectedCategory, setSelectedCategory] = useState<Filter>('todos')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    let active = true

    fetch(`${siteConfig.apiUrl}/api/products`)
      .then((response) => {
        if (!response.ok) throw new Error('API no disponible')
        return response.json()
      })
      .then((data: unknown) => {
        if (active && Array.isArray(data) && data.length > 0) {
          setProducts(data as Product[])
        }
      })
      .catch(() => {
        // Se mantiene el catálogo de ejemplo para que la tienda funcione sin backend.
      })

    return () => {
      active = false
    }
  }, [])

  useEffect(() => {
    if (!notice) return
    const timer = window.setTimeout(() => setNotice(''), 4000)
    return () => window.clearTimeout(timer)
  }, [notice])

  const addToCart = (product: Product) => {
    setCart((previous) => {
      const existing = previous.find((item) => item.id === product.id)
      if (existing) {
        return previous.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...previous, { ...product, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const updateQuantity = (id: number, delta: number) => {
    setCart((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + delta }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="flex min-h-screen flex-col bg-lead-100 text-lead-800">
      <AnnouncementBar />
      <Navbar cartCount={totalItems} onOpenCart={() => setIsCartOpen(true)} />

      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Categories onSelect={setSelectedCategory} />
        <ProductCatalog
          products={products}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onAddToCart={addToCart}
        />
        <About />
        <Process />
        <Values />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onCheckout={() => {
          setIsCartOpen(false)
          setIsCheckoutOpen(true)
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onSuccess={() => {
          setCart([])
          setIsCheckoutOpen(false)
          setNotice('¡Pedido enviado! Te contactaremos muy pronto.')
        }}
      />

      {notice && (
        <div className="fixed bottom-6 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-lead-950 px-5 py-3 text-sm text-white shadow-card">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-wine-600">
            <Check width={14} height={14} />
          </span>
          {notice}
        </div>
      )}
    </div>
  )
}

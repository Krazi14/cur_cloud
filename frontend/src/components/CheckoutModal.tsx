import { useState, type FormEvent } from 'react'
import { siteConfig, whatsappLink } from '../config'
import type { CartItem } from '../types'
import { ArrowRight, Close, WhatsApp } from './Icons'

interface CheckoutModalProps {
  isOpen: boolean
  onClose: () => void
  cart: CartItem[]
  onSuccess: () => void
}

type FormData = {
  full_name: string
  email: string
  phone: string
  address: string
  city: string
  notes: string
}

const emptyForm: FormData = {
  full_name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  notes: '',
}

export default function CheckoutModal({ isOpen, onClose, cart, onSuccess }: CheckoutModalProps) {
  const [form, setForm] = useState<FormData>(emptyForm)
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }))
  }

  const sendByWhatsApp = () => {
    const lines = cart.map(
      (item) => `• ${item.quantity} x ${item.name} — ${(item.price * item.quantity).toFixed(2)} US$`,
    )
    const message = [
      '¡Hola! Quisiera realizar el siguiente pedido:',
      '',
      ...lines,
      '',
      `Total estimado: ${total.toFixed(2)} US$`,
      '',
      `Nombre: ${form.full_name}`,
      `Teléfono: ${form.phone}`,
      `Correo: ${form.email}`,
      `Envío a: ${form.address}, ${form.city}`,
      form.notes ? `Notas: ${form.notes}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
    onSuccess()
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    try {
      const response = await fetch(`${siteConfig.apiUrl}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          items: cart.map((item) => ({ product_id: item.id, quantity: item.quantity })),
        }),
      })

      if (!response.ok) throw new Error('No se pudo registrar el pedido')
      onSuccess()
    } catch {
      // Sin backend disponible, el pedido se envía por WhatsApp.
      sendByWhatsApp()
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-lead-950/75 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        onClick={onClose}
        aria-label="Cerrar formulario"
      />

      <div className="relative my-auto w-full max-w-lg animate-fade-up rounded-[1.75rem] border border-white/10 bg-lead-900 p-6 shadow-2xl sm:p-9">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-wine-300">
              Último paso
            </p>
            <h2 className="mt-1 font-display text-2xl text-white">Finalizar pedido</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-lead-300 transition hover:text-white"
            aria-label="Cerrar"
          >
            <Close width={17} height={17} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-wine-200">
              Nombre completo
            </span>
            <input className="field" required value={form.full_name} onChange={(e) => handleChange('full_name', e.target.value)} placeholder="Nombre y apellido" />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-wine-200">
                Correo electrónico
              </span>
              <input className="field" type="email" required value={form.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="tu@correo.com" />
            </label>
            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-wine-200">
                Teléfono
              </span>
              <input className="field" type="tel" required value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} placeholder="+54 9 ..." />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-wine-200">
              Dirección de envío
            </span>
            <input className="field" required value={form.address} onChange={(e) => handleChange('address', e.target.value)} placeholder="Calle, número, piso..." />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-wine-200">
              Ciudad
            </span>
            <input className="field" required value={form.city} onChange={(e) => handleChange('city', e.target.value)} placeholder="Tu ciudad" />
          </label>

          <label className="block">
            <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-wine-200">
              Notas (opcional)
            </span>
            <textarea className="field min-h-[90px] resize-y" value={form.notes} onChange={(e) => handleChange('notes', e.target.value)} placeholder="Indicaciones para tu pedido" />
          </label>

          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <span className="text-xs text-lead-300">Total estimado</span>
            <span className="font-display text-xl text-white">{total.toFixed(2)} US$</span>
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-60">
            {loading ? 'Enviando pedido...' : 'Confirmar y enviar'}
            {!loading && <ArrowRight width={16} height={16} />}
          </button>

          <button type="button" onClick={sendByWhatsApp} className="btn-outline-light w-full">
            Enviar pedido por WhatsApp
            <WhatsApp width={16} height={16} />
          </button>

          <p className="text-center text-[11px] leading-relaxed text-lead-500">
            Si el servidor de pedidos no está activo, tu pedido se enviará
            automáticamente por WhatsApp.
          </p>
        </form>
      </div>
    </div>
  )
}

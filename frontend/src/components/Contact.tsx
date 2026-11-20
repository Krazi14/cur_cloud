import { useState, type FormEvent } from 'react'
import { siteConfig, whatsappLink } from '../config'
import { ArrowUpRight, Mail, Phone, Send, WhatsApp } from './Icons'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Consulta desde la web - ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\nDe: ${form.name}\nCorreo: ${form.email}`)
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contacto" className="relative overflow-hidden bg-wine-700 section-pad text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full border border-white/10" />

      <div className="container-page relative grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <span className="eyebrow eyebrow-light">Hablemos</span>
          <h2 className="text-balance font-display text-4xl leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
            Hagamos tu próxima pieza.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-wine-100">
            Cuéntanos qué estás buscando o envíanos tu idea. Respondemos cada consulta
            para ayudarte a encontrar (o crear) el artículo perfecto.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={whatsappLink('Hola, quisiera hacer una consulta sobre sus productos.')}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 text-white/90 transition hover:text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <WhatsApp width={20} height={20} />
              </span>
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-wine-200">
                  WhatsApp
                </span>
                <span className="text-sm">{siteConfig.whatsappDisplay}</span>
              </span>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 text-white/90 transition hover:text-white"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <Mail width={20} height={20} />
              </span>
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-wine-200">
                  Correo
                </span>
                <span className="text-sm">{siteConfig.email}</span>
              </span>
            </a>

            <div className="flex items-center gap-4 text-white/90">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10">
                <Phone width={20} height={20} />
              </span>
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-wine-200">
                  Ubicación
                </span>
                <span className="text-sm">{siteConfig.location}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/15 bg-white/5 p-6 backdrop-blur-md sm:p-9">
          <h3 className="font-display text-2xl text-white">Envíanos un mensaje</h3>
          <p className="mt-2 text-sm text-wine-100">
            Completa el formulario y se abrirá tu correo con el mensaje listo.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-wine-200">
                  Nombre
                </span>
                <input
                  className="field"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-wine-200">
                  Correo electrónico
                </span>
                <input
                  className="field"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={form.email}
                  onChange={(event) => setForm({ ...form, email: event.target.value })}
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.16em] text-wine-200">
                Mensaje
              </span>
              <textarea
                className="field min-h-[140px] resize-y"
                required
                placeholder="Cuéntanos qué necesitas..."
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
              />
            </label>

            <button type="submit" className="btn-primary w-full bg-white text-wine-700 hover:bg-wine-100 hover:text-wine-800">
              Enviar consulta
              <Send width={16} height={16} />
            </button>

            {sent && (
              <p className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs text-white">
                ¡Listo! Tu correo se abrió con el mensaje preparado. También puedes
                escribirnos por WhatsApp.
              </p>
            )}
          </form>

          <a
            href={whatsappLink('Hola, quisiera hacer un pedido.')}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-wine-100 transition hover:text-white"
          >
            Prefiero comprar por WhatsApp
            <ArrowUpRight width={15} height={15} />
          </a>
        </div>
      </div>
    </section>
  )
}

import { Scissors, Shield, Sparkles, Truck } from './Icons'

const items = [
  { icon: Scissors, title: 'Confección artesanal', text: 'Cada pieza, revisada a mano' },
  { icon: Shield, title: 'Materiales seleccionados', text: 'Cuero y textil de calidad' },
  { icon: Sparkles, title: 'Diseños exclusivos', text: 'Para dama y caballero' },
  { icon: Truck, title: 'Envíos seguros', text: 'Llegamos a todo el país' },
]

export default function TrustBar() {
  return (
    <section className="border-b border-lead-200 bg-lead-50">
      <div className="container-page grid grid-cols-2 gap-x-5 gap-y-8 py-10 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-wine-100 text-wine-600">
              <Icon width={20} height={20} />
            </span>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-lead-800">{title}</p>
              <p className="mt-1 text-[11px] leading-relaxed text-lead-500">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

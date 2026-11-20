import { Scissors, Sparkles, Shield, Truck } from './Icons'

const steps = [
  {
    number: '01',
    title: 'Selección',
    text: 'Elegimos cuero y textiles por su textura, resistencia y caída.',
    icon: Shield,
  },
  {
    number: '02',
    title: 'Diseño',
    text: 'Definimos formas, herrajes y detalles pensando en el uso real.',
    icon: Sparkles,
  },
  {
    number: '03',
    title: 'Confección',
    text: 'Cortamos, cosemos y armamos cada pieza con precisión artesanal.',
    icon: Scissors,
  },
  {
    number: '04',
    title: 'Entrega',
    text: 'Revisamos el acabado final y preparamos tu pedido para enviarlo.',
    icon: Truck,
  },
]

export default function Process() {
  return (
    <section id="proceso" className="bg-plomo-claro section-pad">
      <div className="container-page">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">Nuestro proceso</span>
          <h2 className="display-title text-balance">
            La diferencia se siente en los detalles.
          </h2>
          <p className="body-copy mx-auto mt-5 max-w-xl">
            Detrás de cada artículo hay decisiones conscientes, manos expertas y
            respeto por el material.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-lead-300 lg:block" />
          {steps.map(({ number, title, text, icon: Icon }, index) => (
            <div
              key={number}
              style={{ animationDelay: `${index * 90}ms` }}
              className="reveal relative text-center lg:px-3"
            >
              <div className="relative z-10 mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border border-wine-200 bg-lead-50 text-wine-600 shadow-soft">
                <Icon width={26} height={26} />
                <span className="absolute -bottom-1 -right-1 rounded-full bg-wine-600 px-2 py-0.5 text-[9px] font-bold text-white">
                  {number}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl text-lead-900">{title}</h3>
              <p className="mx-auto mt-2 max-w-[240px] text-[13px] leading-relaxed text-lead-500">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

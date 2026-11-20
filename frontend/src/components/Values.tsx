import { Heart, Scissors, Sparkles } from './Icons'

const values = [
  {
    icon: Scissors,
    title: 'Producción propia',
    text: 'Confeccionamos en taller propio, cuidando cada etapa del proceso.',
  },
  {
    icon: Sparkles,
    title: 'Diseño personalizado',
    text: 'Adaptamos modelos, colores y combinaciones a lo que necesitas.',
  },
  {
    icon: Heart,
    title: 'Trato cercano',
    text: 'Te acompañamos desde la consulta hasta que recibes tu pedido.',
  },
]

export default function Values() {
  return (
    <section className="bg-lead-950 section-pad text-white">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="eyebrow eyebrow-light">Lo que nos define</span>
            <h2 className="text-balance font-display text-4xl leading-[1.12] sm:text-5xl">
              No hacemos accesorios.
              <span className="mt-2 block italic text-wine-400">Creamos compañeros.</span>
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-wine-500/50 hover:bg-wine-600/10"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-wine-600/20 text-wine-300 transition-colors group-hover:bg-wine-600 group-hover:text-white">
                  <Icon width={21} height={21} />
                </span>
                <h3 className="mt-5 font-display text-lg text-white">{title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-lead-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

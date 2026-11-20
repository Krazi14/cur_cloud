import { ArrowRight, ArrowUpRight, Scissors, Shield } from './Icons'
import ProductImage from './ProductImage'
import { heroImage } from '../data/catalog'

const stats = [
  { value: '100%', label: 'Artesanal' },
  { value: '6', label: 'Líneas de producto' },
  { value: '2', label: 'Dama y caballero' },
]

export default function Hero() {
  return (
    <section id="inicio" className="bg-plomo-texture relative overflow-hidden text-white">
      {/* Líneas decorativas que simulan costuras */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute -left-20 top-1/3 h-px w-[130%] -rotate-12 border-t border-dashed border-white" />
        <div className="absolute -left-20 top-2/3 h-px w-[130%] -rotate-12 border-t border-dashed border-white" />
      </div>
      <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-wine-600/20 blur-3xl" />

      <div className="container-page relative grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="reveal">
          <span className="eyebrow eyebrow-light">
            Marroquinería contemporánea
          </span>

          <h1 className="text-balance font-display text-[2.9rem] font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.4rem] xl:text-[5rem]">
            Piezas de cuero
            <br />
            <span className="italic text-wine-400">que dejan huella.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-lead-300 sm:text-lg">
            Confeccionamos carteras, mochilas, calzado, correas, billeteras, morrales y
            monederos en cuero y textil combinado. Diseño honesto, hecho para acompañarte
            durante años.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#coleccion" className="btn-primary">
              Explorar colección
              <ArrowRight width={17} height={17} />
            </a>
            <a href="#contacto" className="btn-outline-light">
              Solicitar cotización
              <ArrowUpRight width={16} height={16} />
            </a>
          </div>

          <div className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-white/10 pt-7">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-wine-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-[520px]">
          <div className="relative rounded-[2.25rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
            <div className="image-frame h-[380px] rounded-[1.75rem] sm:h-[500px]">
              <ProductImage
                src={heroImage}
                alt="Cartera artesanal de cuero"
                className="image-cover"
                eager
              />
            </div>
          </div>

          <div className="absolute -left-3 bottom-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-lead-950/90 px-4 py-3 shadow-wine backdrop-blur-md sm:-left-8 sm:px-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-wine-600 text-white">
              <Scissors width={19} height={19} />
            </span>
            <span>
              <span className="block text-xs font-bold text-white">Hecho a mano</span>
              <span className="block text-[10px] text-lead-400">Cada detalle cuenta</span>
            </span>
          </div>

          <div className="absolute -right-2 -top-4 flex items-center gap-2 rounded-full border border-wine-400/30 bg-wine-700 px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-wine sm:-right-6">
            <Shield width={15} height={15} className="text-wine-200" />
            Cuero genuino
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 bg-lead-950/40">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-lead-400 sm:justify-between">
          <span>Cuero</span>
          <span className="text-wine-500">✦</span>
          <span>Textil</span>
          <span className="text-wine-500">✦</span>
          <span>Oficio</span>
          <span className="text-wine-500">✦</span>
          <span>Diseño</span>
        </div>
      </div>
    </section>
  )
}

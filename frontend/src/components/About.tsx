import { Check } from './Icons'
import ProductImage from './ProductImage'
import { aboutDetailImage, aboutImage } from '../data/catalog'

const highlights = [
  'Carteras y mochilas para cada día',
  'Calzado, correas y billeteras con acabados cuidados',
  'Morrales y monederos en cuero o textil combinado',
]

export default function About() {
  return (
    <section id="nosotros" className="bg-plomo-texture section-pad text-white">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="relative mx-auto w-full max-w-xl">
          <div className="image-frame h-[420px] rounded-[2.25rem] border border-white/10 sm:h-[520px]">
            <ProductImage
              src={aboutImage}
              alt="Taller de marroquinería artesanal"
              className="image-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-2 h-[180px] w-[150px] overflow-hidden rounded-[1.5rem] border-4 border-lead-900 shadow-card sm:-right-10 sm:h-[210px] sm:w-[185px]">
            <ProductImage
              src={aboutDetailImage}
              alt="Detalle de una pieza de cuero"
              className="image-cover h-full w-full"
            />
          </div>
          <div className="absolute -left-4 top-10 rounded-2xl border border-white/10 bg-lead-950/85 px-5 py-4 backdrop-blur-md sm:-left-10">
            <p className="font-display text-3xl text-wine-300">100%</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-lead-300">
              Hecho a mano
            </p>
          </div>
        </div>

        <div className="lg:pl-4">
          <span className="eyebrow eyebrow-light">Sobre nosotros</span>
          <h2 className="text-balance font-display text-4xl leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            El oficio de hacer <span className="italic text-wine-400">cosas que duran.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-lead-300">
            Somos una marroquinería dedicada a la fabricación de artículos en cuero y
            afines. Combinamos técnicas tradicionales con una mirada actual para crear
            piezas para dama y caballero que se adaptan a tu ritmo de vida.
          </p>

          <ul className="mt-8 space-y-4">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-wine-600 text-white">
                  <Check width={14} height={14} />
                </span>
                <span className="pt-0.5 text-sm text-lead-200">{item}</span>
              </li>
            ))}
          </ul>

          <a href="#proceso" className="btn-outline-light mt-10">
            Conoce nuestro proceso
          </a>
        </div>
      </div>
    </section>
  )
}

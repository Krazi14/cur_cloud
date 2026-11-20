import { whatsappLink } from '../config'
import { WhatsApp } from './Icons'

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink('Hola, quisiera hacer una consulta sobre sus artículos de cuero.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-wine-600 text-white shadow-wine transition-all duration-300 hover:-translate-y-1 hover:bg-wine-500 sm:bottom-7 sm:right-7"
    >
      <WhatsApp width={25} height={25} />
    </a>
  )
}

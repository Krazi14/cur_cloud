/**
 * Datos de la tienda.
 * Edita aquí el nombre, el correo y el número de WhatsApp antes de publicar.
 */
export const siteConfig = {
  brandName: 'PERÚ CUEROS',
  brandTagline: 'Marroquinería artesanal',
  email: 'renzoheras141630@gmail.com',
  /** Número en formato internacional sin espacios ni guiones, usado por WhatsApp */
  whatsappNumber: '51977163161',
  whatsappDisplay: '+51 977 163 161',
  instagramUrl: 'https://instagram.com/',
  facebookUrl: 'https://facebook.com/',
  location: 'Villa El Salvador, Lima, Perú',
  /** URL del API de pedidos. Si no está disponible, el pedido se envía por WhatsApp. */
  apiUrl: 'http://localhost:8000',
} as const

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`

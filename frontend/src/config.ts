/**
 * Datos de la tienda.
 * Edita aquí el nombre, el correo y el número de WhatsApp antes de publicar.
 */
export const siteConfig = {
  brandName: 'MI EMPRESA',
  brandTagline: 'Marroquinería artesanal',
  email: 'hola@miempresa.com',
  /** Número en formato internacional sin espacios ni guiones, usado por WhatsApp */
  whatsappNumber: '5491123456789',
  whatsappDisplay: '+54 9 11 2345-6789',
  instagramUrl: 'https://instagram.com/',
  facebookUrl: 'https://facebook.com/',
  location: 'Tu ciudad, Tu país',
  /** URL del API de pedidos. Si no está disponible, el pedido se envía por WhatsApp. */
  apiUrl: 'http://localhost:8000',
} as const

export const whatsappLink = (message: string) =>
  `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`

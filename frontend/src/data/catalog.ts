import type { Category, Product } from '../types'

const u = (id: string, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`

export const categories: Category[] = [
  {
    id: 'carteras',
    label: 'Carteras',
    audience: 'Dama',
    image: u('photo-1584917865442-de89df76afd3'),
    description: 'Elegancia que se lleva todos los días.',
  },
  {
    id: 'mochilas',
    label: 'Mochilas',
    audience: 'Dama y caballero',
    image: u('photo-1553062407-98eeb64c6a62'),
    description: 'Espacio, comfort y carácter.',
  },
  {
    id: 'calzado',
    label: 'Calzado',
    audience: 'Unisex',
    image: u('photo-1543163521-1bf539c55dd2'),
    description: 'Pisar con estilo y seguridad.',
  },
  {
    id: 'correas',
    label: 'Correas',
    audience: 'Caballero',
    image: u('photo-1596755094514-f87e34085b2c'),
    description: 'El detalle que define el look.',
  },
  {
    id: 'billeteras',
    label: 'Billeteras',
    audience: 'Dama y caballero',
    image: u('photo-1627123424574-724758594e93'),
    description: 'Orden y diseño en cada bolsillo.',
  },
  {
    id: 'morrales',
    label: 'Morrales y monederos',
    audience: 'Unisex',
    image: u('photo-1560343090-f0409e92791a'),
    description: 'Compañeros para cada escapada.',
  },
]

/** Catálogo de ejemplo: se usa si el backend no está disponible. */
export const fallbackProducts: Product[] = [
  {
    id: 1,
    name: 'Cartera Aura',
    category: 'carteras',
    price: 129,
    image: u('photo-1548036328-c9fa89d128fa'),
    badge: 'Nueva',
  },
  {
    id: 2,
    name: 'Cartera Siena',
    category: 'carteras',
    price: 159,
    image: u('photo-1584917865442-de89df76afd3'),
    badge: 'Best seller',
  },
  {
    id: 3,
    name: 'Mochila Nómada',
    category: 'mochilas',
    price: 149,
    image: u('photo-1553062407-98eeb64c6a62'),
    badge: 'Esencial',
  },
  {
    id: 4,
    name: 'Mochila Urbana',
    category: 'mochilas',
    price: 169,
    image: u('photo-1590874103328-eac38a683ce7'),
  },
  {
    id: 5,
    name: 'Botín Terra',
    category: 'calzado',
    price: 169,
    image: u('photo-1543163521-1bf539c55dd2'),
    badge: 'Unisex',
  },
  {
    id: 6,
    name: 'Calzado Atelier',
    category: 'calzado',
    price: 139,
    image: u('photo-1549298916-b41d501d3772'),
  },
  {
    id: 7,
    name: 'Correa Heritage',
    category: 'correas',
    price: 49,
    image: u('photo-1596755094514-f87e34085b2c'),
  },
  {
    id: 8,
    name: 'Correa Daily',
    category: 'correas',
    price: 45,
    image: u('photo-1614179689702-355944cd0918'),
  },
  {
    id: 9,
    name: 'Billetera Origen',
    category: 'billeteras',
    price: 59,
    image: u('photo-1627123424574-724758594e93'),
    badge: 'Nueva',
  },
  {
    id: 10,
    name: 'Billetera Slim',
    category: 'billeteras',
    price: 54,
    image: u('photo-1611652022419-a9419f74343d'),
  },
  {
    id: 11,
    name: 'Morral Viajero',
    category: 'morrales',
    price: 119,
    image: u('photo-1560343090-f0409e92791a'),
  },
  {
    id: 12,
    name: 'Monedero Luna',
    category: 'morrales',
    price: 39,
    image: u('photo-1524805444758-089113d48a6d'),
  },
]

export const heroImage = u('photo-1584917865442-de89df76afd3', 1100)
export const aboutImage = u('photo-1520639888713-7851133b1ed0', 1000)
export const aboutDetailImage = u('photo-1614179689702-355944cd0918', 600)

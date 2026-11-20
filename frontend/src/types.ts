export type CategoryId =
  | 'carteras'
  | 'mochilas'
  | 'calzado'
  | 'correas'
  | 'billeteras'
  | 'morrales'

export interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  badge?: string | null
}

export interface CartItem extends Product {
  quantity: number
}

export interface Category {
  id: CategoryId
  label: string
  audience: string
  image: string
  description: string
}

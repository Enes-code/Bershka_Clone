import type { Product } from './product'

export interface CartItem {
  id: string
  product: Product
  quantity: number
  size: string
  color: string
  price: number
  addedAt: Date
}

export interface Cart {
  items: CartItem[]
  total: number
  subtotal: number
  shipping?: number
  discount?: number
  discountCode?: string
  updatedAt: Date
}


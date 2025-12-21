export interface CartItem {
  productId: string
  title: string
  price: number
  currency: 'TRY' | 'EUR' | 'USD'
  imageUrl: string
  qty: number
}

export interface Cart {
  items: CartItem[]
  total: number
  subtotal: number
  shipping?: number
  discount?: number
  discountCode?: string
  currency: string
  updatedAt: Date
}


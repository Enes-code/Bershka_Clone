import type { CartItem } from './cart'

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  currency: 'TRY' | 'EUR' | 'USD'
  createdAt: number
  status: 'created' | 'paid' | 'cancelled'
}


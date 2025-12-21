import type { CartItem } from './cart'
import type { Address } from './user'

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  subtotal: number
  shipping: number
  discount: number
  total: number
  status: OrderStatus
  paymentMethod: PaymentMethod
  shippingAddress: Address
  billingAddress?: Address
  trackingNumber?: string
  createdAt: Date
  updatedAt: Date
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export type PaymentMethod = 
  | 'credit_card'
  | 'debit_card'
  | 'paypal'
  | 'bank_transfer'
  | 'cash_on_delivery'


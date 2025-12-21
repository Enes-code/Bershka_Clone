// Basket Item Interface
export interface IBasketItem {
  productId: string
  title: string
  price: number
  currency: 'TRY' | 'EUR' | 'USD'
  imageUrl: string
  qty: number
}

// Basket Interface for Firestore
export interface IBasket {
  userId: string
  items: IBasketItem[]
  total: number
  updatedAt: number
}


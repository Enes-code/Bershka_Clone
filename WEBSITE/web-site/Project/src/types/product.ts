export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  categoryId: string
  sizes: string[]
  colors: ProductColor[]
  inStock: boolean
  stock: number
  brand: string
  rating?: number
  reviews?: number
  tags?: string[]
  createdAt: Date
  updatedAt: Date
}

export interface ProductColor {
  name: string
  hex: string
  images: string[]
}

export interface ProductVariant {
  productId: string
  size: string
  color: string
  stock: number
  price?: number
}


export interface Product {
  id: string
  title: string
  price: number
  currency: 'TRY' | 'EUR' | 'USD'
  imageUrl: string
  categorySlug: string
  gender: 'kadin' | 'erkek'
}


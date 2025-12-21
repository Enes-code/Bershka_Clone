export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
  parentId?: string
  order: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface CategoryTree extends Category {
  children?: CategoryTree[]
}


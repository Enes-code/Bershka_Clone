export interface IUser {
  uid: string;
  email: string;
  displayName: string | null;
  photoURL: string | null;
  phoneNumber?: string | null;
  createdAt: string; // ISO string
  address?: {
    street: string;
    city: string;
    zipCode: string;
    country: string;
  };
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  currency: string;
  description: string;
  images: string[];
  sizes: string[];
  colors: string[];
  category: string;
  stock: number;
  isNew?: boolean;
  discountPercentage?: number;
}

export interface IBasketItem {
  productId: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  product?: IProduct; // Populated product data
}

export interface ICategory {
  id: string;
  name: string;
  slug: string;
  imageUrl?: string;
  subcategories?: ICategory[];
}

export interface ILocation {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  city: string;
  isOpen: boolean;
}

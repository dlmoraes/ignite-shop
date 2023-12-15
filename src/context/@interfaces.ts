import { ReactNode } from 'react'

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  priceId: string
  quantity: number
}

export interface ShopContextProps {
  addItem: (product: IProduct) => void
  removeItem: (productId: string) => void
  itemsCart: IProduct[]
  amount: number
  qtyItems: number
}

export interface ShopProviderProps {
  children: ReactNode
}

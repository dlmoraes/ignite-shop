import { createContext, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { IProduct, ShopContextProps, ShopProviderProps } from './@interfaces'

export const ShopContext = createContext({} as ShopContextProps)

export function ShopContextProvider({ children }: ShopProviderProps) {
  const [itemsCart, setItemsCart] = useState<IProduct[]>([])

  const addItem = (product: IProduct) => {
    setItemsCart((state) => {
      const checkProduct = state.some(
        (productCart) => productCart.id === product.id,
      )

      if (checkProduct) {
        toast.warning('O produto já existe no seu carrinho!', {
          position: toast.POSITION.TOP_CENTER,
        })
      }

      return checkProduct ? state : [...state, product]
    })
  }

  const removeItem = (productId: string) => {
    setItemsCart((state) => state.filter((product) => product.id !== productId))
  }

  const amount = useMemo(() => {
    return itemsCart.reduce((acc, cur) => {
      return acc + cur.numberPrice
    }, 0)
  }, [itemsCart])

  const qtyItems = useMemo(() => {
    return itemsCart.length
  }, [itemsCart])

  return (
    <ShopContext.Provider
      value={{
        addItem,
        removeItem,
        itemsCart,
        amount,
        qtyItems,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

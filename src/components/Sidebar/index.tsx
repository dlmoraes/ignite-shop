import Image from 'next/image'
import {
  EmptyCartContainer,
  SidebarContainer,
  SidebarContent,
  SidebarItemContainer,
  SidebarResumeContainer,
} from './styles'

import { IProduct } from '@/context/@interfaces'
import { ShopContext } from '@/context/ShopContext'
import { formatCurrency } from '@/utils'
import { ShoppingCart, X } from '@phosphor-icons/react'
import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { Tooltip } from '../Tooltip'
import { SidebarProps } from './@interfaces'

export function SideBar({ showSidebar, onCloseSideBar }: SidebarProps) {
  const { itemsCart, removeItem, qtyItems, amount } = useContext(ShopContext)
  const [active, setActive] = useState(showSidebar)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  function handleCloseSidebar() {
    setActive(false)
    setTimeout(() => {
      onCloseSideBar()
    }, 800)
  }

  function handleRemoveItemToCart(productId: string) {
    removeItem(productId)
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        line_items: itemsCart.map((product: IProduct) => ({
          price: product.priceId,
          quantity: 1,
        })),
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false)
      toast.error('Falha ao redirecionar ao checkout!', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }

  return (
    <SidebarContainer className={active ? 'open' : 'close'}>
      <header>
        <Tooltip text="Fechar">
          <button type="button" onClick={handleCloseSidebar}>
            <X size={32} weight="bold" />
          </button>
        </Tooltip>
      </header>
      {qtyItems > 0 ? (
        <>
          <SidebarContent>
            <strong>Sacola de compras</strong>
            <AnimatePresence>
              {itemsCart.map((product) => {
                return (
                  <motion.div
                    key={product.id}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <SidebarItemContainer>
                      <Image
                        src={product.imageUrl}
                        width={95}
                        height={95}
                        alt=""
                      />
                      <div>
                        <span>{product.name}</span>
                        <p>{product.price}</p>
                        <Tooltip text="Remover item">
                          <button
                            onClick={() => handleRemoveItemToCart(product.id)}
                            type="button"
                          >
                            Remover
                          </button>
                        </Tooltip>
                      </div>
                    </SidebarItemContainer>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </SidebarContent>
          <SidebarResumeContainer>
            <div>
              <span>Quantidade</span>
              <span>{qtyItems} itens</span>
            </div>
            <div>
              <strong>Valor total</strong>
              <strong>{formatCurrency(amount)}</strong>
            </div>
            <button
              disabled={isCreatingCheckoutSession}
              onClick={handleBuyProduct}
              type="button"
            >
              Finalizar compra
            </button>
          </SidebarResumeContainer>
        </>
      ) : (
        <EmptyCartContainer>
          <strong>Sem itens no carrinho</strong>
          <ShoppingCart size={48} />
        </EmptyCartContainer>
      )}
    </SidebarContainer>
  )
}

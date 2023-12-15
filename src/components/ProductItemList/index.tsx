import { ShopContext } from '@/context/ShopContext'
import { Handbag } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'
import { Tooltip } from '../Tooltip'
import { ProductItemListProps } from './@interfaces'
import { Product } from './styles'

export function ProductItemList({ product, className }: ProductItemListProps) {
  const { addItem } = useContext(ShopContext)

  function handleAddItemToCart() {
    addItem(product)
  }

  return (
    <Product className={className}>
      <Link href={`/product/${product.id}`} prefetch={false}>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </Link>

      <footer>
        <Link href={`/product/${product.id}`} prefetch={false}>
          <div>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </div>
        </Link>

        <Tooltip text="Adicionar ao carrinho">
          <button
            onClick={() => {
              handleAddItemToCart()
            }}
          >
            <Handbag size={32} weight="bold" />
          </button>
        </Tooltip>
      </footer>
    </Product>
  )
}

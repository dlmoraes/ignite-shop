/* eslint-disable @next/next/no-typos */
import { IProduct } from '@/context/@interfaces'
import { ShopContext } from '@/context/ShopContext'
import { stripe } from '@/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { formatCurrency } from '@/utils'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import Stripe from 'stripe'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useContext(ShopContext)

  function handleAddItemToCart() {
    addItem(product)
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button onClick={handleAddItemToCart}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Buscar os produtos mais vendidos / mais acessados
  return {
    paths: [
      {
        params: { id: 'prod_P8R61JYr2iunlJ' },
      },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const productId = String(params !== undefined ? params.id : '')

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: formatCurrency(price.unit_amount || 0, true),
        numberPrice: (price.unit_amount || 0) / 100,
        description: product.description,
        priceId: price.id,
        quantity: 1,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}

import {
  ArrowButton,
  HomeContainer,
  LeftArrowContainer,
  RightArrowContainer,
} from '@/styles/pages/home'

import { useKeenSlider } from 'keen-slider/react'

import { ProductItemList } from '@/components/ProductItemList'
import { IProduct } from '@/context/@interfaces'
import { stripe } from '@/lib/stripe'
import { formatCurrency } from '@/utils'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Stripe from 'stripe'

interface HomeProps {
  products: IProduct[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 48,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  function handleMoveSlide(event: any, move: string) {
    event.stopPropagation() || move === 'prev'
      ? instanceRef.current?.prev()
      : instanceRef.current?.next()
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <ProductItemList
              key={product.id}
              product={product}
              className="keen-slider__slide"
            />
          )
        })}
      </HomeContainer>
      {instanceRef.current && (
        <>
          <LeftArrowContainer>
            <ArrowButton
              type="button"
              onClick={(e) => handleMoveSlide(e, 'prev')}
              disabled={currentSlide === 0}
            >
              <CaretLeft size={48} />
            </ArrowButton>
          </LeftArrowContainer>

          <RightArrowContainer>
            <ArrowButton
              type="button"
              onClick={(e) => handleMoveSlide(e, 'next')}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 3
              }
            >
              <CaretRight size={48} />
            </ArrowButton>
          </RightArrowContainer>
        </>
      )}
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formatCurrency(price.unit_amount || 0, true),
      numberPrice: (price.unit_amount || 0) / 100,
      description: product.description,
      priceId: price.id,
      quantity: 1,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}

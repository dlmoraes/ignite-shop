import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import { Header } from '@/components/Header'
import { ShopContextProvider } from '@/context/ShopContext'
import { Container } from '@/styles/pages/app'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ShopContextProvider>
      <Container>
        <Header />
        <Component {...pageProps} />
        <div id="sidebar"></div>
        <ToastContainer className="notification" theme="dark" />
      </Container>
    </ShopContextProvider>
  )
}

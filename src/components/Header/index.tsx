import Image from 'next/image'
import { HeaderContainer } from './styles'

import logoImg from '@/assets/logo.svg'
import { ShopContext } from '@/context/ShopContext'
import { Handbag } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { SideBar } from '../Sidebar'
import { Tooltip } from '../Tooltip'

export function Header() {
  const { qtyItems } = useContext(ShopContext)
  const [showSidebar, setShowSidebar] = useState(false)

  const { pathname } = useRouter()

  const enableShowInPage = showSidebar && pathname !== '/success'

  function handleShowSidebar() {
    setShowSidebar(true)
  }

  function onCloseSidebar() {
    setShowSidebar(false)
  }

  return (
    <>
      <HeaderContainer>
        <Link className={enableShowInPage ? '' : 'success'} href="/">
          <Tooltip text="Página principal">
            <Image src={logoImg} alt="Logo Ignite Shop" />
          </Tooltip>
        </Link>
        {enableShowInPage ? (
          <Tooltip text="Ver carrinho">
            <button
              type="button"
              onClick={handleShowSidebar}
              className={qtyItems ? 'full' : undefined}
            >
              <AnimatePresence>
                {qtyItems ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {qtyItems}
                  </motion.span>
                ) : (
                  <></>
                )}
              </AnimatePresence>
              <Handbag size={32} weight="bold" />
            </button>
          </Tooltip>
        ) : (
          <></>
        )}
      </HeaderContainer>
      {enableShowInPage &&
        createPortal(
          <SideBar
            showSidebar={enableShowInPage}
            onCloseSideBar={onCloseSidebar}
          />,
          document.getElementById('sidebar')!,
        )}
    </>
  )
}

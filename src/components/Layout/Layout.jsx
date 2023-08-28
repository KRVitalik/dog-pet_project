import Spinner from '../Spinner/Spinner'
import StickyHome from '../StickyHome/StickyHome'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { LayoutMainContainer } from './Layout.styled'

const Layout = () => {
  return (
    <LayoutMainContainer>
      <StickyHome/>
      <Suspense fallback={<Spinner/>}>
          <Outlet />
      </Suspense>
      </LayoutMainContainer>
  )
}

export default Layout
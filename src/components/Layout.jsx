import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Outlet/>
        <footer>
            <span>20.12.2023</span>
        </footer>
    </>
  )
}

export default Layout
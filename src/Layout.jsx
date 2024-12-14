import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <div>
            <Sidebar/>
        </div>
        <div>
            <Outlet/>
        </div>
    </>
  )
}

export default Layout
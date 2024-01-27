import React from 'react'
import CartOverview from "../features/Cart/CartOverview";
import { Outlet } from 'react-router';
import Header from './Header';
function AppLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <CartOverview/>
    </div>
  )
}

export default AppLayout
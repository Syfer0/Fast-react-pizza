import React from 'react'
import CartOverview from "../features/Cart/CartOverview";
import { Outlet,  useNavigation } from 'react-router';
import Header from './Header';
import Loader from './Loader';
function AppLayout() {
const navigation = useNavigation()
const isLoading = navigation.state === 'loading'
  return (
    <div className='layout'>
    {isLoading && <Loader/>}
        <Header/>
        <Outlet/>
        <CartOverview/>
    </div>
  )
}

export default AppLayout
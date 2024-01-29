import React from 'react'
import CartOverview from "../features/Cart/CartOverview";
import { Outlet,  useNavigation } from 'react-router';
import Header from './Header';
import Loader from './Loader';
function AppLayout() {
const navigation = useNavigation()
const isLoading = navigation.state === 'loading'
  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
    {isLoading && <Loader/>}
        <Header/>
        <div className='overflow-y-auto'>
        <main className=' mx-auto max-w-xl'>
        <Outlet/>
        </main>
        </div>
        <CartOverview/>
    </div>
  )
}

export default AppLayout
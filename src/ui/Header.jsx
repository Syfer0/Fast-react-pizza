import React from 'react'
import { Link } from 'react-router-dom'
import Searchorder from '../features/order/Searchorder'
import Username from '../features/user/Username'
function Header() {
  return (
    <div>
    <header className=" flex item-center container mx-auto bg-yellow-500 px-4 py-4 justify-between  border-b border-stone-300 sm:px-6
     uppercase ">
        <Link to='/' className=' uppercase tracking-widest'> Fast React Pizza co.</Link>
        <Searchorder/>
        <Username/>
    </header> 
    </div>
  )
}

export default Header
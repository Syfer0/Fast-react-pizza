import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
    <header className=" flex item-center container mx-auto bg-yellow-500 px-4 py-3 justify-between">
        <Link to='/'> Fast React Pizza co.</Link>
    </header> 
    </div>
  )
}

export default Header
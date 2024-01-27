 import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './ui/Home'
import Error from './ui/Error'
import Menu, {loader as menuloader} from './features/menu/Menu'
import Cart from './features/Cart/Cart'
import Order,{loader as orderLoader} from './features/order/Order'
import CreateOrder from './features/order/CreateOrder'
import AppLayout from './ui/AppLayout'
const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[{ path:'/',
    element:<Home/>},
    {
      path: '/menu',
      element:<Menu/>,
      loader:menuloader,
      errorElement:<Error/>,
    },
    {
   path:'/cart',
   element:<Cart/>
    },
    {
      path:'/order/:orderId',
      element:<Order/>,
      loader:orderLoader,
      errorElement:<Error/>,
    },{
      path:'/order/new',
      element:<CreateOrder/>
    },]
  }
 
   
])
 function App() {
   return (
     <div className='space-y-10'>
<RouterProvider router={router}/>
      
     
     </div>
   )
 }
 
 export default App
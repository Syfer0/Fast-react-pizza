import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './ui/Home'
import Error from './ui/Error'
import Menu, {loader as menuloader} from './features/menu/Menu'
import Cart from './features/Cart/Cart'
import Order,{loader as orderLoader} from './features/order/Order'
import CreateOrder,{action as createOrderAction} from './features/order/CreateOrder'
import AppLayout from './ui/AppLayout'
import { action as updateOrderAction } from './features/order/UpdateOrder';
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
      action: updateOrderAction,
    },{
      path:'/order/new',
      element:<CreateOrder/>,
      action:createOrderAction
    },]
  }
 
   
])
 function App() {
   return (
     <div >
<RouterProvider router={router}/>
      
     
     </div>
   )
 }
 
 export default App
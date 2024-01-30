import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    // cart:[],
    cart:[{
        pizzId:12,
        name: 'Mediterranean',
        quantity:2,
        unitPrice:16,
        totalPrice:32,
    }]
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    addItem(state,action){
        //payload = newitem
        state.cart.push(action.payload)
    },
    deleteItem(state,action){
        //payload = pizzaID
        state.cart = state.cart.filter(item => item.pizzId !== action.payload)
    },
    increaseItemQuantity(state,action){
        //payload = pizzaid
        const item = state.cart.find(item=>item.pizzId === action.payload)
        item.quantity++
        item.totalPrice = item.quantity * item.unitPrice
    },
    decreaseItemQuantity(state,action){
        // payload = pizzaid
        const item = state.cart.find(item => item.pizzId === action.payload )
        item.quantity--
        item.totalPrice = item.quantity 
    },
    clearCart(state){
        state.cart = [];
    },
}) 
    export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearCart} = cartSlice.actions
    export default cartSlice;       
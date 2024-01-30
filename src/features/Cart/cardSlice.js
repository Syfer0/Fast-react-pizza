import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 cart : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newitem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload = pizzaID
      state.cart = state.cart.filter(item => item.pizzId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      // payload = pizzaid
      const item = state.cart.find(item => item.pizzId === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    decreaseItemQuantity(state, action) {
      // payload = pizzaid
      const item = state.cart.find(item => item.pizzId === action.payload);
      if (item && item.quantity > 0) {
        item.quantity--;
        item.totalPrice = item.quantity * item.unitPrice;
      }
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
export const getTotalCartQuantity = state => state.cart.cart.reduce((sum,item)=> sum + item.quantity , 0 )
export const getTotalCartPrice = state => state.cart.cart.reduce((sum,item)=> sum + item.totalPrice , 0 )
// might you get performace issue to scale so must checkout reselect libray 

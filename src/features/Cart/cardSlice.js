import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    {
      pizzId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
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

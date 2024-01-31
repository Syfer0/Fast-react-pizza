import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cardReducer from "./features/Cart/cartSlice";
 
const store = configureStore({
    reducer:{
        user: userReducer,
        cart: cardReducer,
    }
})
export default store;
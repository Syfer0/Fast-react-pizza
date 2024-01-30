import { configureStore, createReducer, createSlice } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cardReducer from "./features/Cart/cardSlice";

const store = configureStore({
    reducer:{
        user: userReducer,
        cart: cardReducer,
    }
})
export default store;
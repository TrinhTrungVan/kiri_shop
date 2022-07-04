import { configureStore } from "@reduxjs/toolkit";

import productSlice from "../redux/slices/productSlice";
import productDetailSlice from "../redux/slices/productDetailSlice";
import cartSlice from "../redux/slices/cartSlice";
// import userSlice from "../redux/slices/userSlice";

const store = configureStore({
    reducer: {
        productList: productSlice,
        productDetail: productDetailSlice,
        cart: cartSlice,
    },
});

export default store;

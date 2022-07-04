import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import request from "../../api/request";

const initialState = {
    cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            const currentItem = state.cartItems.find(
                (x) => x.id === action.payload
            );
            currentItem.quantity += 1;
            // update localStorage
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        decreaseQuantity: (state, action) => {
            const currentItem = state.cartItems.find(
                (x) => x.id === action.payload
            );
            if (currentItem.quantity > 1) {
                currentItem.quantity -= 1;
            }
            // update localStorage
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        deleteItem: (state, action) => {
            const newCartItems = state.cartItems.filter(
                (item) => item.id != action.payload
            );
            console.log(newCartItems);
            state.cartItems = newCartItems;
            // update localStorage
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addItem.fulfilled, (state, action) => {
            const item = action.payload;
            const existItem = state.cartItems.find((x) => x.id === item.id);

            if (existItem) {
                // if existItem then increase quantity
                state.cartItems.forEach((x) => {
                    if (x.id === item.id) {
                        x.quantity += item.quantity;
                    }
                });
            } else {
                state.cartItems.push(item);
            }
            // update localStorage
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        });
    },
});

export const addItem = createAsyncThunk("addItem", async ({ id, quantity }) => {
    const res = await request.get(`/products/${id}`);
    const item = res.data;
    return {
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        quantity: quantity,
    };
});

export const { increaseQuantity, decreaseQuantity, deleteItem } =
    cartSlice.actions;
export default cartSlice.reducer;

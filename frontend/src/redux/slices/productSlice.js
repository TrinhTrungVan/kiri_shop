import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import request from "../../api/request";

const initialState = {
    products: [],
    loading: false,
    error: false,
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.loading = false;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    },
});

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const res = await request.get("/products");
    return res.data;
});

export const {} = productSlice.actions;
export default productSlice.reducer;

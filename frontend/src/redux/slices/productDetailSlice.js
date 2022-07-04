import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import request from "../../api/request";

const initialState = {
    productDetail: null,
    loading: false,
    error: false,
};

const productDetailSlice = createSlice({
    name: "productDetail",
    initialState,
    reducer: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductDetail.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.productDetail = action.payload;
                state.loading = false;
            })
            .addCase(fetchProductDetail.rejected, (state, action) => {
                state.error = action.error.message;
                state.loading = false;
            });
    },
});

export const fetchProductDetail = createAsyncThunk(
    "fetchProductDetail",
    async (id) => {
        const res = await request.get(`/products/${id}`);
        return res.data;
    }
);

export const {} = productDetailSlice.actions;
export default productDetailSlice.reducer;

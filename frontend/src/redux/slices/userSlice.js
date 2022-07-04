import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    loading: false,
    error: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase;
    },
});

export const userLogin = createAsyncThunk(
    "userLogin",
    async ({ email, password }) => {}
);

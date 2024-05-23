import { createSlice } from "@reduxjs/toolkit";
import { productGet, productRecommendeds } from "../actions/productActions";

const initialState = {
    product: {},
    loading: false,
    recommended: {
        loading: false,
        list: []
    },
}

const productSlice = createSlice({
    name: 'Product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(productGet.pending, (state) => {
            state.loading = true
        }).addCase(productGet.fulfilled, (state, { payload }) => {
            state.loading = false
            state.product = payload[0]
        }).addCase(productGet.rejected, (state) => {
            state.loading = false
        }).addCase(productRecommendeds.pending, (state) => {
            state.recommended.loading = true
        }).addCase(productRecommendeds.fulfilled, (state, { payload }) => {
            state.recommended.loading = false
            state.recommended.list = payload
        }).addCase(productRecommendeds.rejected, (state) => {
            state.recommended.loading = false
        })
    }
})

export default productSlice.reducer
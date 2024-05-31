import { createSlice } from "@reduxjs/toolkit";
import { buildBuilder } from '../../utils/helpers';
import { getCategories, getProducts } from "../actions/productsAction";

const initialState = {
    products: {
        list: [],
        loading: false
    },
    categories: {
        list: [],
        loading: false,
    },
}

const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        buildBuilder(builder, getProducts, 'products')
        buildBuilder(builder, getCategories, 'categories')
    }
})

export default ProductsSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { buildBuilder } from '../../utils/helpers';
import { getBrands, getCategories, getProducts } from "../actions/productsAction";

const initialState = {
    products: {
        list: [],
        loading: false
    },
    categories: {
        list: [],
        loading: false
    },
    brands: {
        list: [],
        loading: false
    },
}

const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: (builder) => {
        buildBuilder(builder, getProducts, 'products')
        buildBuilder(builder, getCategories, 'categories')
        buildBuilder(builder, getBrands, 'brands')
    }
})

export default ProductsSlice.reducer
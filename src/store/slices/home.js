import { createSlice } from "@reduxjs/toolkit";
import { getBannersList, getCardList, getProductRecommendedList, getProductsList, getStockList } from "../actions/homeActions";
import { buildBuilder } from '../../utils/helpers';

const initialState = {
    banners: {
        list: [],
        loading: false
    },
    productsRecommended: {
        list: [],
        loading: false
    },
    products: {
        list: [],
        loading: false
    },
    card: {
        list: [],
        loading: false
    },
    inStock: {
        list: [],
        loading: false
    },
}

const homeSlice = createSlice({
    name: 'Home',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        buildBuilder(builder, getBannersList, 'banners')
        buildBuilder(builder, getProductRecommendedList, 'productsRecommended')
        buildBuilder(builder, getCardList, 'card')
        buildBuilder(builder, getProductsList, 'products')
        buildBuilder(builder, getStockList, 'inStock')
    }
})

export default homeSlice.reducer
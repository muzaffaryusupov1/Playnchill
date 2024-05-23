import Axios from "../../api"
import { bannersList, cardList, productRecommendedList, productsList, stockList } from "../../utils/urls"
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getBannersList = createAsyncThunk('banners/list', async () => {
    let response = await Axios.get(bannersList)
    return response.data
})

export const getProductRecommendedList = createAsyncThunk('products/recommended', async () => {
    let response = await Axios.get(productRecommendedList)
    return response.data
})

export const getCardList = createAsyncThunk('card/list', async () => {
    let response = await Axios.get(cardList)
    return response.data
})

export const getProductsList = createAsyncThunk('products/list', async () => {
    let response = await Axios.get(productsList)
    return response.data
})

export const getStockList = createAsyncThunk('stock/list', async () => {
    let response = await Axios.get(stockList)
    return response.data
})
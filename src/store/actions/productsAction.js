import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../api";
import { brandsList, categoriesList, productsFilter } from "../../utils/urls";


export const getProducts = createAsyncThunk('products/list', async ({ category_id, brand_arr, sortBy }) => {
    let response = await Axios.get(productsFilter(brand_arr), { params: { category_id, sortBy: sortBy === 'asc' ? 'price' : sortBy === 'desc' ? '-price' : null } })
    return response.data
})


export const getCategories = createAsyncThunk('categories/list', async () => {
    let response = await Axios.get(categoriesList)
    return response.data
})


export const getBrands = createAsyncThunk('brands/list', async () => {
    let response = await Axios.get(brandsList)
    return response.data
})
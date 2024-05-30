import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categoriesmodal: false
}
const CategoriesModalSlice = createSlice({
    name: 'categoriesmodal',
    initialState,
    reducers: {
        categoriesModalOpen: (state, {payload}) => {
            state[payload] = true
        },
        categoriesModalClose: (state, {payload}) => {
            state[payload] = false
        },
    }
})

export const {categoriesModalOpen, categoriesModalClose} = CategoriesModalSlice.actions

export default CategoriesModalSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    imgModal: false
}

const ImgModalSlice = createSlice({
    name: 'imgModal',
    initialState,
    reducers: {
        imgModalOpen: (state, {payload}) => {
            state[payload] = true
        },
        imgModalClose: (state, {payload}) => {
            state[payload] = false
        },
    }
})

export const {imgModalOpen, imgModalClose} = ImgModalSlice.actions

export default ImgModalSlice.reducer
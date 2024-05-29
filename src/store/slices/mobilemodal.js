import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobmodal: false
}

const MobileModal = createSlice({
    name: 'mobileModal',
    initialState,
    reducers: {
        mobileModalOpen: (state, {payload}) => {
            state[payload] = true
        },
        mobileModalClose: (state, {payload}) => {
            state[payload] = false
        },
    }
})

export const {mobileModalOpen, mobileModalClose} = MobileModal.actions

export default MobileModal.reducer
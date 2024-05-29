import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    el: JSON.parse(localStorage.getItem('favourite')) || [],
    totalPrice: 0,
}

function setFavorite(arr) {
    localStorage.setItem('favourite', JSON.stringify(arr))
    return arr
}

const favoriteSlice = createSlice({
    name: 'Favorite',
    initialState,
    reducers: {
        addFavorite: (state, { payload }) => {
            const isContain = state.el.some(e => e.id === payload.id)
            const newE = isContain ? state.el.map(e => e.id === payload.id ? { ...e, qty: e.qty + 1 } : e) : [...state.el, { ...payload, qty: 1 }];
            state.el = setFavorite(newE);
        },
        removeFavorite: (state, { payload }) => {
            const newE = state.el.filter(e => e.id !== payload);
            state.el = setFavorite(newE);
        },
        removeAll: (state) => {
            state.el = setFavorite([])
        }
    }
});

export const { addFavorite, removeFavorite, removeAll } = favoriteSlice.actions

export default favoriteSlice.reducer
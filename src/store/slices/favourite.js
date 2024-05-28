import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    el: JSON.parse(localStorage.getItem('cart')) || [],
    totalPrice: 0,
}

function setFavorite(arr) {
    localStorage.setItem('cart', JSON.stringify(arr))
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
        incrementFavorite: (state, { payload }) => {
            const newE = state.el.map(e => e.id === payload ? { ...e, qty: e.qty + 1 } : e);
            state.el = setFavorite(newE);
        },
        decrementFavorite: (state, { payload }) => {
            const newE = state.el.map(e => e.id === payload ? { ...e, qty: e.qty === 1 ? 1 : e.qty - 1 } : e);
            state.el = setFavorite(newE);
        },
        removeAll: (state) => {
            state.el = setFavorite([])
        }
    }
});

export const { addFavorite, removeFavorite, incrementFavorite, decrementFavorite, removeAll } = favoriteSlice.actions

export default favoriteSlice.reducer
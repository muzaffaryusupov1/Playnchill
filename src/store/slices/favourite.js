import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: JSON.parse(localStorage.getItem('cart')) || [],
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
            const isContain = state.items.some(item => item.id === payload.id)
            const newItems = isContain ? state.items.map(item => item.id === payload.id ? { ...item, qty: item.qty + 1 } : item) : [...state.items, { ...payload, qty: 1 }];
            state.items = setFavorite(newItems);
        },
        removeFavorite: (state, { payload }) => {
            const newItems = state.items.filter(item => item.id !== payload);
            state.items = setFavorite(newItems);
        },
        incrementFavorite: (state, { payload }) => {
            const newItems = state.items.map(item => item.id === payload ? { ...item, qty: item.qty + 1 } : item);
            state.items = setFavorite(newItems);
        },
        decrementFavorite: (state, { payload }) => {
            const newItems = state.items.map(item => item.id === payload ? { ...item, qty: item.qty === 1 ? 1 : item.qty - 1 } : item);
            state.items = setFavorite(newItems);
        },
        removeAll: (state) => {
            state.items = setFavorite([])
        }
    }
});

export const { addFavorite, removeFavorite, incrementFavorite, decrementFavorite, removeAll } = favoriteSlice.actions

export default favoriteSlice.reducer
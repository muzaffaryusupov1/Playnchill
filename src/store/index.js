import { configureStore } from "@reduxjs/toolkit";
import home from "./slices/home";
import product from "./slices/product";
import imgmodal from "./slices/imgmodal";
import cart from "./slices/cart";
import favourite from "./slices/favourite";
import products from "./slices/products";
import mobilemodal from "./slices/mobilemodal";

export const store = configureStore({
    reducer: {
        home,
        product,
        imgmodal,
        cart,
        favourite,
        products,
        mobilemodal
    }
})
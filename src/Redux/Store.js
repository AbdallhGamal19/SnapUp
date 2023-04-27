import { configureStore } from "@reduxjs/toolkit";
import { catigoryReduser } from "./CatigorySlice";
import { searchReduser } from "./SearchSlice";
import { cartReduser } from "./CartSlice";

export let store =configureStore({
    reducer:{
        catigoryPage : catigoryReduser,
        searchPage : searchReduser,
        cartPage : cartReduser
    }
})
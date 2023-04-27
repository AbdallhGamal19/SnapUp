import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getDataOfSearch = createAsyncThunk('data/search', async (nameOfProduct)=>{
    let {data}= await axios.get(`https://dummyjson.com/products/search?q=${nameOfProduct}`);  
    return data; 
})
let initialState={ dataOfSearch:[]};
let searchSlice = createSlice ({
    name :'dataOfSearch',
    initialState,
    extraReducers:((builder)=>{
        builder.addCase(getDataOfSearch.fulfilled,(state ,action)=>{
            state.dataOfSearch =action.payload;
        })
    })

})

export let searchReduser = searchSlice.reducer;


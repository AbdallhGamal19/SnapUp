import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
let loader 
export let getDataOfCatigory =createAsyncThunk('data/catigory', async (catigory)=>{
    let {data} = await  axios.get(`https://dummyjson.com/products/category/${catigory}`);
    return data;

})

let initialState = {dataOfCatigory:[],loader:loader};

let catigorySlice = createSlice({
    name :'catigory',
    initialState,
    extraReducers:((builder)=>{
        
        builder.addCase(getDataOfCatigory.fulfilled,(state ,action)=>{
            state.dataOfCatigory = action.payload;
            state.loader=loader;
        })
    })
})

export let catigoryReduser =catigorySlice.reducer;

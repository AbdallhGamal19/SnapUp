

import { createSlice } from "@reduxjs/toolkit";

 let  getDataFromLocalStorge = ()=> {
    let carts = localStorage.getItem('dataOfProducts');
    if(carts){
        return JSON.parse(localStorage.getItem('dataOfProducts'));
    } else {
        return [];
    }
}
 let  getDataFromTotalItems = ()=> {
    let items = localStorage.getItem('totalItems');
    if(items){
        return JSON.parse(localStorage.getItem('totalItems'));
    } else {
        return [];
    }
}
let deleteItemFromLocalStorege = (id)=>{
    let items = getDataFromTotalItems();
    items = items.filter(item => item.id !==id);
    localStorage.setItem('totalItems',JSON.stringify(items));
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('dataOfProducts', JSON.stringify(data));
}

let initialState = {
    carts: getDataFromLocalStorge(),
    items: getDataFromTotalItems(),
    totalPrice:0,
    itemCont : 0,
    totalItems :0,
    conter :0,
};
let cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{

    deleteProduct : (state,action)=>{
        let carts =getDataFromLocalStorge();
        let tempcarts = carts.filter(item => item.id !==action.payload);
        state.carts = tempcarts;
        deleteItemFromLocalStorege(action.payload)
        storeInLocalStorage( state.carts);
    },
    clacTootlePrice : (state)=> {
        let carts =getDataFromLocalStorge();
        let items = getDataFromTotalItems();
        
        state.totalPrice= carts.reduce((cartTotal=0,cart,index)=>{ 
            return cartTotal += (cart?.price * items[index]?.cont) - ((cart.price * items[index]?.cont)*(cart.discountPercentage/100)).toFixed(1)-1;
        },
        state.itemCont = carts.length,
        state.conter=carts.length
        
    )
    
},
    clearProducts : (state)=> {
        state.carts =[];
        localStorage.setItem( 'dataOfProducts',JSON.stringify(state.carts))
        localStorage.setItem( 'totalItems','[]')
    },

    decreaseitemCont:(state ,action)=>{
        let items = getDataFromTotalItems();
            items.map((item,index) =>{
            if(item.id === action.payload){
                if(item.cont>1){
                    item.cont =item.cont-1;
                    items[index]=item;
                    localStorage.setItem('totalItems',JSON.stringify(items))
                    state.itemCont = items;
                }
            }

        })
        
    },
    increaseitemCont:(state ,action)=>{
        let items = getDataFromTotalItems();
            items.map((item,index) =>{
            if(item.id === action.payload){
                
                    item.cont =item.cont+1;
                    items[index]=item;
                    localStorage.setItem('totalItems',JSON.stringify(items))
                    state.itemCont = items;
                
            }

        })
    },
    
}

})

export let cartReduser = cartSlice.reducer;
export let {clacTootlePrice,deleteProduct,clearProducts,decreaseitemCont,increaseitemCont}= cartSlice.actions

import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({

    name:'cartSlice',
    initialState:{
        // these are the state-variable....
        cartQuantity:0,
        cartProducts:[] , 
        // array of object=> {details of product, individual quantity of each}
    },
    // these are the actions
    reducers:{

        addToCart:(state,action)=>{
            // cart to added
            console.log("addToCart call")
            state.cartQuantity += 1
            
        },
        deleteFromCart:(state,action)=>{
            // delete a product from a cart
            console.log("deleteFromCart call")
            state.cartQuantity -= 1
        },

    }
})

export const action = cartSlice.actions;
// here wa are exporting the actions with name 
export default cartSlice;
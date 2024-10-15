
import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:'userslice',
    // mantain all the state
    initialState:{
        user:null,
        loading:true,
        error:false,
    },
    // mantian all the action
    reducers:{
        userLoading:(state)=>{
            state.error=false;
            state.loading= true;
        },
        userError:(state)=>{
            state.error = true;
            state.loading=false;
        },
        userData:(state, action)=>{
            state.loading=false;
            state.error = false;;
            state.user = action.payload;
            // here payload is nothing but data on which weare performing the action
        }
    }
   
})

export default UserSlice;
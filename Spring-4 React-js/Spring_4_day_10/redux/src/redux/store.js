
import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import UserSlice from "./userSlice";
const store = configureStore({
    reducer:{
        counterState:CounterSlice.reducer,
        userState:UserSlice.reducer, // userSlice 
    }
})
// here ​​reducer is a identifier which  is used to identify the state varaible which is availbe in slice.
// here CounterSlice.reducer so this reducer is used to get the initall state
// and reducer is used by component to access the counterState
export default store;
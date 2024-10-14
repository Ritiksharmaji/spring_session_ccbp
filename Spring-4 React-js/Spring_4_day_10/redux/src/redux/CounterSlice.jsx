// to create a slice we know that we required two key
// 1) is name of slice
// 2) is initial state

import{createSlice} from '@reduxjs/toolkit'
const CounterSlice = createSlice({
    name:'counterslice',
    initialState:{
        count:5,
    },
    reducers:{
        increment:(state)=>{
            state.count += 1;
        },
        decrement:(state)=>{
            state.count -= 1;
        }
    }

})

export default CounterSlice;
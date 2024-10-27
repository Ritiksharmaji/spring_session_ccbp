import{configureStore} from '@reduxjs/toolkit'
import cartSlice from './slices/cartSlice'

const store = configureStore({
    reducer:{
        cartReducer:cartSlice.reducer
        // here cartSlice.reducer is used to access the all the state-varable , not actions
        //this reducer will get all the state-varaible from the slice and convet them in form of object
        // which will store in cartReducer
    }
})

export default store;
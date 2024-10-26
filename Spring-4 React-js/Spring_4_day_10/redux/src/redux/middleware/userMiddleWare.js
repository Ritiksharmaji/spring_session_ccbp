
import UserSlice from "../userSlice";


const action = UserSlice.actions;

export const fetchUserMiddleWare = async(dispatch)=>{

    try{
        // setLoading(true)
        dispatch(action.userLoading())
        const resp = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const userData = await resp.json();
        console.log(userData)
        if(userData){
            // setUser(userData)
            // setLoading(false)
            dispatch(action.userData(userData)); // Dispatch user data
        }
    }catch(err){
        // setError(true)
        // setLoading(false)
        dispatch(action.userError())
    }
}
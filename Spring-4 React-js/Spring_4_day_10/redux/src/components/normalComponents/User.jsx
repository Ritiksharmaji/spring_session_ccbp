import React from 'react'
import { useState,useEffect } from 'react'
function User() {
    const [user,setUser] = useState(null)
    const [ error, setError] = useState(false)
    const [loading, setLoading]= useState(true)
   const api = `https://jsonplaceholder.typicode.com/users/1`
    const heading = <h2>User Example</h2>

    useEffect(function (){
        (async function () {
            try{
                setLoading(true)
                const resp = await fetch(api)
                const userData = await resp.json();
                console.log(userData)
                if(userData){
                    setUser(userData)
                    setLoading(false)
                }
            }catch(err){
                setError(true)
                setLoading(false)
            }
            
        }) ()
    }, []);


    if(loading){
        return(
            <>
            {heading}
            <h3>.....Loading</h3>
            </>
        )
    }if(error){
        return(
            <>
            <h3>Error  happend</h3>
            </>
        )
    }
  return (
    <>
    {heading}
    <h4>Name:{user.name}</h4>
    <h4>Phone: {user.phone} </h4>
    </>
  )
}

export default User
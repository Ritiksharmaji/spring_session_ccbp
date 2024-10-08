import React from 'react';
import { useState , useEffect} from 'react'

const GetData = () => {

const [data, setData] = useState(null) // data = null
  useEffect(
   function fn(){
    async function fetchData() {  
    {
      console.log("useEffect is runing..")
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json()
      console.log(data)
      setData(data)
    }
  }
// calling the above function
  fetchData()
   },[]
    // here [] is a dependecy array
  )
  console.log("render:")

  return (
    <>
     {data === null ? 
     <h1>Placeholder is loading the data</h1>:
      <>
      <h2>Data loaded:</h2>
      <h3>id:{data.id}</h3>
      <h6>title: {data.title}</h6>
      </>

     }
    </>
  )
    
}

export default GetData;

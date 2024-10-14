import React from 'react'
import { useState } from 'react'
function Counter() {
    const[count, setCount] = useState(0);

    const increment = ()=>{
        if(count === 10){
            return
        }else{
            setCount(count + 1)
        }
       
    }
    const decrement = ()=>{
        if(count === 0){
            return
        }else{
            setCount(count - 1)
        }
       
    }
  return (
    <div>
        <p>Counter</p>
        <div className='counter'>
            <button onClick={increment}>+</button>
            <div className='cvalue'>{count}</div>
            <button onClick={decrement}> - </button>
        </div>
    </div>
  )
}


export default Counter
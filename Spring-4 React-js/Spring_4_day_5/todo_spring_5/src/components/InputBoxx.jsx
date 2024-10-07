
import React from 'react';
import { useState } from 'react'
function InputBox(props){

    const [value, setValue] = useState("")
  
    const handleInput = (event)=>{
      const data = event.target.value;
      console.log("Data:",data)
      setValue(event.target.value);
    }
  
    const addTask = ()=>{
      props.addTask(value)
      // here when there is a click happens we need to send the data
      // from input element(child) to Todo element(parent) using a function.
      setValue("")
    }
  
    return (
      <div>
         <div className='inputBox'>
          <input type='text' value={value} onChange={handleInput}/>
          <button onClick={addTask}>ADD Task</button>
        </div>
      </div>
    );
  }

  export default InputBox;
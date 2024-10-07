import React from 'react';
import { useState } from 'react'
import InputBox from './InputBoxx';
import List from './List';

function Todo() {
    
  const[taskArr,setTaskArr]= useState([]) // taskArry
  const addchildTask = (value)=>{
    const newTask = value;
    const newTaksArr = [...taskArr, newTask];
    // we never manipulate / change the state varialbe on our selph.
    setTaskArr(newTaksArr)
    setValue("")
  }

  return (
    <>
     {/* <inputBox addTask={addTask} ></inputBox> */}
   <InputBox addTask={addchildTask}/>
     <List taskArr ={taskArr}></List>
      
    </>
  )
}

export default Todo;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setValue] = useState("")
  const[taskArr,setTaskArr]= useState([]) // taskArry

  const handleInput = (event)=>{
    const data = event.target.value;
    console.log("Data:",data)
    setValue(event.target.value);
  }

  const addTask = ()=>{
    const newTaksArr = [...taskArr, value];
    // we never manipulate / change the state varialbe on our selph.
    setTaskArr(newTaksArr)
    setValue("")
  }

  return (
    <>
      <div className='inputBox'>
        <input type='text' value={value} onChange={handleInput}/>
        <button onClick={addTask}>ADD Task</button>
      </div>

      <div className="list">
        <ul>
          {/* <li>TOdo1</li>
          <li>TOdo2</li>
          <li>TOdo3</li>
          <li>TOdo4</li> */}
          {taskArr.map((item)=>{
            return <li>{item}</li>
          })}
        </ul>
        
      </div>
    </>
  )
}

export default App

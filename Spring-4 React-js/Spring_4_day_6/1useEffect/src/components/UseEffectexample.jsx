import React, { useEffect, useState } from 'react';

const UseEffectexample = () => {
    const[value,setValue]= useState("");
    const[taskList, setTaskList] = useState([]);

    const setTask = function(){
        //
        let newTaskList = [...taskList];
        newTaskList.push({
            id:Date.now(),
            task:value
        })

        setTaskList(newTaskList)
        setValue("")
    }
    const removeTask = function(id){
        let restOftasks = taskList.filter(function(taskObject){
            return taskObject.id != id;
        })
        setTaskList(restOftasks);
    }

    // function firstCb(){
    //     console.log("First useEffect")
    // }
    // 1st case of useEffect where we see what happends when we have empty  dependecy array
    // useEffect(firstCb,[]);

//---------------------------------2nd usecase of useEffect(secondCb)--------------------------
    // this is second use-case of useEffect where we are not providing any dependecy array
    // function secondCb(){
    //     console.log("Second useEffect")
    // }
    // useEffect(secondCb);


// //---------------------------------3nd usecase of useEffect(thirdCb,stateVariable)--------------------------
//     // this is third use-case of useEffect where we have callback function and stateVariable
//     function thirdCb(){
//         console.log("third useEffect")
//     }
//     // useEffect(thirdCb,[taskList]);
//     useEffect(thirdCb,[value]);

//---------------------------------4nd usecase of useEffect(firthCb,stateVariable) with cleanUp function inside the callback function--------------------------
    // this is forth use-case of useEffect where we have callback function and inside it cleanUp function and stateVariable
    function firthCb(){
        console.log("Forth useEffect")
        return function(){
            console.log("CleanUp for useEffect or we can use that aysc fucntion")
        }
    }
    useEffect(firthCb,[taskList]);

    console.log("Rendered..")
    return (
        <div>
            {/* input  */}
            <input type='text' placeholder='input task' 
                    value={value}
            onChange={(e)=>{setValue(e.target.value)}}></input>
            <button onClick={setTask}>Add Task</button>

            {/* list */}
            <div className="list">
                <ul>
                    {taskList.map((item) => (
                        <li key={item.id}>
                            {item.task}
                            <button onClick={() =>
                            removeTask(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UseEffectexample;

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CounterSlice from '../../redux/CounterSlice'

const actions = CounterSlice.actions;

function CounterRedux() {
    // this is used to get the inital state 
    const count = useSelector((store)=>{return store.counterState.count})
    const dispatch = useDispatch();

    const increment = ()=>{
        dispatch(actions.increment())
    }
    const decrement = ()=>{ 
        dispatch(actions.decrement())  
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
export default CounterRedux
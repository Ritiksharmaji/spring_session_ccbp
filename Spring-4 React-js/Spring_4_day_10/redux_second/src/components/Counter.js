import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/counterSlice';

function Counter() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
// actionTypes.js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// actions.js
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
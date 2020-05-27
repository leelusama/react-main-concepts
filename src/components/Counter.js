import React, { useReducer } from 'react';

function initState(initialCount) {
  return { count: initialCount };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initState(action.payload);
    default:
      throw new Error();
  }
}

function Counter(props) {
  const { initialCount } = props;
  const [state, dispatch] = useReducer(reducer, initialCount, initState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}

export default Counter;

import React, { useReducer } from "react";

const intialState = 0;
const reducer = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return intialState;
    default:
      return currentState;
  }
};
function ReducerCounterThree() {
  const [count, dispatch] = useReducer(reducer, intialState);
  const [countTwo, dispatchTwo] = useReducer(reducer,intialState);
  return (
    <div>
      <div>Count-{count} times</div>
      <button onClick={() => dispatch("increment")}>Increment Count</button>
      <button onClick={() => dispatch("decrement")}>Decrement Count</button>
      <button onClick={() => dispatch("reset")}>Reset Count</button>
      <div>
      <div>Count-{countTwo} times</div>
      <button onClick={() => dispatchTwo("increment")}>Increment Count</button>
      <button onClick={() => dispatchTwo("decrement")}>Decrement Count</button>
      <button onClick={() => dispatchTwo("reset")}>Reset Count</button>
      </div>
    </div>
  );
}
export default ReducerCounterThree;

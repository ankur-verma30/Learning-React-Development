import React, { useReducer } from "react";

const intialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { ...currentState,firstCounter: currentState.firstCounter + action.value };
    case "decrement":
      return { ...currentState,firstCounter: currentState.firstCounter - action.value };
    case "increment by 2":
      return { ...currentState,secondCounter: currentState.secondCounter + action.value };
    case "decrement by 2":
      return { ...currentState,secondCounter: currentState.secondCounter - action.value };
    case "reset":
      return intialState;
    default:
      return currentState;
  }
};
function ReducerCounterTwo() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <div>Count-{count.firstCounter} times</div>
      <div> Second Count -{count.secondCounter}</div>

      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment Count
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement Count
      </button>
      <div>
      <button onClick={() => dispatch({ type: "increment by 2", value: 2 })}>
        Increment Count by 2
      </button>
      <button onClick={() => dispatch({ type: "decrement by 2", value: 2 })}>
        Decrement Count by 2
      </button>
      </div>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment Count By 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement Count By 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset Count</button>
    </div>
  );
}
export default ReducerCounterTwo;

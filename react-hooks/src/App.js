import "./App.css";
import React from "react";
import { useReducer } from "react";

import ContextC from "./Components/ContextC";
// import ClassCounter from './Components/ClassCounter';
// import Hookcounter from "./Components/Hookcounter";
// import HookCounterTwo from "./Components/HookCounterTwo";
// import HookCounterThree from "./Components/HookCounterThree";
// import HookCounterFour from "./Components/HookCounterFour";
// import HookUseEffectCounterOne from "./Components/HookUseEffectCounterOne";
// import HookMouse from "./Components/HookMouse";
// import ButtonContainer from "./Components/ButtonContainer";
// import DataFetching from "./Components/DataFetching";
import IntervalHookCounter from "./Components/IntervalHookCounter";
import SinglePostFetch from "./Components/SinglePostFetch";
// import ReducerCounterOne from "./Components/ReducerCounterOne";
// import ReducerCounterTwo from "./Components/ReducerCounterTwo";
// import ReducerCounterThree from "./Components/ReducerCounterThree";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";
import ComponentC from "./Components/ComponentC";
// import UserContext from "../../context-api/src/Components/UserContext";

export const userContext = React.createContext();
export const UserChannel = React.createContext();

export const CountContext = React.createContext();

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

function App() {
  const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div className="App">
     
      {/* <ClassCounter/> */}
      {/* <Hookcounter /> */}
      {/* <HookCounterTwo/> */}
      {/* <HookCounterThree/> */}
      {/* <HookCounterFour/> */}
      {/* <HookUseEffectCounterOne/> */}
      {/* <HookMouse/> */}
      {/* <ButtonContainer/> */}
      <IntervalHookCounter />
      {/* <DataFetching/> */}
      <SinglePostFetch />

      {/* useContext hooks usage */}
      <userContext.Provider value={"Ankur"}>
        <UserChannel.Provider value={"Ankur Verma coding channel"}>
          <ContextC />
        </UserChannel.Provider>
      </userContext.Provider>
      {/* <ReducerCounterOne /> */}
      {/* <ReducerCounterTwo/> */}
      {/* <ReducerCounterThree /> */}
      <CountContext.Provider value={{countState:count,CountDispatch:dispatch}}>
      Count-{count}
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
      </CountContext.Provider>
    </div>
  );
}

export default App;

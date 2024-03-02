import "./App.css";
import React from "react";

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
// import UserContext from "../../context-api/src/Components/UserContext";

export const userContext = React.createContext();
export const UserChannel = React.createContext();
function App() {
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
    </div>
  );
}

export default App;

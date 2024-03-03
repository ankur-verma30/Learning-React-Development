import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      {" "}
      ComponentA Count-{countContext.countState}
      <button onClick={() => countContext.CountDispatch("increment")}>
        Increment Count
      </button>
      <button onClick={() => countContext.CountDispatch("decrement")}>
        Decrement Count
      </button>
      <button onClick={() => countContext.CountDispatch("reset")}>
        Reset Count
      </button>
    </div>
  );
}
export default ComponentA;

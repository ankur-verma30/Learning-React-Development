import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentF Count-{countContext.countState}
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
export default ComponentF;

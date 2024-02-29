import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      Count : {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        IncrementCount
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        DecrementCount
      </button>
      <button onClick={IncrementFive}>IncrementCountByFive</button>
    </div>
  );
}

export default HookCounterTwo;

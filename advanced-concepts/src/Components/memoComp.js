import React from "react";

function memoComp({ name }) {
  console.log("Rendering the memo component");
  return <div>Memo Component {name}</div>;
}

export default React.memo(memoComp);

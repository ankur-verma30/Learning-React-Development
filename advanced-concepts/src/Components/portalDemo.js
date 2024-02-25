import React from "react";
import ReactDOM from "react-dom";

function portalDemo() {
  return ReactDOM.createPortal(
    <h2>Portal Demo</h2>,
    document.getElementById("portal-root") //it takes two arguments JSX and place where to mount the node
  );
}

export default portalDemo;

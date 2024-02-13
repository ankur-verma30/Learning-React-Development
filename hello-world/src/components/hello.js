import React from "react";

const Hello = () => {
  //    return(
  //     <div className='DummyClass' >
  //         <h1>Hello</h1> //this is the use of the JSX
  //     </div>
  //    );
  //without the use of the JSX component
  return React.createElement(
    "div",
    { id: "message", className: "dummyclass1" },
    React.createElement(
      "h3",
      { id: "heading", className: "summyclass2" },
      "Hello this is without JSX"
    )
  );
};

export default Hello;

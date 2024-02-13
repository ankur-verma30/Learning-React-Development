import React from "react";

const Greet = (props) => {
  console.log(props);
  return (
    //create as the javascript object
    <div>
      {props.children}
      <h4>
        {props.name} {props.year}
      </h4>
    </div>
  );
};

//named export
// export const Greet=()=><h1>Hello</h1>

export default Greet;

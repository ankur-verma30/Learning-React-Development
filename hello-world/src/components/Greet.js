import React from "react";


//this is the functional componenet
const Greet = (props) => {
  console.log(props);
  const {name,year,children}=props;
  return (
    //create as the javascript object
    <div>
      {children}
      <h4>
        {name} {year}
      </h4>
    </div>
  );
};

//named export
// export const Greet=()=><h1>Hello</h1>

export default Greet;

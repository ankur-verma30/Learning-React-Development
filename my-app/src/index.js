import React from "react";
import ReactDOM from "react-dom/client";

//the first component
// function Greeting() {
//   return <h2>My first Component</h2>;
// }

// const Greeting=()=>{
//     return React.createElement(
//         'div',
//         {},
//         React.createElement('h2', {},"Hello world!")
//     );
// }


//can nest the components

function Greeting(){
    return <div>
        <Person/>
        <Message/>
    </div>
}


const Person=()=><h2>This is the name of the person</h2>

const Message=()=><p>Hello to the user of the react</p>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);


/*function Greeting(){
    return {
        <React.fragment>//we can also return fragment if we do not want to return the tag in particular
        <div className="">Hello world!</div>//adding the class like in the js will not work here we have to add the className but works as the class
        <h2>My first Component</h2>
        </React.fragment>
    }
} */
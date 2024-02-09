import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from './reportWebVitals';

const book = [
  { author: "John", name: "Delta", age: 22, id: 1 },
  { author: "Ram", name: "Delta1", age: 23, id: 2 },
];

const BookList = () => {
  return (
    <section className="booklist">
      <EventExamples/>
      {book.map((bookies) => {
        return <Book {...bookies} key={bookies.id} />;
      })}
    </section>
  );
};

 
const EventExamples=()=>{
  const handleformInput=(e)=>{
    console.log("handling the form  input event...");
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
  } 
  const HandleButtonClick =()=>{
    alert("handling the button click event...");
  }
  return( <section>
    <form>
      <h2>Typical Form</h2>
      <input type='text' name='examples' onChange={handleformInput}style={{margin:'1rem 0'}}/>
    </form>
    <button onClick={HandleButtonClick}>Click Me</button>
  </section>
  );
}


const Book = (props) => {
  const { img, author, title } = props;
  console.log(props);
  return (
    <article>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>);

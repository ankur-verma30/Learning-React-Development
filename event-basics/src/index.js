import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import reportWebVitals from './reportWebVitals';

const books = [
  { author: "John", title: "Delta0", id: 1 },
  { author: "Ram", title: "Delta1",  id: 2 },
];

const BookList = () => {
  const someValue="ShakeandBake";
  const displayValue =()=>{
    console.log(someValue);
  }
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id}  display={displayValue}/>;
      })}
    </section>
  );
};

 

const Book = (props) => {
  const { img, author, title, display} = props;
  // console.log(props);
  return (
    <article>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <button onClick={display}>Click Me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList/>);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
/*
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
    </section>
  );
}
*/
/*using props in the booklist component
function BookList(){
  return (
    <section className="booklist">
    <Book job='Full Stack Web Developer'/>
    <Book title='randome title' number={33}/>
    </section>
  );
};
const Book = (Props) => {
  console.log(Props)
  return (
    <article className='book'>
      <img src={img} alt={title}/>
      <h2>{title}</h2>
      <h4>{author}</h4>
      {console.log(Props)};
    </article>
  );
};
*/

/*
Adding the  Javascript and css to the JSX
const Images = () => <img src={imagefile}alt='this is web data'/>
// the inline styles are added in the JSX element 
const Title = () => {
  return <h2 style={{color:'#daf',border:'1px solid red',marginTop:'1rem'}}> Book Title </h2>;
};

const AuthorName='Albert Einstein';
const Author = () => {
  return <h4>{AuthorName}</h4>;//the use of the javascript when the curley brackets are used it return some value so whatever we write inside the brackets must return a value
};


*/
const book = [
  { author: "John", name: "Delta", age: 22, id: 1 },
  { author: "Ram", name: "Delta1", age: 23, id: 2 },
];

const BookList = () => {
  return (
    <section className="booklist">
      {book.map((bookies) => {
        const { img, author, title } = bookies;
        return <Book img={img} author={author} title={title} />;
      })}
    </section>
  );
};

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
root.render(<BookList />);

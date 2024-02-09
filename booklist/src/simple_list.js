//How to use array and object in the JSX and use of key prop
const book = [
  { author: "John", name: "Delta", age: 22, id: 1 },
  { author: "Ram", name: "Delta1", age: 23, id: 2 },
];

/* For understanding the map concept
const names=['Ankur','Suraj','Deepak','Harsh']

const newNames=names.map((name) =>{
  console.log(name);
  return <h1>{name}</h1>;
});
*/


const BookList = () => {
  return (
    <section className="booklist">
      {book.map((bookies) => {
        const { img, author, title,id} = bookies;
        return <Book img={img} author={author} title={title}  key={id}/>;
      })}
    </section>
  );
};
//can also add index in the map like  book.map((bookies,index) and then key={index} but it will not work if the list is alterable if list changes in the process then it will create bugs hence, not advised 

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
<BookList/>
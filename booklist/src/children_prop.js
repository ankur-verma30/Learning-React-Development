
const firstBook={
    author:'James Clear',
    title: 'Atomic Habits',
    img: 'this is image',
  };
  
  //using the children prop
  const BookList=()=>{
    return(
    <section className="booklist">
    <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} >
    <p> lorem ipsum dolor sit amet non pro id elit non pro</p>
    <button> Click Me</button>
    </Book>
    <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
    </section>
    );
  };
  
  const Book=(props)=>{
    const {img,author,title,children}=props;
    return (
      <article className="book">
        <img src={img} alt={author} /> 
        <h2>{title}</h2>
        <h4>{author}</h4>
        {children}
      </article>
    );
  };
  
<BookList/>

const firstBook={
    author:'James Clear',
    title: 'Atomic Habits',
    img: 'this is image',
  };
  
  const BookList=()=>{
    return(
    <section className="booklist">
    <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
    <Book author={firstBook.author} title={firstBook.title} img={firstBook.img} />
    </section>
    );
  };
  
  /*
  doing always props.propName is tedious task instead use Javascript Destructuring
        
  const Book=(props)=>{
    return (
      <article className="book">
        <img src={props.img} alt={props.author} /> 
        <h4>{props.author}</h4>
        <h2>{props.title}</h2>
      </article>
    );
  }
  */
  
  //Destructuring the props
  const Book=(props)=>{
    const {img,author,title}=props;
    return (
      <article className="book">
        <img src={img} alt={author} /> 
        <h2>{title}</h2>
        <h4>{author}</h4>
      </article>
    );
  }
<BookList/>  
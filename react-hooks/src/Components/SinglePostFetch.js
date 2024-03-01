import React, { useEffect, useState } from "react";
import axios from "axios";

function SinglePostFetch() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idAfterButtonClick, setIdAfterButtonClick] = useState(1);

  const handleButtonClick = () => {
    setIdAfterButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idAfterButtonClick}`)
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idAfterButtonClick]);
  return (
    <div>
      <div>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button type="fetch" onClick={handleButtonClick}>
          Fetch Post
        </button>
        <div>{post.title}</div>
      </div>
    </div>
  );
}
export default SinglePostFetch;

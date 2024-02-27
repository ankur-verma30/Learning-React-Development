import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage:'',
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/post1")//invalid url
      .then((response) => {
        console.log(response);
        this.setState({
          posts: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({errorMessage:'This is not a valid a valid url'});
      });
  }
  render() {
    const { posts,errorMessage} = this.state;
    return (
      <div>
        {" "}
        List of posts<br/>
        {errorMessage}
        {posts.length
          ? posts.map((post) => <div key={post.id}>{post.title}</div>)
          : null}
          
      </div>
    );
  }
}

export default PostList;

import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return <div>{this.props.render(true)}</div>;
  }
}

export default User;

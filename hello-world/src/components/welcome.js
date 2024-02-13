import React, { Component } from "react";

class welcome extends Component {
  render() {
    // this.props.name='deepak';//this shows it is only read only property
    return (
      <div>
        <h3>
          Welcome {this.props.name} a.k.a {this.props.heroname}
        </h3>
      </div>
    );
  }
}

export default welcome;

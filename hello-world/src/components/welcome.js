import React, { Component } from "react";

class welcome extends Component {
  render() {
    const {name,heroname}=this.props
    // this.props.name='deepak';//this shows it is only read only property
    return (
      <div>
        <h3>
          Welcome {name} a.k.a {heroname}
        </h3>
      </div>
    );
  }
}

export default welcome;

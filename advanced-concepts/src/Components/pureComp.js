import React, { PureComponent } from "react";

class pureComp extends PureComponent {
  render() {
    console.log("This is pure component");
    return <div>Pure Component {this.props.name}</div>;
  }
}

export default pureComp;

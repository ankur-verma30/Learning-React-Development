import React, { Component } from "react";
// import RegularComp from './RegularComp';
// import PureComp from './pureComp';
import MemoComp from "./memoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ankur",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Ankur" });
    }, 2000);
  }

  render() {
    console.log("------------this is parent component-----------");
    return (
      <div>
        Parent Component
        {/* <RegularComp name={this.state.name}/> */}
        {/* <PureComp name={this.state.name}/> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;

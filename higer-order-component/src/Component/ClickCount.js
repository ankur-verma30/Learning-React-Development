import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCount extends Component {
  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>
          {name} Button press {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCount, 3);

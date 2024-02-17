import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  IncrementCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }

  DecrementCount() {
    this.setState(
      {
        count: this.state.count - 1,
      },
      () => console.log("Callback value", this.state.count)
    );
    console.log(this.state.count); //this exectutes before the inner log value in the console as the set state is callback method
  }
  IncrementCountByFive() {
    this.IncrementCount();
    this.IncrementCount();
    this.IncrementCount();
    this.IncrementCount();
    this.IncrementCount();
  }
  render() {
    return (
      <div>
        <h2>Count-{this.state.count}</h2>
        <button onClick={() => this.IncrementCount()}>Increment</button>
        <button onClick={() => this.DecrementCount()}>Decrement</button>
        <button onClick={() => this.IncrementCountByFive()}>
          IncrementByFive
        </button>
      </div>
    );
  }
}

export default Counter;

import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello Ankur",
    };
    //method 3 of using event handlers
    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "Hello Ankur from React!",
  //     });
  //     console.log(this);
  //   }

  //Method 4
  clickHandler = () => {
    this.setState({
      message: "Hello Ankur from React!",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Event Bind Click Button</button> method 1 for using setstate in event handling */}
        {/* Method 2 of using event handler  <button onClick={() => this.clickHandler()}>
          Event Bind Click Button
        </button> */}
        <button onClick={this.clickHandler}>Event Bind Click Button</button>
      </div>
    );
  }
}

export default EventBind;

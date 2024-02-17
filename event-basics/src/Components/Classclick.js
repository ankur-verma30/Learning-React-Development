import React, { Component } from 'react'

class Classclick extends Component {
     ClickButton() {
        console.log('Button is clicked');
    }
  render() {
    return (
      <div>
        <button onClick={this.ClickButton}>Click Me using ClassComponent</button>
      </div>
    )
  }
}

export default Classclick

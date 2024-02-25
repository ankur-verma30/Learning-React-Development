import React, { Component } from 'react'
import withCounter from './withCounter'



 class hoverCounter extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>heading hovered counter {count} times</h2>
      </div>
    )
  }
}

export default withCounter(hoverCounter,20)

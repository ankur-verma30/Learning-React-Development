import React, { Component } from 'react'

class lifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Ankur",
      }
      console.log('lifecycleB constructor');
    }

    static getDerivedStateFromProps(props) {
        console.log('lifecycleB getDerivedStateFromProps ' )
        return null
    }
    
    componentDidMount(){
        console.log('lifecycleB componentDidMount');
    }
  render() {
    console.log('lifecycleB render')
    return (
      <div>
        LifecycleB
      </div>
    )
  }
}

export default lifecycleB

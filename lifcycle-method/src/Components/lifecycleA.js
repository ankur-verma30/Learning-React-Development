import React, { Component } from 'react'
import LifecycleB from './lifecycleB';

class lifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Ankur",
      }
      console.log('LifycycleA constructor');
    }

    static getDerivedStateFromProps(props) {
        console.log('LifycycleA getDerivedStateFromProps ' )
        return null
    }
    
    componentDidMount(){
        console.log('LifycycleA componentDidMount');
    }
  render() {
    console.log('LifycycleA render')
    return (
      <div>
        LifycycleA
      <LifecycleB/>
      </div>
    )
  }
}

export default lifecycleA

import React, { Component } from 'react'
import LifecycleB from './lifecycleB';

class lifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Ankur",
      }
      console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props) {
        console.log('LifecycleA getDerivedStateFromProps ' )
        return null
    }
    
    componentDidMount(){
        console.log('LifecycleA componentDidMount');
    }

    shouldComponentUpdate(){
      console.log('LifecycleA shouldComponentUpdate');
      return true;
    }

    getSnapshotBeforeUpdate(){
      console.log('LifecycleA getSnapshotBeforeUpdate');
      return null
    }

    componentDidUpdate(){
      console.log('LifecycleA componentDidUpdate');
    }

    changeState=()=>{
      this.setState({
        name:'Codevolution'
      })
    }
  render() {
    console.log('LifecycleA render')
    return (
      <div>
        LifecycleA
        <br/>
      <button onClick={this.changeState}>Change State</button>
      <LifecycleB/>
      </div>
    )
  }
}

export default lifecycleA

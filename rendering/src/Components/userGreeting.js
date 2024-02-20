import React, { Component } from 'react'

 class userGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin: true,
      }
    }
    
  render() {

    /*
    Short Circuit Operator
     return this.state.isLoggedin && <div> Welcome Ankur</div>
     */
    /*
    this is element variables method
    let message
    if(this.state.isLoggedin) {
        message=<div>Welcome Ankur</div>
    }
    else{
        message=<div>Welcome Guest</div>
    }
    */
    /*
    If else form of rendering
    if(this.state.isLoggedin){
        return <div>Welcome Ankur</div>
    }
    else{
        return <div>Welcome Guests</div>
    }
    */
    // return (
    //   <div>
    //     Welcome 
    //     <div>Welcome Guest</div>
    //   </div>
    // )
    return(
       this.state.isLoggedin?<div>Welcome Ankur</div>:
       <div>Welcome Guest</div>
    )
  }
}

export default userGreeting

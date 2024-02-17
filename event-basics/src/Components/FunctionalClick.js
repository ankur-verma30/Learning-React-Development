import React from 'react'

function FunctionalClick() {
    function clickButton(){
        console.log('clickButton');
    }
  return (
    <div>
      <button onClick={clickButton }>Click</button>
    </div>
  )
}

export default FunctionalClick

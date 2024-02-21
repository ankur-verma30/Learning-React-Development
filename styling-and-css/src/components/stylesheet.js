import React from 'react'
import './myStyles.css' 

function stylesheet(props) {
    let primaryClass=props.primary ? 'primary' :''
  return (
    <div>
        <h2 className={`${primaryClass} font-xl`}>stylesheet</h2>
    </div>
  )
}

export default stylesheet

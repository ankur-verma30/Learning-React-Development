import React from 'react'

const heading={
    fontSize: '120px',
    color:'blue',
    backgroundColor:'pink',
    border:'1px solid black'
}

function inline() {
  return (
    <div>
      <h1 style={heading}>This is heading </h1>
    </div>
  )
}

export default inline

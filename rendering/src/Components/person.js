import React from 'react'


function person({person}) {
  return (
    <div>
      <h1>{person.name} and his age is {person.age} and skills are {person.skill}</h1>
    </div>
  )
}

export default person

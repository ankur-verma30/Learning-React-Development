import React from 'react'
import Person from './person'

function NameList() {
    const persons=[
      {
        id:1,
        name:'Ankur',
        age:22,
        skill:'web developer',
      },
      {
        id:2,
        name:'Deepak',
        age:22,
        skill:'Coder',

      },
      {
        id:3,
        name:'Suraj',
        age:22,
        skill:'Footballer',
      },
    ]
  
  const personList=persons.map(person => <Person key={person.id} person={person}/>)
  return <div>{personList}</div>
}

export default NameList

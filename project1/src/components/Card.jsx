import React from 'react'

function Card(props) {
    console.log("props",props)
  return (
   <>
  <h1>My name is {props.obj.name}</h1>
  <h2>My age is {props.obj.age}</h2>
    </>
  )
}

export default Card

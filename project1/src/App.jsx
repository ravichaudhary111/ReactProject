import React, { useState } from 'react'

import './App.css'
import Card from './components/Card'


function App() {
  let obj1 = {
    name: "ravi",
    age: 25
  }
  let obj2 = {
    name: "kamal",
    age: 24
  }
  return (
    <>
      <Card obj={obj1} />
      <Card obj={obj2} />
    </>
  )
}

export default App

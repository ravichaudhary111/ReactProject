import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);

  const incressValue = () => {
    const newCount = counter < 20 ? counter + 1 : 20
    setCounter(newCount)
    setCounter(newCount)
    //it didnot incress the value again due to use sate end value in bunch, but using callback we incress the value
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)

  }
  const decressValue = () => {
    const newCount = counter > 0 ? counter - 1 : 0
    setCounter(newCount)
  }

  return (
    <>
      <h2>Counter Value:{counter}</h2>
      <button onClick={incressValue} >Incress Counter</button>
      <br></br><br></br>
      <button onClick={decressValue}>Decress Counter</button>
    </>
  )
}

export default App




import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  const changeColor = (newColor) => {
    setColor(newColor);
  }

  return (
    <>
      <div className='w-full h-screen' style={{ backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ backgroundColor: 'gray', width: '40%', height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <button
            onClick={() => changeColor('blue')}
            style={{ backgroundColor: 'blue', color: 'black', padding: 10, margin: 10 }}
          >
            Blue
          </button>
          
          <button
            onClick={() => changeColor('green')}
            style={{ backgroundColor: 'green', color: 'black', padding: 10, margin: 10 }}
          >
            Green
          </button>

          <button
            onClick={() => changeColor('yellow')}
            style={{ backgroundColor: 'yellow', color: 'black', padding: 10, margin: 10 }}
          >
            Yellow
          </button>

          <button
            onClick={() => changeColor('purple')}
            style={{ backgroundColor: 'purple', color: 'black', padding: 10, margin: 10 }}
          >
            Purple
          </button>

          <button
            onClick={() => changeColor('pink')}
            style={{ backgroundColor: 'pink', color: 'black', padding: 10, margin: 10 }}
          >
            Pink
          </button>
        </div>
      </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

const buttonView = [
  {
    label: 'Increment',
    key: 'inc'
  },
  {
    label: 'Decrement',
    key: 'dec'
  },
  {
    label: 'Reset',
    key: 'reset'
  }
]

function App() {
  const [count, setCount] = useState(0)

  const updateCounter = (option) => {
    setCount((prevState) => {
      switch (option) {
        case 'inc':
          return prevState + 1
        case 'dec':
          if (prevState === 0) return prevState
          return prevState - 1
        case 'reset':
          return 0
        default:
          return prevState
      }
    })
  }

  const handleButtonClick = (option) => () => updateCounter(option)

  return (
    <>
      <div>{count}</div>
      {buttonView.map((bv) => (
        <button key={bv.key} onClick={handleButtonClick(bv.key)}>
          {bv.label}
        </button>
      ))}
    </>
  )
}

export default App

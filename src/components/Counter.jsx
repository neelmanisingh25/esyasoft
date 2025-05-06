import { useState } from 'react'
import { counterActions } from '../constants/counterActions'

const Counter = () => {
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
    <div>
      <div>{count}</div>
      {counterActions.map((action) => (
        <button key={action.key} onClick={handleButtonClick(action.key)}>
          {action.label}
        </button>
      ))}
    </div>
  )
}

export default Counter

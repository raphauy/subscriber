import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center p-10'>
      <Button onClick={() => setCount((count) => count + 1)}>Increment count</Button>
      <p>count is: {count}</p>
    </div>
  )
}

export default App

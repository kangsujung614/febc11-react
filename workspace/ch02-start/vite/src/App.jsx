import { useState } from 'react'
import Title from './components/Title'
import Todo from './pages/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Todo/>
  )
}

export default App
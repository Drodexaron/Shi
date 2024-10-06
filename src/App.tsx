import { useState } from 'react'
import Logo from './assets/love.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={Logo} className="logo" alt="Love Symbol" />
        
      </div>
    </>
  )
}

export default App

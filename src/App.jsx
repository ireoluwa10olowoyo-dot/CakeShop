import { useState } from 'react';
import Dashboard from "./components/Dashboard"
import NavBar from "./components/NavBar"
import CakeCards from "./components/CakeCards"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar/>
    <Dashboard/>
      
    </>
  )
}

export default App

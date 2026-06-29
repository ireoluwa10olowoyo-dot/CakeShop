import { useState } from 'react';
import Dashboard from "./components/Dashboard"
import NavBar from "./components/NavBar"
import CakeCards from "./components/CakeCards"
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import AllProducts from './pages/AllProducts';
import Support from './pages/Support';
import About from './pages/About';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/Home" replace/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/AllProducts" element={<AllProducts/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      <Route path="/Support" element={<Support/>}/>

    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App

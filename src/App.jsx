import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './Home'
import Projects from './Projects'
import ContactUs from './ContactUs'
import Navbar from './Navbar'
import { BrowserRouter, Route,Router,Routes, useLocation } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <BrowserRouter>
     <Navbar/>
     <Routes >
      <Route path='/' element={<Home/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

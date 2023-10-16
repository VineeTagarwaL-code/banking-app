import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Views/Home'
import Navbar from './Components/Navbar/Navbar'

function App() {

  const URL = "http://localhost:8000/api/v1"
  return(
    <div className="rootCont">
        <Navbar/>
    <Home url={URL}/>
    </div>
  )

}

export default App

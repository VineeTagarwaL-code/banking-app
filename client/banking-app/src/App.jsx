import React , { useState , lazy , Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Views/Home/Home'
import Navbar from './Components/Navbar/Navbar'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Transfer from './Views/TransferPage/Transfer'

function App() {
  const [transferRecord , setTransferRecord] = useState([])
  const URL = "http://localhost:8000/api/v1"
  return(
    <Router>
  <div className="rootCont">
  <Navbar/>
  <Routes>
       

        <Route path="/" element={<Home url={URL} record={transferRecord}/>} />
        <Route path="/transferTable" element={<Transfer record={transferRecord}/>}/>
    </Routes>
    </div>
    </Router>
  
  )

}

export default App

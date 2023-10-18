import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link , useNavigate  } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  const navigateToHome = ()=>{
    navigate('/')
  }

  const navigateTransfer = ()=>{
   navigate('/transferTable')
  } 


  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Banking app</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=>navigateToHome()} style={{ "cursor": "pointer"}}>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" onClick={()=>navigateTransfer()} style={{ "cursor": "pointer"}}>Transfer Table</a>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
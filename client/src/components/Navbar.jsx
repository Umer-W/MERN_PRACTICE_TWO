import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "../App.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand nav-link heading" to="/">MERN Developer</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> <i class="zmdi zmdi-menu"></i>
</span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">CONTACT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Login">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/SignUp">REGISTRATION</Link>
        </li>
       
       
      </ul>
    
    </div>
  </div>
</nav>


    </div>
  )
}

export default Navbar
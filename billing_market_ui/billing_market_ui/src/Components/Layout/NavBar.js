import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <a className="navbar-brand" to="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-item nav-link active" to="#">Home</NavLink>
      <NavLink className="nav-item nav-link" to="#">About</NavLink>
      <NavLink className="nav-item nav-link" to="#">Contact</NavLink>
      <NavLink className="nav-item nav-link" to="/add">ADD VENDOR</NavLink>
      <NavLink className="nav-item nav-link" to="/show">SHOW VENDOR</NavLink>
      <NavLink className="nav-item nav-link disabled" to="#">Disabled</NavLink>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
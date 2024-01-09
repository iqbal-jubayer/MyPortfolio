import React from 'react'
import { Link } from 'react-router-dom';

import "./CSS/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-section">
      <nav className="navbar">
        <div className="navbar-logo"><h2><Link to="/">&lt;/&gt;{process.env.REACT_APP_TITLE}</Link></h2></div>
        <div className="navbar-control">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

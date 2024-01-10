// IMPORT PACKAGES
import React from 'react'
import { Link } from 'react-router-dom';

// IMPORT COMPONENTS

// IMPORT CONTEXT

// IMPORT CSS
import "./CSS/Navbar.css";

// IMPORT STATIC FILES


const Navbar = () => {

  const burgerClick = () => {
    const burger_line = document.querySelectorAll(".burger > *");
    const navControl = document.querySelector(".navbar-control");
    burger_line[0].classList.toggle("burger-active-1");
    burger_line[1].classList.toggle("burger-active-2");
    burger_line[2].classList.toggle("burger-active-3");
    navControl.classList.toggle("navbar-active");
  }


  return (
    <div className="navbar-section">
      <nav className="navbar">
        <div className="navbar-logo"><h2><Link to="/">&lt;/&gt;{process.env.REACT_APP_TITLE}</Link></h2></div>
        <div className="burger" onClick={burgerClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="underlay"></div>
        <div className="navbar-control">
          <ul>
            <li><Link to="/" onClick={burgerClick}>Home</Link></li>
            <li><Link to="/projects" onClick={burgerClick}>Projects</Link></li>
            <li><Link to="/contact" onClick={burgerClick}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

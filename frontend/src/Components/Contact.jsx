import React, { useEffect } from 'react'

import "./CSS/Contact.css"

import f_logo from "./Images/f_logo.png"
import i_logo from "./Images/i_logo.png"
import g_logo from "./Images/g_logo.png"

const Contact = () => {
  document.title = "Contact | " + process.env.REACT_APP_TITLE;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='contact-section'>
      <div className="contact-container">
        <div className="contact-title"><h2>Feel free to contact me</h2></div>
        <div className="contact-icon">
          <a href="https://www.facebook.com"><img src={f_logo} alt="Facebook" /></a>
          <a href="https://www.instagram.com"><img src={i_logo} alt="Instagram" /></a>
          <a href="https://github.com/iqbal-jubayer"><img src={g_logo} alt="Github" /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact

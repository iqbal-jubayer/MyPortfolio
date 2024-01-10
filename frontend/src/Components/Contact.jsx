// IMPORT PACKAGES
import React, { useContext, useEffect } from 'react'

// IMPORT CONTEXT
import MyContext from './Context/MyContext'

// IMPORT CSS
import "./CSS/Contact.css"

// IMPORT STATIC FILES
import f_logo from "./Images/f_logo.png"
import i_logo from "./Images/i_logo.png"
import g_logo from "./Images/g_logo.png"


const Contact = () => {
  const { runAtStart } = useContext(MyContext);
  document.title = "Contact | " + process.env.REACT_APP_TITLE;
  useEffect(() => {
    runAtStart();
  }, [runAtStart]);
  return (
    <div className='contact-section'>
      <div className="contact-container">
        <div className="contact-title"><h2>Feel free to contact me</h2></div>
        <div className="contact-icon">
          <a href={process.env.REACT_APP_FB_ID} rel="noreferrer" target='_blank'><img src={f_logo} alt="Facebook" /></a>
          <a href={process.env.REACT_APP_IG_ID} rel="noreferrer" target='_blank'><img src={i_logo} alt="Instagram" /></a>
          <a href={process.env.REACT_APP_GIT_ID} rel="noreferrer" target='_blank'><img src={g_logo} alt="Github" /></a>
        </div>
      </div>
    </div>
  )
}

export default Contact

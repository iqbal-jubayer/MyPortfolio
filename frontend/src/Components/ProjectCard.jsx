// IMPORT PACKAGES
import React from 'react'
import { Link } from 'react-router-dom'
import { htmlToText } from 'html-to-text'

// IMPORT COMPONENTS

// IMPORT CONTEXT

// IMPORT CSS
import "./CSS/ProjectCard.css"

// IMPORT STATIC FILES



const ProjectCard = ({ e }) => {
  return (
    <div className="projects-card">
      <div className="projects-card-item projects-card-img"><img src={e.imgUrl} alt="" /></div>
      <div className="projects-card-item"><h3>{e.title}</h3></div>
      <div className="projects-card-item"><p>{htmlToText(e.desc).slice(0, 40)}...</p></div>
      <div className="projects-card-item"><Link to={`/projects/${e._id}`}><span className='btn'>Read More.</span></Link></div>
    </div>
  )
}

export default ProjectCard

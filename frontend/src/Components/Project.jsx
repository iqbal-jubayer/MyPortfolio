import React, { useEffect, useState } from 'react'

import "./CSS/Project.css"

import axios from 'axios';
import { useParams } from 'react-router-dom';

const Project = () => {
  const { projectID } = useParams();
  
  const [project, setProject] = useState({});
  
  
  useEffect(() => {
    const getProject = async () => {
      await axios.post("http://localhost:5000/api/project/getproject", {}, { headers: { "_id": projectID } }).then(res => setProject(res.data)).catch(err => console.log(err))
    }; getProject();
    document.title = project.title +  " | " + process.env.REACT_APP_TITLE;
    window.scrollTo(0, 0);
  }, [projectID,project]);

  return (
    <div className='project-section'>
      <div className="project-section-item project-section-img" style={{ backgroundImage: `url(${project.imgUrl})` }}></div>
      <div className="project-section-item project-section-title"><h2>{project.title}</h2></div>
      <div className="project-section-item project-section-desc"><p>{project.desc}</p></div>
    </div>
  )
}

export default Project

// IMPORT PACKAGES
import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

// IMPORT COMPONENTS

// IMPORT CONTEXT
import MyContext from './Context/MyContext';

// IMPORT CSS
import "./CSS/Project.css"

// IMPORT STATIC FILES

const Project = () => {
  const { runAtStart } = useContext(MyContext);
  const { projectID } = useParams();

  const [project, setProject] = useState({});


  useEffect(() => {
    const getProject = async () => {
      await axios.post(`${process.env.REACT_APP_API}/api/project/getproject`, {}, { headers: { "_id": projectID } }).then(res => setProject(res.data)).catch(err => console.log(err))
    }; getProject();
    document.title = project.title + " | " + process.env.REACT_APP_TITLE;
    runAtStart();
  }, [projectID, project.title, runAtStart]);

  return (
    <div className='project-section'>
      <div className="project-section-item project-section-img" style={{ backgroundImage: `url(${project.imgUrl})` }}></div>
      <div className="project-section-item project-section-title"><h2>{project.title}</h2></div>
      <div className="project-section-item project-section-desc" dangerouslySetInnerHTML={{ __html: project.desc }}></div>
    </div>
  )
}

export default Project

import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import "./CSS/Projects.css"

import MyContext from './Context/MyContext'

const Projects = () => {
  const { projectList } = useContext(MyContext);
  document.title = "Projects | " + process.env.REACT_APP_TITLE;

  useEffect(() => {
    window.scrollTo(0,0);
  }, [projectList]);

  return (
    <div className='projects-section'>
      <div className="projects-section-title"><h2 className='text-center'>Projects</h2></div>
      <div className="projects-category-collections">

        {Object.keys(projectList).map(cat => (
          <div className="projects-category" key={cat}>
            <div className="projects-category-title"><h2>{cat}</h2></div>
            <div className="projects-collections">

              {projectList[cat].map(e => (
                <div className="projects-card" key={e._id}>
                  <div className="projects-card-item projects-card-img"><img src={e.imgUrl} alt="" /></div>
                  <div className="projects-card-item"><h3>{e.title}</h3></div>
                  <div className="projects-card-item"><p>{e.desc}</p></div>
                  <div className="projects-card-item"><Link to={`/projects/${e._id}`}><span className='btn'>Read More.</span></Link></div>
                </div>
              ))}


            </div>
          </div>
        ))}


      </div>
    </div>
  )
}

export default Projects

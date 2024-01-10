// IMPORT PACKAGES
import React, { useContext, useEffect } from 'react'

// IMPORT COMPONENTS
import ProjectCard from './ProjectCard'

// IMPORT CONTEXT
import MyContext from './Context/MyContext'

// IMPORT CSS
import "./CSS/Projects.css"

// IMPORT STATIC FILES

const Projects = () => {
  const { projectList, runAtStart } = useContext(MyContext);
  document.title = "Projects | " + process.env.REACT_APP_TITLE;

  useEffect(() => {
    runAtStart();
  }, [projectList, runAtStart]);

  return (
    <div className='projects-section'>
      <div className="projects-section-title"><h2 className='text-center'>Projects</h2></div>
      <div className="projects-category-collections">

        {Object.keys(projectList).map(cat => (
          <div className="projects-category" key={cat}>
            <div className="projects-category-title"><h2>{cat}</h2></div>
            <div className="projects-collections">

              {projectList[cat].map(e => (
                <ProjectCard key={e._id} e={e} />
              ))}


            </div>
          </div>
        ))}


      </div>
    </div>
  )
}

export default Projects

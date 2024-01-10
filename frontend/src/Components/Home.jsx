// IMPORT PACKAGES
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

// IMPORT COMPONENTS
import ProjectCard from './ProjectCard';

// IMPORT CONTEXT
import MyContext from './Context/MyContext';

// IMPORT CSS
import "./CSS/Home.css";

// IMPORT STATIC FILES


const Home = () => {
  const {runAtStart} = useContext(MyContext);
  document.title = "Home | " + process.env.REACT_APP_TITLE;

  const [projectsList, setProjectsList] = useState([]);


  useEffect(() => {
    const getLatest = async () => {
      await axios.get(`${process.env.REACT_APP_API}/api/project/getlatest`).then(res => setProjectsList(res.data)).catch(err => console.log(err));
    }; getLatest();
    runAtStart();
  }, [setProjectsList, runAtStart]);

  return (
    <div className='home-section'>
      <div className="home-main-section">
        <div className="home-main-left-section">
          <div className="home-title"><h2>Welcome To {process.env.REACT_APP_TITLE}</h2></div>
          <div className="home-desc"><p>{process.env.REACT_APP_HOME_DESC}</p></div>
        </div>
        <div className="home-main-right-section"><span></span></div>
      </div>


      <div className="home-project-section">
        <div className="home-project-title"><h2>Latest Projects</h2></div>
        <div className="home-project-container">
          {projectsList.map(e => (
            <ProjectCard key={e._id} e={e} />
          ))}
        </div>
        <div className="home-project-next"><Link to="/projects"><span className='btn'>View All-&gt;</span></Link></div>
      </div>
    </div>
  )
}

export default Home

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import "./CSS/Home.css";

import axios from 'axios';

const Home = () => {
  document.title = "Home | " + process.env.REACT_APP_TITLE;
  
  const [projectsList, setProjectsList] = useState([]);
  
  
  useEffect(() => {
    const getLatest = async () => {
      await axios.get("http://localhost:5000/api/project/getlatest").then(res => setProjectsList(res.data)).catch(err => console.log(err));
    }; getLatest();
    window.scrollTo(0,0);
  }, [setProjectsList]);

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
            <div className="projects-card" key={e._id}>
              <div className="projects-card-item projects-card-img"><img src={e.imgUrl} alt="" /></div>
              <div className="projects-card-item"><h3>{e.title}</h3></div>
              <div className="projects-card-item"><p>{e.desc}</p></div>
              <div className="projects-card-item"><Link to={`/projects/${e._id}`}><span className='btn'>Read More.</span></Link></div>
            </div>
          ))}


        </div>
        <div className="home-project-next"><Link to="/projects"><span className='btn'>View All-&gt;</span></Link></div>
      </div>
    </div>
  )
}

export default Home

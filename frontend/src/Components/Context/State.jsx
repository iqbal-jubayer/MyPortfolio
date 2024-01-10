// IMPORT PACKAGES
import React, { useEffect, useState } from 'react'
import axios from 'axios';

// IMPORT COMPONENTS

// IMPORT CONTEXT
import MyContext from './MyContext'

// IMPORT CSS

// IMPORT STATIC FILES


const State = (props) => {

  const [projectList, setProjectList] = useState({});

  const getProjects = async () => {
    await axios.get(`${process.env.REACT_APP_API}/api/project/getprojects`).then(res => setProjectList(res.data)).catch(err => console.log(err))
  }

  const runAtStart = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    getProjects();
  }, []);

  const values = { projectList, setProjectList, runAtStart };
  return (
    <MyContext.Provider value={values}>
      {props.children}
    </MyContext.Provider>
  )
}

export default State

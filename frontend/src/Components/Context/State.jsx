import React, { useEffect, useState } from 'react'

import MyContext from './MyContext'
import axios from 'axios';

const State = (props) => {

  const [projectList, setProjectList] = useState({});

  const getProjects = async () => {
    await axios.get("http://localhost:5000/api/project/getprojects").then(res => setProjectList(res.data)).catch(err => console.log(err))
  }

  useEffect(() => {
    getProjects();
  }, []);

  const values = { projectList, setProjectList };
  return (
    <MyContext.Provider value={values}>
      {props.children}
    </MyContext.Provider>
  )
}

export default State

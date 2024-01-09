const express = require("express");
var ObjectID = require('mongodb').ObjectID;
const router = express.Router();

const Project = require('../Models/Project');

router.post('/addproject', async (req, res) => {
  let project = new Project(req.body);
  project.save();
  res.send(project);
});

router.get('/getprojects',async(req,res)=>{
  const projectList = {};
  const data = await Project.find({});
  data.forEach(e=>{
    try{
      projectList[e.lang].push(e);
    }catch{
      projectList[e.lang] = [e];
    }
  })
  res.send(projectList);
})

router.post('/getproject',async (req,res)=>{
  const project =  await Project.findById(req.headers._id);
  res.send(project);
})

router.get('/getlatest',async (req,res)=>{
  const project =  await Project.find({}).sort({_id:-1}).limit(3);
  res.send(project);
})

module.exports = router;
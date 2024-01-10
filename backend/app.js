const express = require("express");
const connectToMongo = require("./db");
const cors = require('cors');

const Project = require("./Models/Project");

connectToMongo("mongodb://127.0.0.1:27017/MyPortfolio");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/project",require('./routes/projects'));

app.listen(PORT,()=>{
    console.log(`This app is running on port ${PORT}`);
})
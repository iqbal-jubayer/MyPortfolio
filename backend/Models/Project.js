const {Schema, model} = require("mongoose");

const ProjectSchema = new Schema({
  imgUrl:String,
  title:String,
  desc:String,
  lang:String,
  date:{
    type:String,
    default:Date.now
  }
})

module.exports = model("projects",ProjectSchema);
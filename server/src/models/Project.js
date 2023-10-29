const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// total of 11 field

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  spent: {
    type: Number,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  client: {
    type: String,
    required: true,
  },
  completed: {
    type: Number,
    required: true,
  },
  tasks: {
    type: String,
    required: true,
  },
  members:[ {
    type : Array , "default" : [] 
  }],
  start_date: {
    type: String
  },
  due_date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("project", projectSchema);
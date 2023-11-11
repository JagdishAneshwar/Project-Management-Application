const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  spent: {
    type: String,
    required: true,
  },
  assigned: [
    {
      type: Array,
      default: [],
    },
  ],
  status:{
    type: String,
    required: true,
  },
  project_id:{
    type: String,
    // required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  start_date: {
    type: String,
    
  },
  due_date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("task", taskSchema);
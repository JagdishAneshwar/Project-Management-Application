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
  done:{
    type: String,
    required: true,
  },
  project_id:{
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  due_date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("task", taskSchema);
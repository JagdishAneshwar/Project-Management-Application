const fetchuser = require("../middleware/fetchuser");
const Project = require("../models/Project");
const express = require("express");
const router = express.Router();



// ---------------------------------- Route 1: get all projects using GET: "api/project/allProjectDetails"
router.get("/allProjectDetails", fetchuser, async (req, res) => {
  try {
    const project = await Project.find({ user: req.user.id });
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.json({ error: "internal Server Error", err: err.message });
  }
});



// ------------------------------------------ Route 2: update an existin projectusing PUT: "api/projects/update" -login required
router.put("/updateProject/:id", fetchuser, async (req, res) => {
  const {       
    title, 
    description, 
    budget, 
    spent, 
    due_date, 
    tasks,
  } = req.body;

  // create new project object
  const newProject = {};
  if (title) {
    newProject.title = title;
  }
  if (description) {
    newProject.description = description;
  }
  if (budget) {
    newProject.budget = budget;
  }
  if (spent) {
    newProject.spent = spent;
  }
  if (due_date) {
    newProject.due_date = due_date;
  }
  if (client) {
    newProject.client = client;
  }

  // find the project to be updated and update it
  var project = await Project.findById(req.params.id);
  if (!project) {
    return res.status(404).send("not found");
  }

  if (project.user.toString() !== req.user.id) {
    return res.status(401).send("Unauthorized");
  }

  try {
    project = await Projects.findByIdAndUpdate(
      req.params.id,
      { $set: newProject },
      { new: true }
    );
    res.json(project);
  } catch (err) {
    console.error(err.message);
    res.json({ error: "internal Server Error", err: err.message });
  }
});




// ----------------------------------- Route 3: add new project using POSt: "api/project/addProject"
router.post("/addProject", async (req, res) => {
  const {
    title, 
    description,
    budget,
    spent, 
    start_date, 
    due_date, 
    priority, 
    client, 
    completed,
    tasks,
    members, 
    img
  } = req.body;

  try {
    const project = new Project({
      title, 
      description, 
      budget, 
      spent, 
      start_date, 
      due_date, 
      priority, 
      client, 
      completed,
      tasks,
      members,
      img
    });

    const saveClothe = await project.save();
    res.send(saveClothe);

  } catch (err) {
    console.error(err.message);
    res.json({ error: "internal Server Error", err: err.message });
  }
});



// ------------------------------------ Route 4: delete an existing project using DELETE: "api/project/deleteProject" -login required
router.delete("/removeProject/:id", fetchuser, async (req, res) => {

    // find the project to be updated and update it
    var project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).send("Not found");
    }
  
    try {
      project = await Project.findByIdAndDelete(req.params.id);
      res.send(project);
    } catch (err) {
      console.error(err.message);
      res.json({ error: "internal Server Error", err: err.message });
    }
  });





module.exports = router;
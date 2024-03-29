const connToMongo = require("./conn");
const { port } = require("./config");
const express = require("express");
var cors = require("cors");
const app = express();
connToMongo();

// to use request.body
app.use(express.json());


//Available routes
app.use("/api/auth", cors(), require("./src/routes/auth"));
app.use("/api/employee", cors(), require("./src/routes/employee"));
app.use("/api/project", cors(), require("./src/routes/project"));
app.use("/api/task", cors(), require("./src/routes/tasks"));

const Task = require("./src/models/Task");
const Project = require("./src/models/Project");
const ProjectHistory = require("./src/models/ProjectHistory");



const normalizeValue = (value, maxValue) => value / maxValue;

const saveProjectProgress = async () => {
  try {
    // Get all projects
    console.log('Starting saveProjectProgress...');
    const projects = await Project.find();
    
    // Loop through each project
    for (const project of projects) {
      // Find tasks for the project
      const tasks = await Task.find({
        project_id: project._id,
      });

      // Filter completed tasks
      const completedTasks = tasks.filter(task => task.status === 'complete');
      
      // Calculate the sum of spent values for completed tasks
      const sumSpent = completedTasks.reduce((total, task) => total + parseFloat(task.spent), 0);

      const completedTasksLength = completedTasks.length;
      const totalTasks = tasks.length;

      // Calculate earned value based on your logic
      const earnedValue = (completedTasksLength / totalTasks) * 100; // Adjust as needed

      const currentDate = new Date();

      // Create a new ProjectProgress record
      const projectProgress = new ProjectHistory({
        project_id: project._id,
        completed_tasks: completedTasksLength,
        total_tasks: totalTasks,
        earned_value: earnedValue,
        spent: sumSpent,
        date: currentDate.getDate(),
      });

      // Save the new record to the ProjectProgress collection
      await projectProgress.save();
    }

    console.log('Project progress records saved successfully.');
  } catch (error) {
    console.error('Error saving project progress records:', error);
  }
};



const cron = require("node-cron");

cron.schedule("0 0 * * * *", saveProjectProgress);

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});


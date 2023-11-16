import React, {useState, useEffect, useContext} from 'react'
import projectContext from "../../../context/project/projectContext"
import Card from "../../../features/component/card/Card";
import Project from "../../../features/component/project/Project";
import DrawDoughnut from "../../../features/graph/dough/DrawDoughnut";
import "./_dashboard.scss";

const Dashboard = () => {

  const context = useContext(projectContext);
  const { tasks, getTasks, projects, getProject } = context;

  useEffect(() => {
    getTasks()
    getProject()
  },[]);


  // --------------------------- project info

  //  total projects
  const project_len = projects.length;

  // Projects that have at least one completed task
  const project_complete = projects.filter((project) => {
    return tasks.some((task) => {
      return project._id === task.project_id && task.status === "complete";
    });
  });
  
  const project_complete_length = project_complete.length;

  const project_progress = projects.filter((project) => {
    return tasks.some((task) => {
      return project._id === task.project_id && task.status === "progress";
    });
  });
  
  const project_progress_length = project_progress.length;





  const overdueCalculator = (due_date) =>{
    const currentDate = new Date();  // Current date
    const dueDate = new Date(due_date);  // Example due date
    
    // Calculate the time difference in milliseconds
    const timeDifference = dueDate.getTime() - currentDate.getTime();
    
    // Convert milliseconds to hours
    const hoursDifference = timeDifference / (1000 * 60 * 60);
    
    return(hoursDifference)
  }

  const project_overdue = projects.filter((project) => {
    return tasks.some((task) => {
      return project._id === task.project_id && task.status !== "complete" && overdueCalculator(task.due_date) <= 0;
    });
  });

const project_overdue_length = project_overdue.length;

const project_budget_risk = projects.filter((project) => {
  return tasks.some((task) => {
    return project._id === task.project_id && task.spent > project.budget;
  });
});

const project_budget_risk_length = project_budget_risk.length;






  
  // total tasks
  const projects_tasks = projects.reduce((accumulator, project) => {
    const tasksForProject = tasks.filter((task) => task.project_id === project._id);
    return accumulator.concat(tasksForProject);
  }, []);
  
  


  const task_len = projects_tasks.length;

    // completed Tasks
    const task_complete = projects_tasks.filter((task) => {
      return (
        task.status === "complete" 
      );
    });
    const complete_length = task_complete.length;
  
  
    const incomplete_length = task_len-complete_length;
  
    // due date coming in next 2 days
    var targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2);
    var dd = targetDate.getDate();
    var mm = targetDate.getMonth() + 1; // 0 is January, so we must add 1
    var yyyy = targetDate.getFullYear();
    var dateString = yyyy + "-" + mm + "-" + ("0"+dd).slice(-2);
    
  
    const task_upcoming = projects_tasks.filter((task) => {
      return (
        task.due_date === dateString
      );
    });
  
    const upcoming_length = task_upcoming.length;
  

 
  return (
    <div className="dashboard">
      <h4 className="dashboard-title">Dashboard</h4>
      <div className="d-flex flex-row task-section  justify-content-around align-items-center pt-3">
        <Card
          img={require(`../../../res/image/ongoing.png`)}
          header="Ongoing Projects"
          value={project_len}
        />
        <Card
          img={require(`../../../res/image/under.png`)}
          header="Budget Defiecient"
          value={project_budget_risk_length}
        />
        <Card
          img={require(`../../../res/image/high_risk.png`)}
          header="Risked Projects"
          value={project_overdue_length}
        />
      </div>
      <div className="project-progress d-flex flex-row justify-content-around">
      <div className="doughnut-wrap">
          <DrawDoughnut
            title="Project Progress"
            position="right"
            align="center"
            label={["Overdue","Ongoing Projects", "Completed"]}
            values={[project_overdue_length, project_progress_length, project_complete_length]}
            titpos="top"
            titalgn="center"
          />
        </div>
        <div className="doughnut-wrap">
          <DrawDoughnut
            title="Task Progress"
            position="right"
            align="center"
            label={["Completed","Incomplete"]}
            values={[complete_length,incomplete_length]}
            titpos="top"
            titalgn="center"
          />
        </div>
        </div>
        <div className="project-lists d-flex flex-column mt-3">
        <h4 className="project-by-priority-title">Project by priority</h4>
        { projects && projects.map((project,i) => {
          return ( 
          <Project
          _id={project._id}
            title={project.title}
            tasks={tasks}
            description={project.description}
            start_date={project.start_date}
            due_date={project.due_date}
            client={project.client}
            members={project.members}
            img={project.members}
            
            priority={project.priority}
            due={project.due_date}
            risks="1"
            budget={project.budget}
            spent={project.spent}
          /> );
        })
      }
      </div> 
    </div>
  );
};

export default Dashboard;


import React, {useState, useEffect, useContext} from 'react'
import projectContext from "../../../context/project/projectContext"
import Card from "../../../features/component/card/Card";
import Project from "../../../features/component/project/Project";
import DrawDoughnut from "../../../features/graph/dough/DrawDoughnut";
import "./_home.scss";

const Home = () => {

  const context = useContext(projectContext);
  const { tasks, getTasks, projects, getProject } = context;

  useEffect(() => {
    getTasks()
    getProject()
  },[]);

  const project_len = projects.length;

  const project_complete = projects.filter((project) => {
    return (
      project.completed === 1
    );
  });
  const project_complete_length = project_complete.length;
  

  const task_len = tasks.length;
  const task_complete = tasks.filter((task) => {
    return (
      task.done === "true"
    );
  });
  const complete_length = task_complete.length;

  const task_incomplete = tasks.filter((task) => {
    return (
      task.done === "false"
    );
  });
  const incomplete_length = task_incomplete.length;

  var targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2);
  
  var dd = targetDate.getDate();
  var mm = targetDate.getMonth() + 1; // 0 is January, so we must add 1
  var yyyy = targetDate.getFullYear();
  
  var dateString = yyyy + "-" + mm + "-" + ("0"+dd).slice(-2);


  const task_upcoming = tasks.filter((task) => {
    return (
      task.due_date === dateString
    );
  });
  const upcoming_length = task_upcoming.length;

  const data1 = ["12", "8","100"]
  const data2 = [`${complete_length/task_len}` || 0, `${incomplete_length/task_len}` || 0]

  return (
    <div className="home">
      <h4 className="dashboard-title">Dashboard</h4>
      <div className="d-flex flex-row task-section  justify-content-around align-items-center pt-3">
        <Card
          img={require(`../../../res/image/ongoing.png`)}
          header="Ongoing Projects"
          value="7"
        />
        <Card
          img={require(`../../../res/image/under.png`)}
          header="Ongoing Projects"
          value="7"
        />
        <Card
          img={require(`../../../res/image/high_risk.png`)}
          header="Ongoing Projects"
          value="7"
        />
      </div>
      <div className="project-progress d-flex flex-row justify-content-around">
      <div className="doughnut-wrap">
          <DrawDoughnut
            title="Project Progress"
            position="right"
            align="center"
            label1={["Overdue","Ongoing Projects","Upcoming deadline"]}
            info1={data1}
            titpos="top"
            titalgn="center"
          />
        </div>
        <div className="doughnut-wrap">
          <DrawDoughnut
            title="Task Progress"
            position="right"
            align="center"
            label1={["Completed","Incomplete"]}
            info1={data2}
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
            title={project.title}
            progress={project_complete_length/project_len*100}
            total_tasks={task_len}
            completed_task={project_complete_length}
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

export default Home;


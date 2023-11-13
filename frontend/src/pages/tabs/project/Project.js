import React, {useState, useEffect, useRef, useContext} from 'react'
import projectContext from "../../../context/project/projectContext"
import DrawDoughnut from "../../../features/graph/dough/DrawDoughnut"
import Profile from "../../../features/component/circular-profile/Profile"
import DrawLine from '../../../features/graph/line/DrawLine';
import Task from '../../../features/component/task-card/Task';
import Addtask from '../tasks/Tasks'
import TaskModel from '../../../features/component/task-model/TaskModel';
import { useLocation } from "react-router-dom";
import "./_project.scss";

const Project = () => {
  const location = useLocation();
  
    const {  id,
      title, 
      description,
      budget,
      spent, 
      start_date, 
      due_date, 
      priority, 
      client, 
      tasklist,
      members, 
      img} = location.state;
      const data = [ "12","30", "2"]
      const context = useContext(projectContext);
      const { getTasks, updateProject, tasks } = context;
      const [project,setProject] = useState("")
      

      const onClickProjectUpdate = (e) => {
        
        updateProject(
          id,
          title, 
          description,
          budget,
          spent, 
          start_date, 
          due_date, 
          priority, 
          client, 
          tasklist,
          members, 
          img);   
          console.log(id,
            title, 
            description,
            budget,
            spent, 
            start_date, 
            due_date, 
            priority, 
            client, 
            tasklist,
            members, 
            img)
      };

      const projectTasks  = tasks.filter(task => task.project_id === id);
      const todoTasks  = projectTasks.filter(task => task.status === "todo");
      const progressTasks  = projectTasks.filter(task => task.status === "progress");
      const completeTasks  = projectTasks.filter(task => task.status === "complete");
      
    useEffect(() => {
      getTasks()
    },[]);

        const names = [
    {
      value: 1,
      label: "cerulean"
    },
    {
      value: 2,
      label: "fuchsia rose"
    },
    {
      value: 3,
      label: "true red"
    },
    {
      value: 4,
      label: "aqua sky"
    },
    {
      value: 5,
      label: "tigerlily"
    },
    {
      value: 6,
      label: "blue turquoise"
    }
  ];
  const getMemberName = (id) => {
    // Add logic to get the name corresponding to the id
    // For example, if names is an array of objects with value and label properties
    const member = names.find((item) => item.value === id);
    return member ? member.label : `Unknown Member ${id}`;
  };
  
  


  return (
    <div className='project-main' key={id}>
    <h4 className="dashboard-title">Dashboard</h4>
    <div className='info d-flex flex-row justify-content-around align-content-center p-3 border-bottom border-1' >
      <div className="project-profile">
      <Profile />
      </div>
      <div className='title-description'>
      <h3 className='title'>{title}</h3>
      <div className='description'>{description}</div>
      </div>
    </div>
    <h4 className='summary-title title'>Summary</h4>

    <div className='summary border-bottom border-1 mb-3'>
      <div className='summary-wrap d-flex flex-row  justify-content-between'>
        <div className='budget-info'>
        <div className='budget'>Budget: {budget}</div>
        <div className='spent'>Spent: {spent}</div>
        </div>
        <div className='date-info'>
        <div className='start-date'>Start Date: {start_date}</div>
        <div className='due-date'>Due Date: {due_date}</div>
        </div>
      </div>
    </div>
    <div className='visualisation d-flex flex-row'>
      <div className='project-performance'>
      <DrawDoughnut
            title="Project Progress"
            position="right"
            align="center"
            label1="Overdue"
            label2="Ongoing Projects"
            label3="Upcoming deadline"
            info1={data[0]}
            info2={data[1]}
            info3={data[2]}
            titpos="top"
            titalgn="start"
          />
    </div>
    <div className='project-line-chart'>
    <DrawLine/>
    </div>
    </div>
    <TaskModel id={id} />
    <div className='tasks-overview'>
      <h4 className='task-overview-title'>Tasks Overview</h4>
      <div className='tasks-wrapper d-flex flex-row justify-content-around'>
        <div className='todo-list'>
          <h4 className='todo-list-title'>To Do</h4>
          <div className='todo-wrapper'>
          {todoTasks.map((task, i) => (
            
        <Task key={i} id={task._id} title={task.title} description={task.description} spent={task.spent} start_date={task.start_date} status={task.status} assigned={task.assigned} priority={task.priority} project_id={task.project_id} due_date={task.due_date} />
      ))}

            
          </div>
        </div>
        <div className='todo-list'>
          <h4 className='todo-list-title'>On Progress</h4>
          <div className='todo-wrapper'>
          {progressTasks && Array.isArray(progressTasks) ? (
            progressTasks.map((task, i) => (
              <Task key={i} id={task._id} title={task.title} description={task.description} spent={task.spent} start_date={task.start_date} status={task.status} assigned={task.assigned} priority={task.priority} project_id={task.project_id} due_date={task.due_date} />
  ))
) : (
  <p>No tasks available.</p>
)}

          </div>
        </div>
        <div className='todo-list'>
          <h4 className='todo-list-title'>Completd</h4>
          <div className='todo-wrapper'>
          {completeTasks && Array.isArray(completeTasks) ? (
            completeTasks.map((task, i) => (
              <Task key={i} id={task._id} title={task.title} description={task.description} spent={task.spent} start_date={task.start_date} status={task.status} assigned={task.assigned} priority={task.priority} project_id={task.project_id} due_date={task.due_date} />
  ))
) : (
  <p>No tasks available.</p>
)}

          </div>
        </div>
      </div>
    </div>
    <Addtask id={id} />
    <div>
  <h4>Members:</h4>
  {members.map((group, index) => (
    <div key={index}>
      {group.map((memberObj, index) => (
        <ul key={index}>
          {memberObj.members.map((id, index) => (
            <div key={index}>{`Member: ${getMemberName(id)}`}</div>
          ))}
        </ul>
      ))}
    </div>
  ))}
</div>
    <button type="button" className="btn btn-success btn-lg w-50" onClick={onClickProjectUpdate} data-bs-toggle="modal" data-bs-target="#update">Update</button>
    <button type="button" class="btn btn-danger btn-lg w-50">Delete</button>


  </div>
  )
}

export default Project

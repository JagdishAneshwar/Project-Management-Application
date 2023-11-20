import React, {useState, useEffect, useRef, useContext} from 'react'
import projectContext from "../../../context/project/projectContext"
import DrawDoughnut from "../../../features/graph/dough/DrawDoughnut"
import Profile from "../../../features/component/circular-profile/Profile"
import DrawLine from '../../../features/graph/line/DrawLine';
import Task from '../../../features/component/task-card/Task';
import { Link, useNavigate } from "react-router-dom";
import UpdateProject from '../../../features/component/update-project/UpdateProject'
import AddTask from '../../../features/component/task-model/TaskModel';
import { useLocation } from "react-router-dom";
import "./_project.scss";

const Project = () => {
  const location = useLocation();
  
    const {  _id,
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
      
      // Create a new Date object


// Log the current date





      const context = useContext(projectContext);
      const { getTasks, tasks, getProjectHistory, projecthistory, projects } = context;

      const projectTasks  = tasks.filter(task => task.project_id === _id);
      const todoTasks  = projectTasks.filter(task => task.status === "todo");
      const progressTasks  = projectTasks.filter(task => task.status === "progress");
      const completeTasks  = projectTasks.filter(task => task.status === "complete");
      const project = projects.filter(project => project._id === _id)[0];

      const overdueCalculator = (due_date) =>{
        const currentDate = new Date();  // Current date
        const dueDate = new Date(due_date);  // Example due date
        
        // Calculate the time difference in milliseconds
        const timeDifference = dueDate.getTime() - currentDate.getTime();
        
        // Convert milliseconds to hours
        const hoursDifference = timeDifference / (1000 * 60 * 60);
        
        return(hoursDifference)
      }

       const overdue_tasks = tasks.filter((task)=>{
         return(
           task.status !== "complete" && overdueCalculator(task.due_date) <= 0
         )
       })

      
      
    useEffect(() => {
      getTasks()
      getProjectHistory(_id)
    },[]);


const dates = projecthistory.map(item => new Date(item.date).toLocaleDateString());
const earned_value = projecthistory.map(item => parseInt(item.earned_value, 10));
const spent_value = projecthistory.map(item => parseInt(item.spent, 10));

// Calculate cumulative sum
const calculateCumulativeSum = (array) => {
  let sum = 0;
  return array.map(value => sum += value);
};

const cumulativeSumEarned = calculateCumulativeSum(earned_value);
const cumulativeSumSpent = calculateCumulativeSum(spent_value);

const normalizeArray = (array) => {
  const maxValue = Math.max(...array);
  return array.map(value => value / maxValue * 100);
};

const normalizedEarned = normalizeArray(cumulativeSumEarned);
const normalizedSpent = normalizeArray(cumulativeSumSpent);


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
    <div className='project-main' key={_id}>
    <Link to="/dashboard"><h4 className="dashboard-title">Dashboard</h4></Link>
    <div className='info d-flex flex-row justify-content-around align-content-center p-3' >
      <div className="project-profile">
      <Profile />
      </div>
      <div className='title-description'>
      <h3 className='title'>{project.title}</h3>
      <div className='description'>{project.description}</div>
      </div>
    </div>
    <h4 className='summary-title title'>Summary</h4><hr/>

    <div className='summary mb-3'>
      <div className='summary-wrap d-flex flex-row  justify-content-between'>
        <div className='budget-info'>
        <div className='budget'>Budget: {project.budget}</div>
        <div className='spent'>Spent: {project.spent}</div>
        </div>
        <div className='date-info'>
        <div className='start-date'>Hours of Work Left: {Math.round(overdueCalculator(project.due_date))/8-8}</div>
        <div className='due-date'>Due Date: {project.due_date}</div>
        </div>
        <div className='date-info'>
        <div className='start-date'>Start Date: {project.start_date}</div>
        <div className='due-date'>Due Date: {project.due_date}</div>
        </div>
      </div>
    </div>
    <hr/>
    <div className='visualisation'>
    
      <div className='project-performance'>
      <DrawDoughnut
            title="Project Progress"
            position="right"
            align="center"
            label={["Overdue", "Ongoing Projects", "Upcoming deadline", "completed"]}
            values={[overdue_tasks.length, progressTasks.length, todoTasks.length, completeTasks.length]}
            titpos="top"
            titalgn="start"
          />
    </div>
    <div className='project-line-chart'>
    <DrawLine dates={dates} earned_value={normalizedEarned} spent={normalizedSpent} />
    </div>
    </div>
    
    <UpdateProject id={_id}  title={project.title} description={project.description}  budget={project.budget} spent={project.spent} start_date={project.start_date} due_date={project.due_date} priority={project.priority} client={project.client} tasklist={project.tasklist} members={project.members} img={project.img}/>
    <h4 className='task-overview-title'>Tasks Overview</h4>
    <div className='tasks-overview'>
      <div className='tasks-wrapper justify-content-around'>
        <div className='todo-list'>
          <h4 className='todo-list-title todo'>To Do</h4>
          <AddTask id={_id} />
          <div className='todo-wrapper'>
          {todoTasks.map((task, i) => (
            
        <Task key={i} id={_id} task_id={task._id}  title={task.title} description={task.description} spent={task.spent} start_date={task.start_date} status={task.status} assigned={task.assigned} priority={task.priority} project_id={task.project_id} due_date={task.due_date} />
      ))}

            
          </div>
        </div>
        <div className='todo-list'>
          <h4 className='todo-list-title onprogress'>On Progress</h4>
          <AddTask id={_id} />
          <div className='todo-wrapper'>
          {progressTasks && Array.isArray(progressTasks) ? (
            progressTasks.map((task, i) => (
              <Task key={i} id={_id} task_id={task._id} title={task.title} description={task.description} spent={task.spent} start_date={task.start_date} status={task.status} assigned={task.assigned} priority={task.priority} project_id={task.project_id} due_date={task.due_date} />
  ))
) : (
  <p>No tasks available.</p>
)}

          </div>
        </div>
        <div className='todo-list'>
          <h4 className='todo-list-title  completed'>Completed</h4>
          <AddTask id={_id} />
          <div className='todo-wrapper'>
          {completeTasks && Array.isArray(completeTasks) ? (
            completeTasks.map((task, i) => (
              <Task key={i} id={_id} task_id={task._id} title={task.title} description={task.description} spent={task.spent} start_date={task.start_date} status={task.status} assigned={task.assigned} priority={task.priority} project_id={task.project_id} due_date={task.due_date} />
  ))
) : (
  <p>No tasks available.</p>
)}

          </div>
        </div>
      </div>
    </div>
    
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

    <button type="button" className="btn btn-success btn-lg w-50" data-bs-toggle="modal" data-bs-target="#updateproject">Update</button>
    <button type="button" class="btn btn-danger btn-lg w-50">Delete</button>


  </div>
  )
}

export default Project

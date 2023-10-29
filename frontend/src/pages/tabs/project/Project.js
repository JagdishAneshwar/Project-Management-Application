import React, {useState, useEffect, useRef, useContext} from 'react'
import projectContext from "../../../context/project/projectContext"
import DrawDoughnut from "../../../features/graph/dough/DrawDoughnut"
import Profile from "../../../features/component/circular-profile/Profile"
import DrawLine from '../../../features/graph/line/DrawLine';
import Task from '../../../features/component/task-card/Task';
import { useLocation } from "react-router-dom";
import "./_project.scss";

const Project = () => {
  const location = useLocation();
    const {id,
      title,
      description,
      budget,
      spent,
      start_date,
      due_date} = location.state;

      const data = [ "12","30", "2"]
      const context = useContext(projectContext);
      const { getTasks, createTask, tasks } = context;
      const ref = useRef(null);
      const refClose = useRef(null);
      
    useEffect(() => {
      getTasks()
    });
    
      const [task, settask] = useState({
        title:"", 
        project_id:id,
        description:"",  
        spent:null,  
        due_date:"", 
        priority:"", 
        done:"false"
      })

      const onChange = (e) => {
        settask({ ...task, [e.target.name]: e.target.value });
        };

        const onClickCreateTask = (e) => {
          ref.current.click();
      createTask(task.title, task.description, task.spent, task.done, task.project_id, task.priority, task.due_date);   
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
    <div className='tasks-overview'>
      <h4 className='task-overview-title'>Tasks Overview</h4>
      <div className='tasks-wrapper d-flex flex-row justify-content-around'>
        <div className='todo-list'>
          <h4 className='todo-list-title'>To Do</h4>
          <div className='todo-wrapper'>
          { tasks && tasks.map((task,i) => {
          return ( <Task title={task.title} desc={task.description} id={tasks[i]._id} /> );
        })
      }
            
          </div>
        </div>
        <div className='todo-list'>
          <h4 className='todo-list-title'>To Do</h4>
          <div className='todo-wrapper'>
          { tasks && tasks.map((task) => {
          return ( <Task title={task.title} desc={task.description} /> );
        })
      }
          </div>
        </div>
        <div className='todo-list'>
          <h4 className='todo-list-title'>To Do</h4>
          <div className='todo-wrapper'>
          { tasks && tasks.map((task) => {
          return ( <Task title={task.title} desc={task.description} /> );
        })
      }
          </div>
        </div>
      </div>
    </div>
    <button type="button" className="btn btn-success btn-lg w-50" ref={ref} data-bs-toggle="modal" data-bs-target="#update">Update</button>
    <button type="button" class="btn btn-danger btn-lg w-50">Delete</button>

  <div class="task-modal modal fade" tabindex="-1" id="update" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h5 class="modal-title">Add task</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form className="add-task">
          <div className="mb-3">
            <label htmlfor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="title"
              onChange={onChange}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={onChange}

            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Cost Spent
            </label>
            <input
              type="number"
              className="form-control"
              name="spent"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Due Date
            </label>
            <input
              type="date"
              className="form-control"
              name="due_date"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Priority
            </label>
            <input
              type="text"
              className="form-control"
              name="priority"
              onChange={onChange}

            />
          </div>
        </form>
      </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"  ref={refClose}>Close</button>
        <button type="button" class="btn btn-primary"  onClick={onClickCreateTask} >Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
  )
}

export default Project
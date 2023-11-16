import React, {useState, useEffect, useRef, useContext} from 'react'
import projectContext from "../../../context/project/projectContext"
import "./_tasks.scss";

const Tasks = ({id}) => {
  const [task, settask] = useState({
    title:"", 
    project_id:id,
    description:"",  
    spent:"",  
    due_date:"", 
    priority:"", 
    status:""
  })
  const context = useContext(projectContext);
  const { createTask, updateProject } = context;
  const refClose = useRef(null);
  const onChange = (e) => {
    settask({ ...task, [e.target.name]: e.target.value });
    };

    const onClickCreateTask = (e) => {
  
  createTask(task.title, task.description, task.spent, task.status, task.project_id, task.priority, task.due_date); 
  updateProject(task.project_id,task.title)
};
  return (
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
  );
}

export default Tasks
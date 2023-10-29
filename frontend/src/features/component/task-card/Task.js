import React, {useState, useEffect, useContext} from 'react'
import projectContext from "../../../context/project/projectContext"
import "./_task.scss"

const Task = ({title, desc, id}) => {

  const context = useContext(projectContext);
  const { deleteTask } = context;

  const onClickRemoveTask = () => {
    deleteTask(id)
    };

  return (
    <div className='task-card d-flex flex-column mb-3 mt-3'>
      <button type="button" class="btn-close btn-close-danger"  onClick={onClickRemoveTask} data-bs-dismiss="modal" aria-label="Close"></button>
        <div className='task-info'>
            <h5 className='task-header'>{title}</h5>
            <p className='task-value'>{desc}</p>
        </div>
        <div className='task-footer  d-flex flex-row justify-content-between'>
          <div className='task-card-priority'>Priority: High</div>
          <div className='task-card-due'>Due Date: 12-10-2022</div>
        </div>

    </div>
  )
}

export default Task
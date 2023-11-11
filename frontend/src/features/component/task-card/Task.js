import React, { useState, useEffect, useContext } from 'react';
import projectContext from '../../../context/project/projectContext';
import './_task.scss';

const Task = ({ title, due_date, desc, priority, id, status }) => {
  const context = useContext(projectContext);
  const { deleteTask, updateTask } = context;

  const onClickRemoveTask = () => {
    deleteTask(id);
  };

  const [selectedStatus, setSelectedStatus] = useState(status);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    updateTask(id, newStatus);
  };

  return (
    <div className='task-card d-flex flex-column mb-3 mt-3' key={id}>
      <button
        type='button'
        className='btn-close btn-close-danger'
        onClick={onClickRemoveTask}
        data-bs-dismiss='modal'
        aria-label='Close'
      ></button>
      <div className='task-info'>
        <label htmlFor='title'>Title</label>
        <h5 className='task-header'>{title}</h5>
        <label htmlFor='desc'>Description</label>
        <p className='task-value'>{desc}</p>
      </div>
      <div className='task-footer  d-flex flex-row justify-content-between'>
        <div className='task-card-priority'>Priority: {priority}</div>
        <div className='task-card-due'>Due Date: {due_date}</div>
        <div className='task-status'>
          <label htmlFor='status'>Status</label>
          <select value={selectedStatus} onChange={handleStatusChange}>
            <option value='todo'>To Do</option>
            <option value='progress'>In Progress</option>
            <option value='complete'>Complete</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Task;

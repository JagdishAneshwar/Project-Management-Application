import React, { useState, useEffect, useContext } from 'react';
import projectContext from '../../../context/project/projectContext';
import './_task.scss';

const Task = ({ id, task_id, title, description, spent, start_date, status, assigned, priority, project_id, due_date }) => {
  const context = useContext(projectContext);
  const { deleteTask, updateTask } = context;

  const onClickRemoveTask = () => {
    deleteTask(task_id);
  };

  const [selectedStatus, setSelectedStatus] = useState(status);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setSelectedStatus(newStatus);
    updateTask(task_id, title, description, spent, start_date, newStatus, assigned, priority, project_id, due_date);
  };

  let statusColor;
  switch (selectedStatus) {
    case 'todo':
      statusColor = 'grey';
      break;
    case 'progress':
      statusColor = '#F6D155';
      break;
    case 'complete':
      statusColor = '#81D7B5';
      break;
    default:
      statusColor = 'grey';
  }

  let priorityColor;
  switch (priority) {
    case 'low':
      priorityColor = '#34BB78';
      break;
    case 'medium':
      priorityColor = 'yellow';
      break;
    case 'high':
      priorityColor = '#C5120B';
      case 'High':
        priorityColor = '#C5120B';
      break;
    default:
      priorityColor = 'grey';
  }


  const taskStyle = {
    borderLeft: `8px solid ${statusColor}`,
  };

  const priorityStyle = {
    color: `${priorityColor}`,
  };

  return (
    <div className='task-card d-flex flex-column mb-3 mt-3' key={id} style={taskStyle}>
      <div className='task-info'>
        <p className='task-header'><b>{title}</b></p>
        <p className='task-value'>{description}</p>
      </div><hr/>
      <div className='task-footer  d-flex flex-row justify-content-between'>
        <div className='task-card-priority'>Priority: <br/><span style={priorityStyle}><b>{priority}</b></span></div>
        <div className='task-card-due'>Due Date:<br/><span style={{color:'black'}}>{due_date}</span></div>
        <div className='task-status'>
          <label htmlFor='status'>Status</label><br/>
          <select value={selectedStatus} onChange={handleStatusChange} className='status-selector-task'>
            <option value='todo' className='val-status'>To Do</option>
            <option value='progress' className='val-status'>In Progress</option>
            <option value='complete' className='val-status'>Complete</option>
          </select>
        </div>
      </div>
      <button
        type='button'
        className='btn delete-task btn-danger'
        onClick={onClickRemoveTask}
        data-bs-dismiss='modal'
        aria-label='Close'
      >
        Remove
      </button>
    </div>
  );
};

export default Task;

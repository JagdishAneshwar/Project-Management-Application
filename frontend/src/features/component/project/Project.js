import React, {useContext} from 'react'
import { useNavigate } from 'react-router-dom'

import projectContext from '../../../context/project/projectContext'
import "./_project.scss"

const Project = ({_id, title, description, start_date, due_date, client, tasks, members, img,  priority, due, risks, budget, spent}) => {
    const Context = useContext(projectContext)
    const navigate = useNavigate();
    const {toComponentB} = Context;

    const total_tasks_of_project = tasks.filter((task)=>{
        return(
            task.project_id === _id
        )
    })

    const completed_tasks = total_tasks_of_project.filter((task)=>{
        return(task.status === "complete")
    })

    

    const progress = (completed_tasks.length / total_tasks_of_project.length) * 100
    
  return (
    <div className='project-by-priority d-flex flex-row justify-content-between' key={_id}  onClick={() => { toComponentB({  _id,  title, 
        description,
        budget,
        spent, 
        start_date, 
        due_date, 
        priority, 
        client, 
        tasklist: tasks,
        members, 
        img}, navigate);}}             >
        <div className='project-title'>{title}</div>
        <div className='project-progression  d-flex flex-column p-3'>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{width: `${progress || 0}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
            </div>
            <div className='project-task-priority  d-flex flex-row justify-content-between p-3'>
                <div className='project-task-completed'>{completed_tasks.length} tasks completed out of {total_tasks_of_project.length}</div>
                <div className='project-priority'>Priority: {priority}</div>
            </div>
        </div>
        <div className='project-date-risk  d-flex flex-column p-3'>
            <div className='project-due'>Due: {due}</div>
            <div className='project-risks'>Risks: {risks}</div>
        </div>
        <div className='project-budget-spent  d-flex flex-column p-3'>
            <div className='project-budget'>Budget: {budget}</div>
            <div className='project-spent'>Spent: {spent}</div>
        </div>
    </div>
  )
}

export default Project
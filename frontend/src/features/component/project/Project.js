import React from 'react'
import "./_project.scss"

const Project = ({title, progress, total_tasks, completed_task, priority, due, risks, budget, spent}) => {
  return (
    <div className='project-by-priority d-flex flex-row justify-content-between'>
        <div className='project-title'>{title}</div>
        <div className='project-progression  d-flex flex-column p-3'>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style={{width: `${progress}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">{progress}%</div>
            </div>
            <div className='project-task-priority  d-flex flex-row justify-content-between p-3'>
                <div className='project-task-completed'>{completed_task} tasks completed out of {total_tasks}</div>
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
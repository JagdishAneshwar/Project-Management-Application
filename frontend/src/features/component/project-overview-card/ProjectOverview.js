import React, {useContext} from 'react'
import projectContext from "../../../context/project/projectContext"
import { useNavigate } from "react-router-dom";


const ProjectOverview = ({ 
  _id,
  title, 
  description,
  budget,
  spent, 
  start_date, 
  due_date, 
  priority, 
  client,   
  tasks,
  members, 
  img}) => {

  const context = useContext(projectContext);
  const navigate = useNavigate();
  const { deleteProject, toComponentB } = context;


  const onClickRemoveProject= () => {
    
    deleteProject(_id)
    };


  return ( 
    <div 
    class=" project-card-overview" key={_id}  onClick={() => { toComponentB({  _id,  title, 
    description,
    budget,
    spent, 
    start_date, 
    due_date, 
    priority, 
    client, 
    tasks,
    members, 
    img}, navigate);}}                 
    >
      
    <div class="project-overview">
      {/* <img src={require("../../../res/image/img3.jpg")}
      onClick={() => { toComponentB({  id,  title, 
    description,
    budget,
    spent, 
    start_date, 
    due_date, 
    priority, 
    client, 
    tasks,
    members, 
    img}, navigate);}} 
      class="card-img project-card-img " alt="..."/> */}
      <div class="card-body project-overview-body" >
        <h5 class="card-title project-overview-title">{title}</h5><hr/>
        <p class="card-text project-overview-description">{description}</p>
        <p className='project-overview-priority'>Priority: <b>{priority}</b></p>
        <button type="button" class="btn-danger w-100 project-overview-remove" onClick={onClickRemoveProject} data-bs-dismiss="modal" aria-label="Close">Remove</button>
      </div>
      
    </div>
  </div>
  )
}

export default ProjectOverview
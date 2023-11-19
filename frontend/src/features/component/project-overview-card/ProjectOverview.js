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
    tasklist: tasks,
    members, 
    img}, navigate);}}                 
    >
      <button type="button" class="btn-close btn-close-danger" onClick={onClickRemoveProject} data-bs-dismiss="modal" aria-label="Close"></button>
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
      <div class="card-body" >
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}</p>
      </div>
      <p className='p-3'>Priority: {priority}</p>
    </div>
  </div>
  )
}

export default ProjectOverview
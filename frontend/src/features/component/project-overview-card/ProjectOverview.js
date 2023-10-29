import React, {useContext} from 'react'
import projectContext from "../../../context/project/projectContext"
import { useNavigate } from "react-router-dom";


const ProjectOverview = ({project}) => {
  const context = useContext(projectContext);
  const navigate = useNavigate();
  const { deleteProject, toComponentB } = context;
  const onClickRemoveProject= () => {
    deleteProject(project._id)
    };

    console.log(project)

  return ( 
    <div 
    class=" project-card-overview" key={project._id}                   
    >
      <button type="button" class="btn-close btn-close-danger" onClick={onClickRemoveProject} data-bs-dismiss="modal" aria-label="Close"></button>
    <div class="project-overview">
      <img src={require("../../../res/image/img3.jpg")}
      onClick={() => { toComponentB(project, navigate);}} 
      class="card-img project-card-img " alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{project.title}</h5>
        <p class="card-text">{project.description}</p>
      </div>
      <p className='p-3'>Priority: {project.priority}</p>
    </div>
  </div>
  )
}

export default ProjectOverview
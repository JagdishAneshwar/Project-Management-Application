import React, {useState, useEffect, useRef, useContext} from 'react'
import ProjectOverview from '../../../features/component/project-overview-card/ProjectOverview';
import projectContext from "../../../context/project/projectContext"
import Select from 'react-select'
import "./_projects.scss";

const Projects = () => {
  const context = useContext(projectContext);
  const { projects, createProject, getProject } = context;

  useEffect(() => {
    getProject()
  },[]);
  const ref = useRef(null);
  const refClose = useRef(null);

  const [project, setproject] = useState({
      title: "",
      description:"",
      budget: "",
      client: "",
      members:"",
      priority:"",
      start_date:"",
      due_date:""
  })
    const data = [
    {
      value: 1,
      label: "cerulean"
    },
    {
      value: 2,
      label: "fuchsia rose"
    },
    {
      value: 3,
      label: "true red"
    },
    {
      value: 4,
      label: "aqua sky"
    },
    {
      value: 5,
      label: "tigerlily"
    },
    {
      value: 6,
      label: "blue turquoise"
    }
  ];

  const [selectedValue, setSelectedValue] = useState([]);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  }

  const onChange = (e) => {
      setproject({ ...project, [e.target.name]: e.target.value });
    };

    const onClickCreateProject = (e) => {
      ref.current.click();
      createProject(project.title, project.description, project.budget, project.client, {members:selectedValue}, project.priority, project.start_date, project.due_date);
    };
  return (
    <div className='projects'>
    <div class="task-modal modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h5 class="modal-title">Add Project</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <form className="add-task">
            <div className="mb-3">
              <label htmlfor="exampleInpuTitle" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                name="title"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputDescription" className="form-label">
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
              <label htmlFor="exampleInputBudget" className="form-label">
                Budget
              </label>
              <input
                type="number"
                className="form-control"
                name="budget"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputClient" className="form-label">
                Client
              </label>
              <input
                type="text"
                className="form-control"
                name="client"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputAssignTo" className="form-label">
              Assign to
            </label>
            <Select
        className="dropdown"
        placeholder="Select Option"
        value={data.filter(obj => selectedValue.includes(obj.value))} // set selected values
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
        isMulti
        isClearable
      />
          </div>
          <div className="mb-3">
              <label htmlFor="exampleInputDueDate" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                className="form-control"
                name="start_date"
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputDueDate" className="form-label">
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
              <label htmlFor="exampleInputPriority" className="form-label">
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
          <button type="button" class="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onClick={onClickCreateProject}>Create Project</button>
        </div>
      </div>
    </div>
  </div>
   {/* main-part */}
      <h4>Projects</h4>
     <div class="all-project-lists row row-cols-md-3">
        { projects && projects.map((project) => {
          return (<ProjectOverview key={project._id} project={project} /> );
        })
      }
      <div class=" project-card-overview">
        <div class="project-overview">
        <img src={require("../../../res/image/add.png")} alt="heelo" type="button" ref={ref} class="create-project-button" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Projects
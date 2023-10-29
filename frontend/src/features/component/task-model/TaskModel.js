import React, {useState} from 'react'
import "./_taskmodel.scss"
import {Multiselect} from 'multiselect-react-dropdown'


const TaskModel = () => {

    const data = [
        {Name: 'Jagdish', id:1},
        {Name: 'Venkatesh', id:2},
        {Name: 'Shivraj', id:3},
        {Name: 'Nil', id:4}
    ]

    const [options] = useState(data)

  return (
<div class="task-modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form className="add-task">
          <div className="mb-3">
            <label htmlfor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"

            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="password"

            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Cost Spent
            </label>
            <input
              type="text"
              className="form-control"
              name="password"

            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Assigned Date
            </label>
            <input
              type="text"
              className="form-control"
              name="password"

            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Due Date
            </label>
            <input
              type="text"
              className="form-control"
              name="password"

            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Priority
            </label>
            <input
              type="text"
              className="form-control"
              name="password"

            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Assign to
            </label>
            <Multiselect className='multi' options={options} displayValue="Name" placeholder="" avoidHighlightFirstOption='true' style={{
    chips: {
      background: 'red'
      
    },
    option: {
        color: 'hsl(235, 33%, 27%)'
      },
      
    searchBox: {
      border: 'none',
      'border-bottom': '1px solid white',
      'border-radius': '0px'
    },
  }} />
          </div>
        </form>
      </div>
      <div class="modal-footer border-0">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default TaskModel
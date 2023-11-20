import React,{useState, useRef} from "react";
import EmployeeCard from "../../../features/component/employee-card/EmployeeCard";

import "./_employee.scss";

const Employee = () => {
  const refClose = useRef();
  const ref = useRef(null);
  const [employees, setemployees] = useState({
    name: "", 
    age:"", 
    gender:"", 
    role:"", 
    birthdate:"",
    start_date:"", 
    end_date:"", 
    phone_no:"", 
    salary:"", 
    email:""
  })

  const onClickAddEmployee = () =>{
    ref.current.click();
    
  }

  const data = [
    {
      value: 1,
      label: "Male"
    },
    {
      value: 2, 
      label: 'Female'
    },
    {value:3, label: 'Other'},
    {value:4, label: 'Prefer not to say'}
]

  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  }

  const onChange = (e)=>{
    setemployees({...employees, [e.target.name]: e.target.value})
  }
  return (
    <div className="employee-section">
      <h1>Employees</h1>
      <button type="button" class="btn btn-primary add-employee" data-bs-toggle="modal" data-bs-target="#addEmployee">Add New Employee</button>
      <div class="employee-modal modal fade" id="addEmployee" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header border-0">
        <h5 class="modal-title">Add Employee</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form className="add-task">
          <div className="mb-3">
            <label htmlfor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Role
            </label>
            <input
              type="text"
              className="form-control"
              name="role"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Gender
            </label>
            <Select className='dropdown text-dark'
            value={data.filter(obj => selectedValue.includes(obj.value))}
            options={data}
            onChange={handleChange}  
            isMulti
            isClearable
            placeholder="Select Option"
             />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Date Of Birth
            </label>
            <input
              type="date"
              className="form-control"
              name="birthdate"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
              Status
            </label>
            <input
              type="text"
              className="form-control"
              name="status"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
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
            <label htmlFor="exampleInputPassword1" className="form-label">
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
        <button type="button" class="btn btn-primary" onClick={onClickAddEmployee}>Save changes</button>
      </div>
    </div>
  </div>
  </div>
      <div className="total-employee">Total Employee: 150</div>
      <hr/>
      <div className="employee-lists d-flex flex-column">
        <EmployeeCard
          img={require("../../../res/image/img1.jpg")}
          name="Jagdish Aneshwar"
          role="Developer"
          age="20"
          gender="Male"
          email="aneshwarjagdish@gmail.com"
          phone="8928393524"
        />
        <EmployeeCard
          img={require("../../../res/image/img2.jpg")}
          name="Ramesh Sharma"
          role="Designer"
          age="36"
          gender="Male"
          email="ramesh@gmail.com"
          phone="1234567890"
        />
        <EmployeeCard
          img={require("../../../res/image/img4.jpg")}
          name="Nitin Gupta"
          role="Tester"
          age="20"
          gender="Male"
          email="aneshwarjagdish@gmail.com"
          phone="111111111"
        />
        <EmployeeCard
          img={require("../../../res/image/img5.jpg")}
          name="Shrikant Shetty"
          role="Developer"
          age="20"
          gender="Male"
          email="aneshwarjagdish@gmail.com"
          phone="789159763"
        />
        <EmployeeCard
          img={require("../../../res/image/img6.jpg")}
          name="Priyanka Tiwari"
          role="designer"
          age="46"
          gender="female"
          email="priya@gmail.com"
          phone="4561935896"
        />
                <EmployeeCard
          img={require("../../../res/image/img2.jpg")}
          name="Ramesh Sharma"
          role="Designer"
          age="36"
          gender="Male"
          email="ramesh@gmail.com"
          phone="1234567890"
        />
        <EmployeeCard
          img={require("../../../res/image/img4.jpg")}
          name="Nitin Gupta"
          role="Tester"
          age="20"
          gender="Male"
          email="aneshwarjagdish@gmail.com"
          phone="111111111"
        />
        <EmployeeCard
          img={require("../../../res/image/img5.jpg")}
          name="Shrikant Shetty"
          role="Developer"
          age="20"
          gender="Male"
          email="aneshwarjagdish@gmail.com"
          phone="789159763"
        />
      </div>
    </div>
  );
};

export default Employee;

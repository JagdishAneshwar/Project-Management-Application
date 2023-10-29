const fetchuser = require("../middleware/fetchuser");
const Employee = require("../models/Employee");
const express = require("express");
const router = express.Router();


// ----------------------------------- Route 1: add new employee using POSt: "api/employee/addEmployee"
router.post("/addEmployee", async (req, res) => {
  const {
    name, 
    age, 
    gender, 
    address, 
    start_date, 
    end_date, 
    phone_no, 
    salary, 
    email,
    password: secPassword,
  } = req.body;

  try {
    const employee = new Employee({
      name, 
      age, 
      gender, 
      address, 
      start_date, 
      end_date, 
      phone_no, 
      salary, 
      email,
      password: secPassword,
    });

    const saveClothe = await employee.save();
    res.send(saveClothe);

  } catch (err) {
    console.error(err.message);
    res.json({ error: "internal Server Error", err: err.message });
  }
});

// ------------------------------------------ Route 2: update an existin employeeusing PUT: "api/employees/update" -login required
router.put("/updateEmployee/:id", fetchuser, async (req, res) => {
  const {       
    name, 
    age, 
    gender, 
    address, 
    start_date, 
    end_date, 
    phone_no, 
    salary, 
    email } = req.body;

  // create new employee object
  const newEmployee = {};
  if (name) {
    newEmployee.name = name;
  }
  if (age) {
    newEmployee.age = age;
  }
  if (gender) {
    newEmployee.gender = gender;
  }
  if (address) {
    newEmployee.address = address;
  }
  if (start_date) {
    newEmployee.start_date = start_date;
  }
  if (end_date) {
    newEmployee.end_date = end_date;
  }
  if (phone_no) {
    newEmployee.phone_no = phone_no;
  }
  if (salary) {
    newEmployee.salary = salary;
  }
  if (email) {
    newEmployee.email = email;
  }


  // find the employee to be updated and update it
  var employee = await Employees.findById(req.params.id);
  if (!employee) {
    return res.status(404).send("not found");
  }

  if (employee.user.toString() !== req.user.id) {
    return res.status(401).send("Unauthorized");
  }

  try {
    employee = await Employees.findByIdAndUpdate(
      req.params.id,
      { $set: newEmployee },
      { new: true }
    );
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    res.json({ error: "internal Server Error", err: err.message });
  }
});


// ---------------------------------- Route 3: get all employees using GET: "api/employee/allEmployeeDetails"
router.get("/allEmployeeDetails/:id", fetchuser, async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
  } catch (err) {
    console.error(err.message);
    res.json({ error: "internal Server Error", err: err.message });
  }
});


// ------------------------------------ Route 4: delete an existing employee using DELETE: "api/employee/deleteEmployee" -login required
router.delete("/removeEmployee/:id", fetchuser, async (req, res) => {

    // find the employee to be updated and update it
    var employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).send("Not found");
    }
  
    if (employee.user.toString() !== req.user.id) {
      return res.status(401).send("Unauthorized");
    }
  
    try {
      employee = await Employee.findByIdAndDelete(req.params.id);
      res.send(employee);
    } catch (err) {
      console.error(err.message);
      res.json({ error: "internal Server Error", err: err.message });
    }
  });



module.exports = router;
import React from "react";
import EmployeeCard from "../../../features/component/employee-card/EmployeeCard";
import "./_employee.scss";

const Employee = () => {
  return (
    <div className="employee-section">
      <h3>Employees</h3>
      <div className="total-employee">Total Employee: 150</div>
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

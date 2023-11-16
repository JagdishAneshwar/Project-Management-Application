import React, { useState } from "react";
import Button from "../../features/component/button/Button";
import "./_register.scss";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  let history = useNavigate();
    const [credentials, setCredentials] = useState({
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
  });

  const onChange = (e) => {
      setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const { name, email, password, passwordConfirmation } = credentials;

    const onClickSignUp = async (e) => {
      e.preventDefault();
      
      const res = await fetch("https://project-management-application-ch9v.onrender.com/api/auth/createuser", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, passwordConfirmation }),
      });
      const data = await res.json();
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        history("/");
      }
    };

  return (
    <section className="register-section">
    <div className="row g-0 register-container">
    <img className="register-img" src={require("../../res/image/img3.jpg")} alt="login" />
    <div className="register col-6">
      <h3 className="register-title">SignUp</h3>
      <form className="auth" onSubmit={onClickSignUp}>
        <div className="mb-3">
          <label htmlfor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlfor="passwordConfirmation" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={onChange}
          />
        </div>
        <Button value="Register"/>
      </form>
      <p>Already registered? &nbsp;         
          <Link className="login-link" to="/login">
            Login
          </Link>
          </p>
          </div>
    </div>
    </section>
  );
};

export default Signup;
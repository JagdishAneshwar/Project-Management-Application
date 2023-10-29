import React, { useState } from "react";
import "./_login.scss";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../features/component/button/Button";

const Login = () => {
  let history = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = credentials;

  const onClickLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("https://project-management-application-ch9v.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      history("/dashboard");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

    return (
      <section className="login-section">
      <div className="row g-0 login-container">
        <img className="login-img" src={require("../../res/image/img3.jpg")} alt="login" />
        <div className="login col-6">
        <h3 className="login-title">Login</h3>
        <form className="auth" onSubmit={onClickLogin}>
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
            <label htmlFor="exampleInputPassword1" className="form-label">
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
          <Button value="Login"/>
        </form>
        <p>Not Signed Up? &nbsp; 
        <Link className="register-link" to="/register">
             Sign Up
          </Link>
          </p>
          </div>
      </div>
      </section>
    );
  };
export default Login
import React from "react";
import "./_home.scss";
import Profile from "../../features/component/circular-profile/Profile";
import Dashboard from "../tabs/dashboard/Dashboard";
import Projects from "../tabs/projects/Projects";
import Employee from "../tabs/employee/Employee";
import Project from "../tabs/project/Project";

const Home = () => {
  return (
    <section className="home">
      <nav className="navbar container navbar-expand-md fixed-bottom">
          <ul className="nav navbar-nav ml-auto d-flex align-items-center justify-content-between">
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <a className="nav-link" href="project" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">
                Home
              </a>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <a className="nav-link" href="#link2"  id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                Projects
              </a>
            </li>
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <a className="nav-link" href="#link2" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                Employees
              </a>
            </li>
          </ul>
      </nav>
      <div class="tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab">
          <Dashboard/>
        </div>
        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
          <Projects/>
        </div>
        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
          <Employee/>
        </div>
        </div>
    </section>
  );
};

export default Home;

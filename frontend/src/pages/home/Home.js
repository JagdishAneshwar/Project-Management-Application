import React from "react";
import "./_home.scss";
import Profile from "../../features/component/circular-profile/Profile";
import Dashboard from "../tabs/dashboard/Dashboard";
import Projects from "../tabs/projects/Projects";
import Employee from "../tabs/employee/Employee";
import Project from "../tabs/project/Project";

const Home = () => {
  return (
    <section className="home ">
      <div className="vertical-nav d-flex flex-column align-items-start">

      <div class="parent-nav d-flex align-items-start">
      <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
      <div className="profile">
        <Profile/>
        </div>
      <div class="navbtn nav-link" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" type="button" role="tab" aria-controls="v-pills-dashboard" aria-selected="true">dashboard</div>
      <div class="navbtn nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">projects</div>
      <div class="navbtn nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">employee</div>
      </div>
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
    </div>
      </div>
    </section>
  );
};

export default Home;

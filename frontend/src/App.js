
import './_App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import ProjectState from './context/project/ProjectState';
import Dashboard from './pages/dashboard/Dashboard';
import Project from './pages/tabs/project/Project';

function App() {
  return (
    <>
    <ProjectState>
          <Router>
            <Routes>
              <Route exact path="/" element={<Register />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/project" element={<Project />} />
            </Routes>
          </Router>
    </ProjectState>
    </>
  );
}

export default App;
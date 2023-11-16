
import './_App.scss';
import { HashRouter, Routes, Route } from "react-router-dom";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import ProjectState from './context/project/ProjectState';
import Home from './pages/home/Home';
import Project from './pages/tabs/project/Project';

function App() {
  return (
    <>
    <ProjectState>
          <HashRouter>
            <Routes>
              <Route exact path="/" element={<Register />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/dashboard" element={<Home />} />
              <Route exact path="/project" element={<Project />} />
            </Routes>
          </HashRouter>
    </ProjectState>
    </>
  );
}

export default App;

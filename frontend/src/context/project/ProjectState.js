import React, { useState } from "react";
import projectContext from "./projectContext";

const ProjectState = (props) => {
  const notesInitial = [];
  const notesInitial2 = [];
  const [projects, setproject] = useState(notesInitial);
  const [tasks, settask] = useState(notesInitial2);
  const host = "http://localhost:5000";

  const getProject = async () => {
    // API calls
    const response = await fetch(
      "http://localhost:5000/api/project/allProjectDetails",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    setproject(json);
  };

  const createProject = async (
    title,
    description,
    budget,
    client,
    members,
    priority,
    start_date,
    due_date
  ) => {
    const response = await fetch(`${host}/api/project/addProject`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
        budget,
        client,
        spent: "0",
        completed: false,
        tasks: "not assigned",
        img: "null",
        members,
        priority,
        start_date,
        due_date,
      }),
    });

    const project = await response.json();
    setproject(project);
  };

  const createTask = async (
    title,
    description,
    spent,
    done,
    project_id,
    priority,
    due_date
  ) => {
    const response = await fetch(`${host}/api/task/addTask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
        spent,
        priority,
        done,
        project_id,
        due_date,
      }),
    });
    const task = await response.json();
    settask(task);
  };

  const getTasks = async () => {
    // API calls
    const response = await fetch(
      `${host}/api/task/allTaskDetails`,
      {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    settask(json);
  };

    // Delete task function
    const deleteTask = async (_id) => {
      // API calls
      const response = await fetch(`${host}/api/task/removeTask/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      
      // eslint-disable-next-line
      const json = await response.json();
      console.log(json)
      const newTasks = tasks.filter((task) => {
        return task._id !== _id;
      });
      settask(newTasks);
    };
    
    const deleteProject = async (_id) => {
      // API calls
      const response = await fetch(`${host}/api/project/removeProject/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token"),
        },
      });
      
      // eslint-disable-next-line
      const json = await response.json();
      console.log(json)
      const newProjects = projects.filter((project) => {
        return projects._id !== _id;
      });
      setproject(newProjects);
    };


  const updateProject = async (
    id,
    title,
    description,
    budget,
    spent,
    start_date,
    due_date
  ) => {
    // API calls
    const response = await fetch(`${host}/api/project/updateProject/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
        budget,
        spent,
        start_date,
        due_date,
      }),
    });
    // eslint-disable-next-line
    const json = await response.json();

    let newProject = JSON.parse(JSON.stringify(projects));
    // Logic to edit note
    for (let index = 0; index < newProject.length; index++) {
      const element = newProject[index];
      if (element._id === id) {
        newProject[index].title = title;
        newProject[index].description = description;
        newProject[index].budget = budget;
        newProject[index].spent = spent;
        newProject[index].start_date = start_date;
        newProject[index].due_date = due_date;
        break;
      }
    }
    setproject(newProject);
  };

  const toComponentB = (project, navigate) => {
    console.log(project);
    navigate(`/project`, {
      state: {
        id: project._id || "",
        title: project.title || "",
        description: project.description || "",
        budget: project.budget || "",
        spent: project.spent || "",
        start_date: project.start_date || "",
        due_date: project.due_date || "",
      },
    });
  };

  return (
    <projectContext.Provider
      value={{
        projects,
        setproject,
        createProject,
        getProject,
        toComponentB,
        updateProject,
        createTask,
        getTasks,
        deleteTask,
        deleteProject,
        tasks,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;

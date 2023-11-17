import React, { useState } from "react";

import projectContext from "./projectContext";

const ProjectState = (props) => {
  const notesInitial = [];
  const notesInitial2 = [];
  const [projects, setproject] = useState(notesInitial);
  const [projecthistory, setprojecthistory] = useState(notesInitial);
  const [tasks, settask] = useState(notesInitial2);
  const host = "https://project-management-application-ch9v.onrender.com";
  // const host = "http://localhost:5000"

  const getProject = async () => {
    // API calls
    const response = await fetch(
      `${host}/api/project/allProjectDetails`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          // 'Access-Control-Allow-Origin':'*',
          "auth-token": localStorage.getItem("token"),
        },
      }
    );
    const json = await response.json();
    setproject(json);
  };
  const getProjectHistory = async (_id) => {
    // API calls
    const response = await fetch(
      `${host}/api/project/projecthistory/${_id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin':'*',
          "auth-token": localStorage.getItem("token"),
        },
        
      }
    );
    const json = await response.json();
    setprojecthistory(json);
  };

  const createProject = async (
    title, 
    description,
    budget,
    spent, 
    start_date, 
    due_date, 
    priority, 
    client, 
    tasks,
    members, 
    img
  ) => {
    const response = await fetch(`${host}/api/project/addProject`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*',
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
        budget,
        client,
        spent: "0",
        tasks: "",
        img: "",
        members,
        priority,
        start_date,
        due_date
      }),
    });

    const project = await response.json();
    setproject(project);
  };

  const createTask = async (
    title, description, spent, start_date, status, assigned, priority, project_id, due_date
  ) => {
    const response = await fetch(`${host}/api/task/addTask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*',
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title, description, spent, start_date, status, assigned, priority, project_id, due_date
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
        'Access-Control-Allow-Origin':'*',
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
          'Access-Control-Allow-Origin':'*',
          "auth-token": localStorage.getItem("token"),
        },
      });
      
      // eslint-disable-next-line
      const json = await response.json();
      
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
          'Access-Control-Allow-Origin':'*',
          "auth-token": localStorage.getItem("token"),
        },
      });
      
      // eslint-disable-next-line
      const json = await response.json();
      
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
    due_date, 
    priority, 
    client, 
    tasks,
    members, 
    img
  ) => {
    // API calls
    
    const response = await fetch(`${host}/api/project/updateProject/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*',
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
        budget,
        spent,
        start_date,
        due_date,
        priority, 
        client, 
        tasks,
        members, 
        img  }),
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
        newProject[index].priority=priority;
        newProject[index].client=client;
        newProject[index].tasks=tasks;
        newProject[index].members=members;
        newProject[index].img=img
        break;
      }
    }
    
    setproject(newProject);
  };

  const updateTask = async (
    task_id, title, description, spent, start_date, status, assigned, priority, project_id, due_date
  ) => {
    // API calls
    const response = await fetch(`${host}/api/task/updateTask/${task_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*',
        "auth-token": localStorage.getItem("token"),
      },
      body: JSON.stringify({
         title, description, spent, start_date, status, assigned, priority, project_id, due_date
      }),
    });
    // eslint-disable-next-line
    const json = await response.json();
    
  
    let newTasks = JSON.parse(JSON.stringify(tasks));
    // Logic to edit task
    for (let index = 0; index < newTasks.length; index++) {
      const element = newTasks[index];
      if (element._id === task_id) {
        newTasks[index].title = title;
        newTasks[index].description = description;
        newTasks[index].spent = spent;
        newTasks[index].start_date = start_date;
        newTasks[index].status = status;
        newTasks[index].assigned = assigned;
        newTasks[index].priority = priority;
        newTasks[index].project_id = project_id;
        newTasks[index].due_date = due_date;
        break;
      }
    }
    settask(newTasks);
  };
  

  const toComponentB = ({  _id,  title, 
    description,
    budget,
    spent, 
    start_date, 
    due_date, 
    priority, 
    client, 
    tasklist: tasks,
    members, 
    img}, navigate) => {
    
    navigate(`/project`, {
      state: {  _id,  title, 
        description,
        budget,
        spent, 
        start_date, 
        due_date, 
        priority, 
        client, 
        tasklist: tasks,
        members, 
        img},
    });
  };

  return (
    <projectContext.Provider
      value={{
        projects,
        projecthistory,
        setproject,
        createProject,
        getProject,
        toComponentB,
        updateProject,
        createTask,
        getTasks,
        deleteTask,
        getProjectHistory,
        deleteProject,
        updateTask,
        tasks,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;

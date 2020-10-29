import React from "react";

import classes from "./Projects.module.css";
import Project from "./Project/Project";
import chatme from "../../assests/chatme.png";
import paltan from "../../assests/Projects/paltan.png";
import niflix from "../../assests/Projects/niflix.png";
import myrecipes from "../../assests/Projects/my-recipes.png";
import todo from "../../assests/Projects/todo.png";
import beach from "../../assests/Projects/beach-resort.png";

import tonote from "../../assests/Projects/tonote.png";

const projectsList = [
  {
    name: "Chatme",
    img: chatme,
    website: "https://vibrant-meninsky-10b91f.netlify.app/",
  },
  {
    name: "Paltan Services",
    img: paltan,
    website: "http://www.paltanservices.com",
  },
  {
    name: "Niflix",
    img: niflix,
    website: "https://angry-curran-712880.netlify.app/",
  },
  {
    name: "My-Recipes",
    img: myrecipes,
    website: "https://quizzical-archimedes-ff9d98.netlify.app/",
  },
  {
    name: "Beach Resort",
    img: beach,
    webiste: "https://determined-minsky-7613fd.netlify.app/",
  },
  {
    name: "TO-DO",
    img: todo,
    website: "https://pensive-allen-6428cd.netlify.app/",
  },
  // {
  //   name: "JavaScript Calculator",
  //   img: calculator,
  //   website: ""
  // },
  {
    name: "toNote",
    img: tonote,
    website: "https://practical-hodgkin-fa18f0.netlify.app/",
  },
];

const projects = () => {
  return (
    <div id="projects" className={classes.ProjectsContent}>
      <h2>Projects</h2>
      <div className={classes.Projects}>
        {projectsList.map((project) => {
          return (
            <Project
              viewProject={project.website}
              name={project.name}
              image={project.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default projects;

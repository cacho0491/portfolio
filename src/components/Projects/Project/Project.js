import React from "react";

import classes from "./Project.module.css";

const project = (props) => {
  return (
    <a
      className={classes.ProjectContent}
      href={props.viewProject}
      target="__blank"
    >
      <div
        style={{ backgroundImage: "url(" + props.image + ")" }}
        className={classes.Project}
      ></div>
      <p className={classes.ProjectName}>{props.name}</p>
    </a>
  );
};

export default project;

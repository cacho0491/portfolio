import React from "react";

import classes from "./Footer.module.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const footer = () => {
  return (
    <footer className={classes.Footer}>
      <p>Carlos Correa | Copyrights &copy; 2020 </p>
      <div>
        <a href="https://github.com/cacho0491" target="__blank">
          {" "}
          <AiFillGithub className={classes.Icon} />
        </a>

        <AiFillLinkedin className={classes.Icon} />
      </div>
    </footer>
  );
};

export default footer;

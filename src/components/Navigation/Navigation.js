import React from "react";

import classes from "./Navigation.module.css";
import { AiOutlineClose } from "react-icons/ai";

const navigation = (props) => {
  return (
    <div className={classes.Nav} onClick={props.close}>
      <div className={classes.Close}>
        <AiOutlineClose onClick={props.close} />
      </div>
      <nav className={classes.Navigation}>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default navigation;

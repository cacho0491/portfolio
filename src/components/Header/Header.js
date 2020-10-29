import React from "react";

import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const header = (props) => {
  return (
    <div className={classes.Header}>
      <p>Carlos Correa</p>
      <GiHamburgerMenu onClick={props.navButton} />
    </div>
  );
};

export default header;

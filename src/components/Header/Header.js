import React from "react";

import classes from "./Header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const header = (props) => {
  return (
    <div className={classes.Header}>
      <p>Carlos Correa</p>
      <GiHamburgerMenu
        style={{ marginRight: "15px" }}
        onClick={props.navButton}
      />
    </div>
  );
};

export default header;

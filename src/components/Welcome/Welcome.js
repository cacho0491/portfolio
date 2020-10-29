import React from "react";

import classes from "./Welcome.module.css";

const welcome = () => {
  return (
    <div id="home" className={classes.Welcome}>
      <div className={classes.LeftPanel}>
        <p>Hello World</p>
        <p className={classes.HeroMainText}>I'm Carlos</p>
        <p className={classes.HeroSubText}>
          A front-end developer who loves to design and code beautiful content.
        </p>
      </div>
      <div className={classes.RightPanel}>
        <div className={classes.HeroImage}></div>
      </div>
    </div>
  );
};

export default welcome;

import React from "react";

import classes from "./About.module.css";
import { FaReact } from "react-icons/fa";
import { SiRedux, SiGatsby } from "react-icons/si";
import Xs from "../../assests/xs.svg";

const about = () => {
  return (
    <div id="about" className={classes.About}>
      <h2>A little bit about me</h2>
      <div className={classes.Content}>
        <div className={classes.Left}>
          <div className={classes.Item}>
            <FaReact className={classes.Icon} style={{ color: "#00D8FF" }} />
            <p>React</p>
          </div>
          <div className={classes.Item}>
            <SiGatsby className={classes.Icon} style={{ color: "#F7DF1E" }} />
            <p>Gatsby JS</p>
          </div>
          <div className={classes.Item}>
            <SiRedux className={classes.Icon} style={{ color: "#764ABC" }} />
            <p>Redux</p>
          </div>
          <div className={classes.Item}>
            <img src={Xs} className={classes.IconXd} alt="XD Icon" />
            <p>Adobe XD</p>
          </div>
        </div>
        <div className={classes.Right}>
          <h4>Hello and welcome to my site!</h4>
          <p>
            Hello and welcome to my site! My name is <span>Carlos Correa</span>{" "}
            and I am a Junior Front-End Developer. My coding journey started a
            few years ago when I took up a Computer Science course. Ever since
            then, I have been coding everyday and learning new technologies
            though online platforms. Whenever I am not coding or reading, it’s
            because my little one is demanding my full attention!
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;

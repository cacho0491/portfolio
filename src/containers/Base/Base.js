import React, { Component } from "react";

import classes from "./Base.module.css";
import Header from "../../components/Header/Header";
import Welcome from "../../components/Welcome/Welcome";
import About from "../../components/About/About";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

class Base extends Component {
  state = {
    navOpen: false,
  };
  showNavHandler = () => {
    this.setState({ navOpen: !this.state.navOpen });
  };
  render() {
    return (
      <div className={classes.Base}>
        <Header navButton={this.showNavHandler} />
        {this.state.navOpen ? <Navigation close={this.showNavHandler} /> : null}
        <Welcome />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Base;

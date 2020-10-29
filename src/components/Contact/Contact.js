import React from "react";

import classes from "./Contact.module.css";
import ContactForm from "./Form/ContactForm";

const contact = () => {
  return (
    <div id="contact" className={classes.Contact}>
      <h2>Drop me a line</h2>
      <div className={classes.ContactContent}>
        <div className={classes.ContactInfo}>
          <h5>Contact Information</h5>
          <p>carloscorrea91@hotmail.com</p>
        </div>
        <div className={classes.Line}></div>
        <div className={classes.ContactForm}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default contact;

import React from "react";

import { useFormik } from "formik";

import classes from "./ContactForm.module.css";

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 3) {
    errors.name = "Name should be at least 3 characters long.";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length < 20) {
    errors.message = "Message must be 20 characters long.";
  }
  return errors;
};

const ContactForm = () => {
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: (e) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...e }),
      })
        .then(() => alert("Success!"))
        .catch((error) => alert(error));

      e.preventDefault();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={classes.ContactForm}>
      <label htmlFor="name">Name</label>
      <input
        className={classes.Input}
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className={classes.ErrorMessage}>{formik.errors.name}</div>
      ) : null}
      <label htmlFor="email">Email</label>
      <input
        className={classes.Input}
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className={classes.ErrorMessage}>{formik.errors.email}</div>
      ) : null}
      <label htmlFor="message">Message</label>
      <input
        className={classes.Input}
        id="message"
        name="message"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.message}
        onBlur={formik.handleBlur}
      />
      {formik.touched.message && formik.errors.message ? (
        <div className={classes.ErrorMessage}>{formik.errors.message}</div>
      ) : null}

      <button type="submit" className={classes.SendButton}>
        SEND
      </button>
    </form>
  );
};

export default ContactForm;

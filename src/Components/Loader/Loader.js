import React from "react";
import classes from "./Loader.module.css";

function Loader({ message = "Loading..." }) {
  return (
    <div className={classes.loader_container}>
      <div className={classes.spinner}></div>
      <p className={classes.message}>{message}</p>
    </div>
  );
}

export default Loader;

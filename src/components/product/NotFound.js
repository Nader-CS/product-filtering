import React from "react";
import classes from "./NotFound.module.scss";
const NotFound = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>No items found</h1>
      </div>
    </div>
  );
};

export default NotFound;

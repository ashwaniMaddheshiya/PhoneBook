import React from "react";
import { Link } from "react-router-dom";

import styles from "./Button.module.css";

const Button = (props) => {
  if (props.to) {
    return (
      <Link to={props.to} exact={props.exact} className={styles.button}>
        {props.children}
      </Link>
    );
  }
  return (
    <button
      className={styles.button}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;

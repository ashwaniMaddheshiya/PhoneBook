import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <span>
          <Link to="/" className={styles.customLink}>PhoneBook</Link>
        </span>
      </div>
      <div className={styles.right}>
        <span>
          <Link to="/addContact" className={styles.customLink}>Add Contact</Link>
        </span>
        <span>Search</span>
      </div>
    </div>
  );
};

export default Navbar;

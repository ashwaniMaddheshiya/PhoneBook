import React from "react";
import styles from "./Forms.module.css";

const Forms = () => {
  return (
      <div className={styles.center}>
        <h1>Add Contact</h1>
        <form>
          <div className={styles.inputbox}>
            <input type="text" required="required" placeholder="Recipeint Name" />
          </div>
          <div className={styles.inputbox}>
            <input type="text" required="required" placeholder="Contact Number" />
          </div>
          <div className={styles.inputbox}>
            <input type="button" value="submit" />
          </div>
        </form>
      </div>
  );
};

export default Forms;

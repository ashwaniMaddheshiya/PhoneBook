import React from "react";
import Card from "./Card";
import Button from "./Button";
import styles from "./CardItem.module.css";

const CardItem = (props) => {
  const deleteHandler = async () => {
    try {
      await fetch(`http://localhost:5000/api/contacts/${props.id}`, {
        method: "DELETE",
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card>
      <div className={styles.info}>
        <div>Name: {props.name}</div>
        <div>Contact: {props.contact}</div>
      </div>
      <div className={styles.btn}>
        <Button to={`/updateContact/${props.id}`}>Edit</Button>
        <Button onClick={deleteHandler}>Delete</Button>
      </div>
    </Card>
  );
};

export default CardItem;

import React from "react";

import CardItem from "./CardItem";
import Card from "./Card";
import styles from "./CardList.module.css";
import Button from "./Button";

const CardList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <Card>
          <h2>No Contacts found</h2>
          <Button>Add Contact</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className={styles.cardlist}>
      {props.items.map((user) => (
        <div className={styles.card} key={user._id}>
          <CardItem
            id={user._id}
            name={user.name}
            contact={user.contact}
          />
        </div>
      ))}
    </ul>
  );
};

export default CardList;

import React, { useState, useEffect } from "react";
import styles from "../components/Forms.module.css";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const UpdateContact = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [isNumber,setIsNumber] = useState(true);
  const contactId = useParams().contactId;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/contacts/${contactId}`
        );
        const data = await response.json();
        setName(data.contact.name);
        setContact(data.contact.contact);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [contactId]);

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const contactChangeHandler = (event) => {
    const contact = event.target.value;
    setContact(contact);
    if(contact.trim().length > 10 || contact.trim().length < 10){
      setIsNumber(false);
    }
    else{
      setIsNumber(true);
    }
  };

  const submitFormHandler = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/contacts/${contactId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            contact: contact,
          }),
        }
      );
      console.log(response);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.center}>
      <h1>Add Contact</h1>
      <form>
        <div className={styles.inputbox}>
          <input
            type="text"
            required="required"
            placeholder="Recipeint Name"
            onChange={nameChangeHandler}
            value={name}
          />
        </div>
        <div className={styles.inputbox}>
          <input
            type="text"
            required="required"
            placeholder="Contact Number"
            onChange={contactChangeHandler}
            value={contact}
          />
        </div>
        {/* <div className={styles.inputbox}>
          <input type="button" value="submit" onClick={submitFormHandler} />
        </div> */}
        <div>
          <Button disabled={!name || !isNumber} onClick={submitFormHandler}>Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateContact;

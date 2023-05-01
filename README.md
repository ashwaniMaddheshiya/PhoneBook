# PhoneBook
PhoneBook is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that allows users to add and manage contact information.

## Features
 - Add contact information (name, phone number, email address)
 - View a list of all contacts
 - Edit existing contact information
 - Delete existing contacts
 - Technologies Used
 - MongoDB for the database
 - Express.js for the backend API
 - React for the frontend user interface
 - Node.js for the server runtime environment
 

## Installation
To run the iTour application locally, follow these steps:

 - Clone the repository to your local machine.
 - Navigate to the `frontend` folder and run `npm install` to install the client-side dependencies.
 - Navigate to the `backend` folder and run `npm install` to install the server-side dependencies.
 - Start the server by running `npm start` in the `backend` folder.
 - Start the client by running `npm start` in the `frontend` folder.
 - Set up the MongoDB database (see below)
 - Start the application: npm start
 
### Setting up the MongoDB Database
 - Create a MongoDB Atlas account (https://www.mongodb.com/cloud/atlas/register)
 - Create a new cluster and follow the setup instructions
 - Create a new database called phonebook
 - Create a new collection called contacts
 - Create a .env file and add your mongo uri there.
 
## Usage
 - Open your web browser and go to http://localhost:3000
 - Add a new contact by clicking the "Add Contact" button and filling in the contact information
 - View all contacts by clicking the "View All Contacts" button
 - Edit existing contact information by clicking the "Edit" button next to the contact you want to edit
 - Delete a contact by clicking the "Delete" button next to the contact you want to delete

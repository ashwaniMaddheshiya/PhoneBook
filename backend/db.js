const mongoose = require("mongoose");
const dotenv = require('dotenv')
dotenv.config();

const DB_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    // Replace <DB_NAME> with your actual database name
    const conn = await mongoose.connect(DB_URI);
  } catch (err) {
    console.error({message: err.message});
  }
};

module.exports = connectDB;
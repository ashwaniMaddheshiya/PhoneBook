const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
});

module.exports = mongoose.model("Contact", contactSchema);

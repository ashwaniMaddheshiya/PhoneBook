const httpError = require("../models/http-error");
const Contact = require("../models/contact");

const getContacts = async (req, res, next) => {
  let contacts;
  try {
    contacts = await Contact.find();
  } catch (err) {
    const error = new httpError(
      "Could not fetch contact details, Please try again",
      500
    );
    return next(error);
  }
  res.json({ contacts });
};

const getContactsById = async (req, res, next) => {
  const contactId = req.params.cid;
  let contact;
  try {
    contact = await Contact.findById( contactId);
  } catch (err) {
    const error = new httpError(
      "Could not fetch contact details, Please try again",
      500
    );
    return next(error);
  }
  res.json({ contact });
};

const addContact = async (req, res, next) => {
  const { contact, name } = req.body;

  let existingContact;
  try {
    existingContact = await Contact.findOne({ contact: contact });
  } catch (err) {
    const error = new httpError(
      "Could not add contact, Please try again later",
      500
    );
    return next(error);
  }

  if (existingContact) {
    const error = new httpError("Contact already exist", 500);
    return next(error);
  }

  const createContact = new Contact({
    name,
    contact,
  });

  try {
    await createContact.save();
  } catch (err) {
    const error = new httpError(
      "Could not create contact, Please try again later",
      500
    );
    return next(error);
  }

  res.status(201).json({ createContact });
};

const updateContact = async (req, res, next) => {
  const contactID = req.params.cid;
  const { contact, name } = req.body;

  let existingContact;
  try {
    existingContact = await Contact.findOne({ _id: contactID });
  } catch (err) {
    const error = new httpError(
      "Could not fetch contact with the provided id, please try again",
      500
    );
    return next(error);
  }

  if (!existingContact) {
    const error = new httpError(
      "Could not find contact with this contactId",
      500
    );
    return next(error);
  }

  existingContact.contact = contact;
  existingContact.name = name;

  try {
    await existingContact.save();
  } catch (err) {
    const error = new httpError(
      "Could not update the contact, please try again later",
      500
    );
    return next(error);
  }

  res.status(200).json({ existingContact });
};

const deleteContact = async (req, res, next) => {
  const contactID = req.params.cid;

  let contactToDelete;
  try {
    contactToDelete = await Contact.findByIdAndDelete({ _id: contactID });
  } catch (err) {
    const error = new httpError(
      "Could not delete the contact, Please try again",
      500
    );
    return next(error);
  }

  res.status(200).json({ message: "Contact deleted successfully" });
};

exports.getContacts = getContacts;
exports.getContactsById = getContactsById;
exports.addContact = addContact;
exports.updateContact = updateContact;
exports.deleteContact = deleteContact;

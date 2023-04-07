const express = require("express");
const router = express.Router();
const contactCtrl = require("../controllers/contact-controllers");

router.get("/:cid", contactCtrl.getContactsById);

router.get("/", contactCtrl.getContacts);


router.post("/", contactCtrl.addContact);

router.patch("/:cid", contactCtrl.updateContact);

router.delete("/:cid", contactCtrl.deleteContact);

module.exports = router;

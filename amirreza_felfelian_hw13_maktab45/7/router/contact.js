const express = require('express');
const contact = express.Router();
const path = require('path');



contact.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '../public/contact/contact.html'));
})








module.exports = contact;
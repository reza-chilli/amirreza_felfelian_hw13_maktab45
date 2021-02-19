const express = require('express');
const about = express.Router();
const path = require('path');


about.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '../public/about/about.html'));
})





module.exports = about;
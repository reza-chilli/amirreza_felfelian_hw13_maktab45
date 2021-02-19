const express = require('express');
const home = express.Router();
const path = require('path');


home.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '../public/home/home.html'));
})









module.exports = home;
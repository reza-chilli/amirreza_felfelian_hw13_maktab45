const express = require('express');
const admin = express.Router();
const path = require('path');


admin.get('/',function(req, res) {
  res.send('hello from admin');
})

admin.get('/getallusers',function(req, res) {
  res.sendFile(path.join(__dirname, '..', 'users.json'));
})




module.exports = admin;
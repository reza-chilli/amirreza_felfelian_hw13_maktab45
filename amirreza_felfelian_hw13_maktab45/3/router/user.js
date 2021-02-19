const express = require('express');
const user = express.Router();

user.get('/', function(req, res) {
  res.send('hello');
})

user.get('/user1',function(req, res) {
  res.send(`you are in ${req.url}`);
})
user.get('/user2',function(req, res) {
  res.send(`you are in ${req.url}`);
})
user.get('/user3',function(req, res) {
  res.send(`you are in ${req.url}`);
})

module.exports = user;
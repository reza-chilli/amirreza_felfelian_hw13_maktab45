const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const user = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })



user.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'../public/index.html'));
})
user.post('/getUser',urlencodedParser , function(req, res) {
  fs.readFile(path.join(__dirname, '..', 'users.json'), 'utf-8', function(err, data) {
    if (err) return console.log(err);

    data = JSON.parse(data);
    let myUser = data.find((el)=> {
      return el.Username === req.body.username;
    })
    if (myUser === undefined) {
      res.send('no such user');
    } else {
      res.send(myUser);
    }
  })

})






module.exports = user;
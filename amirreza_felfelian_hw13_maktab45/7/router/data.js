const express = require('express');
const fs = require('fs');
const path = require('path');


const data = express.Router();

let dataFile = fs.readFileSync(path.join(__dirname, '../data.json'), 'utf-8');
data.get('/',function(req, res) {
  res.send(dataFile);
});



module.exports = data;
const express = require('express');
const car = express.Router();
const path = require('path');

car.get('/car', function(req ,res) {
  res.sendFile(path.join(__dirname, '../public/car/index.html'));
})








module.exports = car;
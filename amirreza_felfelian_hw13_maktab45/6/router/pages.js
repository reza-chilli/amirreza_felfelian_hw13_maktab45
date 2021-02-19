const express = require('express');
const pages = express.Router();
const path = require('path');

pages.get('/page:page', function(req, res) {
  res.sendFile(path.join(__dirname,'..','public',`index${req.params.page}.html`));
})




module.exports = pages;
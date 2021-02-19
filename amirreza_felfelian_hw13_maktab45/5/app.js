const express = require('express');
const app = express();
const pages = require('./router/pages.js');



app.use('/pages',pages);






app.listen(8080,function() {
  console.log('app is running on port 8080....');
})
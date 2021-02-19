const express = require('express');
const app = express();
const user = require('./router/user.js');

app.use('/',user);


app.listen(8080,function() {
  console.log('app is running on port 8080');
})
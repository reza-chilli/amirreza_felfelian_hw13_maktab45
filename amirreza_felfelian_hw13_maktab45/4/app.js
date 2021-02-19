const express = require('express');
const app = express();
const path = require('path');

const user = require('./router/user.js');
const admin = require('./router/admin.js');

app.use(express.static(path.join(__dirname, 'public')));


app.use('/user',user);
app.use('/admin',admin);
app.get('/', function(req, res) {
  res.send('hello from root');
})



app.listen(8080, function() {
  console.log('app running on port 8080');
})
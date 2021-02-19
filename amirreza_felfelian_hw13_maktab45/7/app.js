const express = require('express');
const app = express();
const path = require('path');

const home = require('./router/home');
const contact = require('./router/contact');
const about = require('./router/about');
const car = require('./router/car');
const data = require('./router/data');

app.use(express.static(path.join(__dirname,'public')));

app.use('/home',home);
app.use('/contact',contact);
app.use('/about',about);
app.use('/car',car);
app.use('/data',data);









app.listen(8080, function() {
  console.log('app is running on port 8080');
})
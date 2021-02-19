const express = require('express');
const app = express();

app.get('/', function(req,res) {
  res.send('hello World');
})

app.listen(8080, function() {
  console.log('app is running on port 8080');
});

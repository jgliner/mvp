var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/nanza');

require('./config/middleware.js')(app, express);
//require('./config/routes.js')(app, express);

app.listen(1337);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/www/index.html')
});

module.exports = app;

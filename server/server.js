var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

var port = process.env.PORT || 1337

mongoose.connect('mongodb://localhost/nanza');

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(port);
console.log('Listening on', port);

module.exports = app;

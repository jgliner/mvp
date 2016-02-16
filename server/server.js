var express = require('express');
var mongoose = require('mongoose');
var methodOverride = require('method-override');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var socketUtil = require('./config/util.js')(io);

var port = process.env.PORT || 1337;

mongoose.connect('mongodb://localhost/nanza');

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

server.listen(port);
console.log('Listening on', port);

module.exports = app;

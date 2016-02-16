var morgan = require('morgan');
var bodyParser = require('body-parser');
var populateQuestions = require('./initContent.js');
var db = require('../db/questionizerControllers.js');

module.exports = function(app, express) {
  app.use(function(req, res, next) {
    populateQuestions(function(data) {
      db.populatePrompts(req, res, next, data);
      next();
    });
  });
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
}
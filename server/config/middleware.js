var morgan = require('morgan');
var bodyParser = require('body-parser');
var populateQuestions = require('./initContent.js');

module.exports = function(app, express) {
  app.use(function(req, res, next) {
    populateQuestions(function() {
      next();
    });
  });
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../../client'));
}
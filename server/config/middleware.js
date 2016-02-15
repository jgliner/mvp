var morgan = require('morgan')

module.exports = function(app, express) {
  app.use(express.static(__dirname + '/../../client'));
  app.use(morgan('dev'));
}
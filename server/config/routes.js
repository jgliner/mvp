var questionizer = require('../questionizerController')

module.exports = function(app, express) {
  app.get('/api/questions/', questionizer.pickOne);
  app.post('/api/questions/', questionizer.addNew);
};
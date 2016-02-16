var questionizer = require('../db/questionizerControllers.js');

module.exports = function(app, express) {
  app.get('/api/users/', questionizer.pickOne);
  app.post('/api/users/', questionizer.addNewUser);
};
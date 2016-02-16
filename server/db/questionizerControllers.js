var db = require('./questionizerModels.js');
var Prompts = db.prompts;
var User = db.user;
var Prompts = db.prompts;
var Promise = require('bluebird');

module.exports = {

  populatePrompts: function(req, res, next, data) {
    data = JSON.parse(data)['prompts'];
    data.forEach(function(question) {
      Promise.promisifyAll(Prompts.create({'question': question}))
    });
  },

  addNewUser: function(req, res, next) {
    var newUser = {
      username: req.body.username
    }
    console.log('addNewUser', newUser)
    return Promise.promisifyAll(User.create(newUser)
    .then(function(user) {
      console.log(user);
    })
  )},

  pickOne: function(req, res, next) {
    console.log('insidepickone')
  }

}
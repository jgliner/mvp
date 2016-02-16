var db = require('./questionizerModels.js');
var Prompts = db.prompts;
var User = db.user;
var Promise = require('bluebird');
var rando = require('mongoose-simple-random')

module.exports = {

  populatePrompts: function(req, res, next, data) {
    data = JSON.parse(data)['prompts'];
    data.forEach(function(question) {
      Promise.promisifyAll(Prompts.create({'question': question}))
    });
  },

  selectPrompt: function() {
    return Prompts.findOneRandom(function(err, res) {
      if (err) {console.error(err);}
      else {
        console.log(res);
      }
    })
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
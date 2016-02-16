var db = require('./questionizerModels.js');
var Prompts = db.prompts;
var User = db.user;
var Promise = require('bluebird');

module.exports = {

  addNewUser: function(req, res, next) {
    var newUser = {
      username: req.body.username
    }
    console.log('addNewUser', newUser)
    return Promise.promisifyAll(User.create(newUser)
    .then(function(user) {
      console.log(user)
    })
  )},

  pickOne: function(req, res, next) {
    console.log('insidepickone')
  }

}
var db = require('./questionizerModels.js');
var Prompts = db.prompts;
var User = db.prompts;
var Promise = require('bluebird');

module.exports = {

  addNewUser: function(req, res, next) {
    console.log('addNewUser', req.body)
    var newUser = {
      username: req.body.username
    }
    return Promise.promisify(User.UserSchema(newUser)
    .then(function(user) {
      console.log(user)
    })
  )},

  pickOne: function(req, res, next) {
    console.log('insidepickone')
  }

}
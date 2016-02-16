var mongoose = require('mongoose');
var rando = require('mongoose-simple-random');

var PromptStorage = new mongoose.Schema({
  question: String
}).plugin(rando);

var UserSchema = new mongoose.Schema({
  username: String,
  submission: String,
  votes: {type: Number, default: 0},
  timestamp: Date
});

module.exports.prompts = mongoose.model('prompts', PromptStorage);
module.exports.user = mongoose.model('user', UserSchema);
var mongoose = require('mongoose')

var PromptStorage = new mongoose.Schema({
  question: String
});

var UserSchema = new mongoose.Schema({
  username: String,
  submission: String,
  votes: Number,
  timestamp: Date
});

module.exports.prompts = mongoose.model('prompts', PromptStorage);
module.exports.user = mongoose.model('user', UserSchema);
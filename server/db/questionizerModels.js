var mongoose = require('mongoose')

var PromptStorage = new mongoose.schema({
  question: String
});

var UserSchema = new mongoose.schema({
  username: String,
  submission: String,
  votes: Number,
  timestamp: Date
});

module.exports = mongoose.model('prompts', PromptStorage);
module.exports = mongoose.model('user', UserSchema);
var Promise = require('bluebird');
var fs = require('fs');
var mongoose = require('mongoose');
var path = require('path');

module.exports = function(cb) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path.join(__dirname+'/../../prompts.js'), 'utf8', function(err, data) {
      if (err) {reject(err);}
      else {
        resolve(data)
      }
    })
  })
  .then(function(data) {
    cb(data)
  })
}
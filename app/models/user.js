var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var mongoose = require('mongoose');

  var userSchema = new mongoose.Schema({

  username: String,
  password: String
  });
var User = mongoose.model('User', userSchema);


module.exports = User;

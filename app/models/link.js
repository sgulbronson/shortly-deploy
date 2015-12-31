var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');


   // this.on('creating', function(model, attrs, options){
   //    var shasum = crypto.createHash('sha1');
   //    shasum.update(model.get('url'));
   //    model.set('code', shasum.digest('hex').slice(0, 5));
   //  });

  var linkSchema = new mongoose.Schema({

  url: String,
 password: Number,
  code: String
  });
var Link = mongoose.model('Link', linkSchema);



module.exports = Link;

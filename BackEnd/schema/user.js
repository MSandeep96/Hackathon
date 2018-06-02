var mongoose = require('mongoose');
var db = require('./db');

var user = mongoose.Schema({

  name: String,
  password: String,
  moves: Number,
  time: Number,
  currConfig: String,
  currTime: Number,
  currMoves: Number 
  
});

module.exports = user;

//console.log('schema: ', user);


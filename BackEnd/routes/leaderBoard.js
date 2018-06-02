var express = require('express');
var router = express.Router();
var user = require('user');
/* GET users listing. */
router.get('/', function(req, res, next) {
  user.find({}).sort('time').limit(2).exec(function(err, docs) {res.send('respond with a resource')});
  });

module.exports = router;


var User = mongoose.model('User', user);

var user1 = new User({ name: 'user1', password: 'user1', moves:'2', time:'23' });

var user2 = new User({ name: 'user2', password: 'user2', moves:'4', time:'26' });

var user3 = new User({ name: 'user3', password: 'user3', moves:'10', time:'30' });

var user4 = new User({ name: 'user4', password: 'user4', moves:'3', time:'24' });

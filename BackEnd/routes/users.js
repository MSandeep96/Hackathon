var express = require('express');
var router = express.Router();
var pick = require('lodash.pick');
var User = require('../models/User');
var authenticate = require('../middleware/authenticate');

router.post('/', function(req, res, next) {
  var user = pick(req.body, ['username', 'password']);
  User.checkUser(user)
  .then(doc => {
    req.body = doc;
    next();
  })
  .catch(next);
});

router.use(function(req,res){
  var user = req.body;
  user.genToken().then((token) => {
    res.header('x-auth', token);
    if(user.login){
      res.redirect('/game');  //goes to get
    }
    res.send(user);
  });
});


module.exports = router;

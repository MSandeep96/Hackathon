var express = require('express');
var router = express.Router();
var User = require('../models/User');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/leaderboard', function(req,res,next) {
  User.getLeaderBoard().then((leaderboard)=>{
    res.send(leaderboard);
  });
});

module.exports = router;

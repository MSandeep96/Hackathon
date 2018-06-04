var express = require('express');
var router = express.Router();
var User = require('../models/User');
var solver = require('../algoutil/solveboard');
var pick = require('lodash.pick');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/leaderboard', function(req,res,next) {
  User.getLeaderBoard().then((leaderboard)=>{
    res.send(leaderboard);
  });
});

router.post('/solve', function(req,res,next){
  solver(req.body.config)
  .then((ans)=>{
    res.send(ans);
  })
  .catch((err)=>{
    console.log(err);
  });
});

module.exports = router;

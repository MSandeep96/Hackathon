var express = require('express');
var router = express.Router();
var pick = require('lodash.pick');
var User = require('../models/User');
var authenticate = require('../middleware/authenticate');

router.use(authenticate);

router.get('/',function(req,res,next){
  req.body.user.getUserConfig().then((doc)=>{
    res.send(doc);
  });
});

router.post('/',function(req,res,next){
  var config = pick(req.body,['config','time','moves']);
  req.body.user.storeUserConfig(config).then(()=>{
    res.sendStatus(200);
  });
});

router.post('/complete',function(req,res,next){
  var config = pick('time', 'moves');
  req.body.user.gameCompleted(config).then(()=>{
    res.sendStatus(200);
  });
});

module.exports = router;
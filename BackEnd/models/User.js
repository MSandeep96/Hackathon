var mongoose = require('../config/mongo');
var createError = require('http-errors');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var pick = require('lodash.pick');

var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    token: String
  }],
  bestMoves: Number,
  bestTime: Number,
  currConfig: String,
  currTime: Number,
  movesMade: String
});

class UserClass {

  static checkUser(user) {
    return this.findOne({ username: user.username })
      .then(doc => {
        if(!doc){
          return new UserClass(user).save();
        }else{
          login(doc);
        }
      });
  }

  static login(user){
    return bcrypt.compare(user.password,doc.password)
      .then((res)=>{
        if(res){
          doc.login = true;
          return doc;
        }
        else
          throw createError(401,'Incorrect password');
      });
  }

  genToken() {
    var user = this;
    var token = jwt.sign({ _id: user._id.toHexString() }, 'secret').toString();
    user.tokens.push({ token });
    return user.save().then(() => {
      return token;
    });
  }

  static authenticate(userJwt) {
    return new Promise((resolve, reject) => {
      jwt.verify(userJwt, 'secret', function (err, decoded) {
        if (err) {
          reject(createError(401,'Token invalid'));
        }else{
          User.findById(decoded._id).then(resolve);
        }
      });
    });
  }

  static getLeaderBoard(){
    return User.find({}).sort('bestTime').limit(10)
      .select('username bestTime bestMoves').exec();
  }

  storeUserConfig(boardConfig){
    var user = this;
    user.currConfig = boardConfig.config;
    user.currTime = boardConfig.time;
    user.movesMade = boardConfig.moves;
    return user.save();
  }

  getUserConfig(){
    return pick(this,['currConfig','currTime','movesMade']);
  }

  gameCompleted(boardConfig){
    var user = this;
    if(user.bestTime > boardConfig.time){
      user.bestTime = boardConfig.time;
      user.bestMoves = boardConfig.moves;
    }
    return user.save();
  }

}

userSchema.loadClass(UserClass);

userSchema.pre('save', function(next){
  var user = this;
  if(user.isModified('password')){
    bcrypt.hash(user.password).then((hash)=>{
      user.password = hash;
      next();
    });
  }else{
    next();
  }
});

var User = mongoose.model('User',userSchema);
module.exports = User;
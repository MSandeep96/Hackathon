var mongoose = require('mongoose');
mongoose.connect('mongodb://hackathon:hackathon123@ds245680.mlab.com:45680/hackathon');
mongoose.Promise = global.Promise;
mongoose.connection.on('open', ()=>{
  console.log('DB connected');
}).catch(err=>{
  console.log(err);
});
module.exports = mongoose;
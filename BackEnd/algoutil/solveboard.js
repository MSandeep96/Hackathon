var execFile = require('child_process').execFile;
var path = require('path');

var solveBoard = function(boardConfig) {
  return new Promise((resolve,reject) => {
    var start = new Date();
    execFile('Puzzle.exe', [boardConfig],{cwd: 'algoutil'}, (err,stdout,stderr)=>{
      var end = new Date();
      if(err){
        reject(err);
      }
      resolve(stdout,end.getTime() - start.getTime());
    });
  });
};

module.exports = solveBoard;
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
      resolve({
        moves: convertAns(stdout),
        time: end.getTime() - start.getTime()
      });
    });
  });
};

var solve = function(config){
  let promArr = [];
  for(let i=0;i<4;i++){
    promArr.push(solveBoard(config));
  }
  return Promise.race(promArr);
}

function convertAns(str){
  let ans = "";
  for(let i=0;i<str.length;i++){
    ans += getOpp(str[i]);
  }
  return ans;
}

function getOpp(dir){
  switch(dir){
    case "u": return "s";
    case "d": return "w";
    case "l": return "d";
    case "r": return "a";
  }
}

module.exports = solve;
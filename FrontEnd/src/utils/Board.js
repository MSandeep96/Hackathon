export default class Board {

  constructor() {
    this.board = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, -1]];
    this.bpi = 3;
    this.bpj = 3;
  }

  static checkAndMove(brd, a){
    if (Board.validMoves(brd).indexOf(a) === -1)
      return;
    Board.makeMove(brd,a);
  }

  static actualPosX(num){
    if(num === -1) return 3;
    return ~~((num - 1) / 4);
  }

  static actualPosY(num){
    if(num === -1) return 3;
    return ((num - 1) % 4);
  }

  static isComplete(brd){
    for(let i=0;i<4;i++){
      for(let j=0;j<4;j++){
        if(Board.actualPosX(brd.board[i][j]) !== i || Board.actualPosY(brd.board[i][j]) !== j)
          return false;
      }
    }
    return true;
  }

  static makeMove(brd, a) {
    if (a === 'd') {
      brd.board[brd.bpi][brd.bpj] = brd.board[brd.bpi][brd.bpj - 1];
      brd.board[brd.bpi][brd.bpj - 1] = -1;
      brd.bpj = brd.bpj - 1;
    }
    if (a === 'a') {
      brd.board[brd.bpi][brd.bpj] = brd.board[brd.bpi][brd.bpj + 1];
      brd.board[brd.bpi][brd.bpj + 1] = -1;
      brd.bpj = brd.bpj + 1;
    }
    if (a === 'w') {
      brd.board[brd.bpi][brd.bpj] = brd.board[brd.bpi + 1][brd.bpj];
      brd.board[brd.bpi + 1][brd.bpj] = -1;
      brd.bpi = brd.bpi + 1;
    }
    if (a === 's') {
      brd.board[brd.bpi][brd.bpj] = brd.board[brd.bpi - 1][brd.bpj];
      brd.board[brd.bpi - 1][brd.bpj] = -1;
      brd.bpi = brd.bpi - 1;
    }
  }

  static validMoves(brd) {
    var valMoves = "";
    if (brd.bpi > 0)
      valMoves += "s";
    if (brd.bpi < 3)
      valMoves += "w";
    if (brd.bpj > 0)
      valMoves += "d";
    if (brd.bpj < 3)
      valMoves += "a";
    return valMoves;
  }

  static createRandomBoard(){
    let board = new Board(), last = "";
    let i = 0;
    while(i < 5){
      let valM = Board.validMoves(board);
      let move = valM[~~(Math.random() * 4)];
      if(!Board.isOppositeLast(move,last)){
        i++;
        Board.makeMove(board, move);
        last = move;
      }
    }
    return board;
  }

  static isOppositeLast(pre,last){
    switch(pre){
      case 'w':
        return last === 's';
      case 'a':
        return last === 'd';
      case 's':
        return last === 'w';
      case 'd':
        return last === 'a';
      default:
        return false;
    }
  }

  static getConfigString(brd){
    let config = "";
    for(let i=0;i<brd.length;i++){
      for(let j=0;j<brd[i].length;j++){
        config += brd[i][j] + ',';
      }
    }
    return config.substr(0,config.length-1);
  }

}
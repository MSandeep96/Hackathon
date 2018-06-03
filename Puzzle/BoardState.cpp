#include "BoardState.h"
#include "Board.h"

BoardState::BoardState(){
}

BoardState::BoardState(Board board){
    this->board = board;
    this->moves = "";
    this->cost = this->board.heuristic();
    this->solved = this->board.isSolved();
}

BoardState::BoardState(BoardState boardState, char moved)
{
    this->board = boardState.board;
    if(moved != '$')
        this->moves = boardState.moves + moved;
    this->board.makeMove(moved);
    this->cost = moves.length() + this->board.heuristic();
    this->solved = this->board.isSolved();
}

std::vector<char> BoardState::validMoves(){
    return board.validMoves();
}

char BoardState::lastStep(){
    return moves[moves.length()-1];
}

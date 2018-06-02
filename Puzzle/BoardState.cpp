#include "BoardState.h"
#include "Board.h"

BoardState::BoardState(){
}

BoardState::BoardState(Board board, char moved)
{
    this->board = board;
    if(moved != '$')
        this->moves = this->moves + moved;
    board.makeMove(moved);
    this->cost = moves.length() + board.heuristic();
    this->solved = board.isSolved();
}

std::vector<char> BoardState::validMoves(){
    return board.validMoves();
}

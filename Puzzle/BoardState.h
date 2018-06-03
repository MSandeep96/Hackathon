#ifndef BOARDSTATE_H
#define BOARDSTATE_H
#include "Board.h"
#include <bits/stdc++.h>

class BoardState
{
    public:
        BoardState();
        BoardState(Board board);
        BoardState(BoardState BoardState, char moved);
        std::string moves;
        int cost;
        bool solved;
        Board board;
        std::vector<char> validMoves();
        char lastStep();
    protected:

    private:

};

#endif // BOARDSTATE_H

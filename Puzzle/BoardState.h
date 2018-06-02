#ifndef BOARDSTATE_H
#define BOARDSTATE_H
#include "Board.h"
#include <bits/stdc++.h>

class BoardState
{
    public:
        BoardState();
        BoardState(Board board, char moved);
        std::string moves;
        int cost;
        bool solved;
        Board board;
        std::vector<char> validMoves();
    protected:

    private:

};

#endif // BOARDSTATE_H

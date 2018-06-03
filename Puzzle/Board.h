#ifndef BOARD_H
#define BOARD_H
#include "bits/stdc++.h"

class Board
{
    public:
        Board();
        Board(std::vector<std::vector<int> > grid, int iB, int jB);
        bool isSolved();
        int heuristic();
        std::vector<char> validMoves();
        void makeMove(char moved);
    protected:

    private:
        int iB,jB;
        std::vector<std::vector<int> > board;
};

#endif // BOARD_H

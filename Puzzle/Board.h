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
        std::map<int,std::pair<int,int> > pos = {
            {1, {0,0}},
            {2, {0,1}},
            {3, {0,2}},
            {4, {0,3}},
            {5, {1,0}},
            {6, {1,1}},
            {7, {1,2}},
            {8, {1,3}},
            {9, {2,0}},
            {10, {2,1}},
            {11, {2,2}},
            {12, {2,3}},
            {13, {3,0}},
            {14, {3,1}},
            {15, {3,2}},
            {-1, {3,3}},
        };
};

#endif // BOARD_H

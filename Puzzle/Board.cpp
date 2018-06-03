#include "Board.h"
#include <bits/stdc++.h>
#include "PriorityHeap.h"

Board::Board(){

}

Board::Board(std::vector<std::vector<int> > grid, int iB, int jB)
{
    board = grid;
    this->iB = iB;
    this->jB = jB;
}

void Board::makeMove(char moved){
    switch(moved){
    case 'u':
        board[iB][jB] = board[iB-1][jB];
        board[iB-1][jB] = -1;
        iB--;
        break;
    case 'l':
        board[iB][jB] = board[iB][jB-1];
        board[iB][jB-1] = -1;
        jB--;
        break;
    case 'd':
        board[iB][jB] = board[iB+1][jB];
        board[iB+1][jB] = -1;
        iB++;
        break;
    case 'r':
        board[iB][jB] = board[iB][jB+1];
        board[iB][jB+1] = -1;
        jB++;
        break;
    default:
        return;
    }
}

std::vector<char> Board::validMoves(){
    std::vector<char> valMoves;
    if(iB != 0){
        valMoves.push_back('u');
    }
    if(iB != 3){
        valMoves.push_back('d');
    }
    if(jB !=0 ){
        valMoves.push_back('l');
    }
    if(jB != 3){
        valMoves.push_back('r');
    }
    return valMoves;
}

bool Board::isSolved(){
    for(int i=0;i<4;i++){
        for(int j=1;j<5;j++){
            if(i*4 + j == 16)
                return true;
            if(i*4 + j != board[i][j-1])
                return false;
        }
    }
    return true;
}

void Board::print(){
    for(int i=0;i<4;i++){
        for(int j=0;j<4;j++){
            std::cout<<board[i][j]<<" ";
        }
        std::cout<<std::endl;
    }
}

int orgPosX(int num){
    return (num -1) / 4;
}

int orgPosY(int num){
    return (num - 1) % 4;
}

int Board::heuristic(){
    int h = 0;
    for(int i=0;i<4;i++){
        for(int j=0;j<4;j++){
            if(board[i][j] == -1){
                h+= 3 - i + 3 - j;
            }else{
                h += abs(orgPosX(board[i][j]) - i) + abs(orgPosY(board[i][j])- j);
            }
        }
    }
    return h;
}





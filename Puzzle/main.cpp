#include <bits/stdc++.h>
#include "Board.h"
#include "PriorityHeap.h"

using namespace std;

template<typename Out>
void split(const std::string &s, char delim, Out result) {
    std::stringstream ss(s);
    std::string item;
    while (std::getline(ss, item, delim)) {
        *(result++) = item;
    }
}

std::vector<std::string> split(const std::string &s, char delim) {
    std::vector<std::string> elems;
    split(s, delim, std::back_inserter(elems));
    return elems;
}

int randomVal(int i){ return rand()% i;}

bool isOpposite(char cur,char last){
    switch(cur){
        case 'u':
            return last=='d';
        case 'l':
            return last=='r';
        case 'r':
            return last=='l';
        case 'd':
            return last=='u';
    }
    return false;
}

string solve(Board board){
    PriorityHeap mHeap;
    mHeap.enqueue(BoardState(board));
    while(!mHeap.empty()){
        BoardState curState = mHeap.dequeue();
        if(curState.solved)
            return curState.moves;
        vector<char> validMoves = curState.validMoves();
        random_shuffle(validMoves.begin(), validMoves.end(), randomVal);
        char lastStep = curState.lastStep();
        for(int i=0;i<validMoves.size();i++){
            if(isOpposite(validMoves[i],lastStep))
               validMoves.erase(validMoves.begin() + i);
        }
        for(int i=0;i<validMoves.size();i++){
            BoardState nextState(curState,validMoves[i]);
            mHeap.enqueue(nextState);
        }
    }
    return "";
}

/**
* Execute ./output "2,4,3,23,4"
*/
int main(int argc, char** argv)
{
    if(argc < 2){
        cerr<<"Invalid no. of arguments";
        return -1;
    }
    srand(unsigned(time(0)));
    //config string
    string boardConfig = argv[1];
    vector<string> blobs = split(boardConfig,',');
    vector<vector<int>> board;
    int jB,iB;
    for(int i=0;i<4;i++){
        vector<int> arr;
        for(int j=0;j<4;j++){
            int val = atoi(blobs[i*4 + j].c_str());
            if(val == -1){
                jB = j; iB = i;
            }
            arr.push_back(val);
        }
        board.push_back(arr);
    }
    Board raju(board,iB,jB);
    cout<<solve(raju);
}

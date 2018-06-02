#ifndef PRIORITYHEAP_H
#define PRIORITYHEAP_H
#include "BoardState.h"
#include "bits/stdc++.h"

class PriorityHeap
{
    public:
        PriorityHeap();
        int maxSize = 100000;
        std::vector<BoardState> heap;
        void enqueue(BoardState bs);
        BoardState dequeue();
        bool empty();
    protected:

    private:
        void bubbleUp(int curPos);
        void bubbleDown(int curPos);
};

#endif // PRIORITYHEAP_H

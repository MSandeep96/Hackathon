#include "PriorityHeap.h"

PriorityHeap::PriorityHeap()
{
}

void PriorityHeap::enqueue(BoardState a)
{
    heap.push_back(a);
    bubbleUp(heap.size() - 1);
    if(heap.size() == maxSize)
        heap.pop_back();
}

BoardState PriorityHeap::dequeue()
{
    BoardState end_v, val;
    val = heap[0];
    end_v = heap.back();
    if(!empty()){
        heap[0] = end_v;
        bubbleDown(0);
    }
    return val;
}

void PriorityHeap::bubbleUp(int curPos)
{
    int parentPos;
    BoardState cur,parent;
    if(curPos == 0)
        return;
    parentPos = (int)((curPos - 1)/2);
    cur = heap[curPos];
    parent = heap[parentPos];
    if(cur.cost < parent.cost) {
        heap[curPos] = parent;
        heap[parentPos] = cur;
        bubbleUp(parentPos);
    }
}

void PriorityHeap::bubbleDown(int curPos)
{
    int leftPos, rightPos, swapPos;
    leftPos = curPos * 2 + 1;
    rightPos = curPos * 2 + 2;
    BoardState cur,left,right;
    cur = heap[curPos];
    swapPos = -1;
    if((leftPos < heap.size()) && heap[leftPos].cost < cur.cost) {
        swapPos = leftPos;
    }
    if((rightPos < heap.size()) && heap[rightPos].cost < heap[leftPos].cost
        && heap[rightPos].cost < cur.cost) {
        swapPos = leftPos;
    }
    if(swapPos != -1){
        heap[curPos] = heap[swapPos];
        heap[swapPos] = cur;
        bubbleDown(swapPos);
    }
}

bool PriorityHeap::empty()
{
    return heap.size() == 0;
}

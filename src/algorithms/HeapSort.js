import React from 'react'
import {swap, getInitState, addToState, lastSorted, createKey, createRange } from './helpers'

function HeapSort(array) {
  const state = getInitState(array);
  const left = (i) => 2 * i + 1;  //this syntax returns the result automatically
  const right = (i) => 2 * i + 2;
  const parent = (i) => Math.floor((i-1)/2);

  const maxHeapify = (arr, i, heapsize) =>{  //i is the index of violation
    const leftChild = left(i);
    const rightChild = right(i);
    addToState(state, arr, lastSorted(state), [i, leftChild]);
    let largest = leftChild < heapsize && arr[leftChild] > array[i] ? leftChild : i;

    addToState(state, arr, lastSorted(state), [largest, rightChild]);

    largest = rightChild < heapsize && arr[rightChild] > arr[largest] ? rightChild : largest;

    if (largest != i){
      //highlights the two indexes to be swapped
      addToState(state, arr, lastSorted(state), [], [i, largest]);
      swap(arr, i, largest);
      //highlight the two indexes after the swap.
      addToState(state, arr, lastSorted(state), [], [i, largest]);
      maxHeapify(array, largest, heapsize);
    }
  }

  //a build maxheap function here
  const buildMaxHeap = (array) =>{
    const start = Math.floor(array.length / 2);
    const heapsize = array.length;
    for (let i = start; i>= 0; i--){
      maxHeapify(array, i, heapsize);
    }
    //visualize the maxheap
    addToState(state, array, lastSorted(state), [], [], [], createRange(0, array.length));
  }
  const heapSort = (array) =>{
    buildMaxHeap(array);  //build the initial maxheap
    let heapsize = array.length;
    for (let i = array.length-1; i>0; i--){
      //select max and last element to be swapped
      addToState(state, array, lastSorted(state), [], [0, i]);  
      swap(array, 0, i);
      heapsize-=1;  //decrease the size of the heap by one, since max was selected
      maxHeapify(array, 0, heapsize);  //create a heap out of the violation at index 0
      addToState(state, array, lastSorted(state), [], [], [], createRange(0, heapsize))
    }
    addToState(state, array, [...lastSorted(state), 0]);  //all is sorted.
  }

  heapSort(array);
  return state;
}

export default HeapSort

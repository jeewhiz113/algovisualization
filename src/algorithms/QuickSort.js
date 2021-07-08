import React from 'react'
import {swap, getInitState, addToState, lastSorted, createKey } from './helpers'
function QuickSort(array) {
  const state = getInitState(array);  
  function choosePivot(array, start, end){  //note choosePivot excludes the end index.
    return Math.floor(Math.random()*(end-start) + start)
  }

  /*Run over the algo again, just the logic and make sure all the edge cases are covered!*/
  const partition = (array, start, end) =>{  //start is the pivot
    let i = start + 1;  //begin to the right of start
    let j = start + 1;
    addToState(state, array, lastSorted(state), [start]);  //mark pivot visually
    while(j<=end){  //index j is the current index that allocates a value to the left or right halves
      if (array[j] < array[start]){  //less than the pivot
        
        addToState(state, array, lastSorted(state), [start], [j], [], createRange(start+1, i));
        swap(array, i, j);
        addToState(state, array, lastSorted(state), [start], [i], [], createRange(start+1, i));
        i +=1; //if j was swapped with i, then move i to the right
      }
      j+=1;  //always move j
    }
    //mark center position to be swapped
    addToState(state, array, lastSorted(state), [i-1], [], [], createRange(start, i-1));
    swap(array, start, i-1);
    addToState(state, array, lastSorted(state), [i-1], [], [], createRange(start, i-1));
    return i-1;  //returns the index that is sorted
  };
  const recursiveQuickSort= (array, start, end) => {
    if (start >= end){
      if (start === end){
        addToState(state, array, [...lastSorted(state), start]);
      }
      return null;
    }
    let pivot = choosePivot(array, start, end);
    //mark pivot
    addToState(state, array, lastSorted(state), [pivot]);
    swap(array, start, pivot);
    //move pivot to the start
    addToState(state, array, lastSorted(state), [pivot]);
    recursiveQuickSort(array, start, pivot-1);
    recursiveQuickSort(array, pivot+1, end);
  }


}
export default QuickSort

/*
Pick a pivot, partition function divides the array into two, left half is less than the pivot and right half is greater than the pivot.  Recursively quicksort left and right halves.

The picking of the pivot picks a random number from 0 to end (not including end) but end value does get picked up because the partition step in the while loop is structured as j <= end.

*/

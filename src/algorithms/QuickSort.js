import React from 'react'
import {swap, getInitState, addToState, lastSorted, createKey, createRange } from './helpers'
function QuickSort(array) {
  const state = getInitState(array);  
  function choosePivot(array, start, end){  
    return Math.floor(Math.random()*(end-start) + start)
  }

  const partition = (array, start, end) =>{  
    let i = start + 1;  
    let j = start + 1;
    addToState(state, array, lastSorted(state), [start]);  
    while(j<=end){  
      if (array[j] < array[start]){  
        
        addToState(state, array, lastSorted(state), [start], [j], [], createRange(start+1, i));  
        swap(array, i, j);
        addToState(state, array, lastSorted(state), [start], [i], [], createRange(start+1, i));
        i +=1; 
      }
      j+=1;  
    }
    addToState(state, array, lastSorted(state), [i-1], [], [], createRange(start, i-1));
    swap(array, start, i-1);
    addToState(state, array, lastSorted(state), [i-1], [], [], createRange(start, i-1));
    return i-1;  
  };
  const recursiveQuickSort= (array, start, end) => {
    if (start >= end){
      if (start === end){
        addToState(state, array, [...lastSorted(state), start]);
      }
      return null;
    }
    let pivot = choosePivot(array, start, end);
    addToState(state, array, lastSorted(state), [pivot]);
    swap(array, start, pivot);
    addToState(state, array, lastSorted(state), [pivot]);
    pivot = partition(array, start, end);
    addToState(state, array, [...lastSorted(state), pivot])
    recursiveQuickSort(array, start, pivot-1);
    recursiveQuickSort(array, pivot+1, end);
  }
  recursiveQuickSort(array, 0, array.length-1);
  return state;

}
export default QuickSort

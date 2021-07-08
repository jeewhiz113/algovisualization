import React from 'react'
import {swap, getInitState, addToState, lastSorted, createKey } from './helpers'

function BubbleSort(array) {
  const state = getInitState(array);
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length-i-1; j++){
      //lastSorted is the last element in the state array.
      addToState(state, array, lastSorted(state), [j, j+1]);
      if (array[j] > array[j+1]){  //note this compares two adjacent indexes and index j is always the larger of the two after the swap.  
        swap(array, j, j+1);  
        addToState(state, array, lastSorted(state), [], [j, j+1]);
      }
    }
    //When we are here, then index j is at the proper place
    addToState(state, array, [...lastSorted(state), array.length-1-i]);  //third parameter is the sorted indexes
  }

  return state;
}

export default BubbleSort

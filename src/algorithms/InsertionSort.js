import React from 'react'
import {swap, getInitState, addToState, lastSorted, createKey } from './helpers'

const InsertionSort = (array) => {
  //initial state
  const state = getInitState(array);
  
  //Algorithm
  for (let i = 1; i < array.length; i++){
    var key = array[i];
    var j = i;
    addToState(state, array, [], [i]);  //4th parameter is comparing
    while(j>0 && array[j-1] > key){
      //move the value at index j-1 one to the right
      addToState(state, array, [], [j], [j-1]);
      array[j] = array[j-1];
      j--;
      //overwrite value at j with j-1
      addToState(state, array, [], [], [j, j-1]);
    }
    //finally value at index j is overwritten by key
    addToState(state, array, [], [], [], [j]);
    array[j] = key;
  }
  addToState(state, array, [...Array(array.length).keys()]);
  return state;
}

export const InsertionSortKey = createKey(
  'Comparing',
  'Swapping',
  'Overwrite from memory'
);

export default InsertionSort

import React from 'react';
import {swap, getInitState, addToState, lastSorted, createKey } from './helpers'

const SelectionSort = (array)=>{
  const state = getInitState(array);

  //core of Selection Sort:
  for (let i = 0; i < array.length - 1; i++){
    let minIndex = i;
    for (let j = i+1; j< array.length; j++){
      addToState(state, array, lastSorted(state), [minIndex, j]);  //comparing minIndex and j
      if (array[j] < array[minIndex]){  //we found a smaller value
        addToState(state, array, lastSorted(state), [minIndex], [j]);  //So [j] is stateB, which means in this case, we found a smaller value (it is in the array stateB)
        minIndex = j;  //update minIndex
        addToState(state, array, lastSorted(state), [minIndex], [j]);  //minIndex(so far) is kept in this stateA.
      }
    }
    //ok so at this point, we found the smallest element and it lies in the stateA array.  Now add the swap action to the state array.  The swap indexes lie in the second stateB array.
    addToState(state, array, lastSorted(state), [], [i, minIndex]);

    swap(array, i, minIndex);
    //values been swapped, and sorted index added to the sorted array
    addToState(state, array, [...lastSorted(state), i], [], []);  
  }
  //final item is sorted
  addToState(state, array, [...lastSorted(state), array.length-1]);
  return state;
}

export const SelectionSortKey = createKey('Comparing', 'Swapping');

export default SelectionSort;
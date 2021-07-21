import React from 'react'
import {swap, getInitState, addToState, lastSorted, createKey, createRange } from './helpers'

const MergeSort = (nums) => {
  // Initial State
  const state = getInitState(nums);

  function merge(original, start, mid, end) {
    const left = original.slice(start, mid);
    const right = original.slice(mid, end);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        addToState(state, original, [], [], [], [k + start]);
        original[k + start] = left[i];
        i++;
        addToState(state, original, [], [], [], [k + start]);
      } else {
        addToState(state, original, [], [], [], [k + start]);
        original[k + start] = right[j];
        j++;
        addToState(state, original, [], [], [], [k + start]);
      }
      k++;
    }
    while (i < left.length) {
      addToState(state, original, [], [], [], [k + start]);
      original[k + start] = left[i];
      i++;
      k++;
      addToState(state, original, [], [], [], [k + start]);
    }
    while (j < right.length) {
      addToState(state, original, [], [], [], [k + start]);
      original[k + start] = right[j];
      j++;
      k++;
      addToState(state, original, [], [], [], [k + start]);
    }

    left.length = 0;
    right.length = 0;
  }

  function recursiveMergeSort(original, start, end) {
    const length = end - start;
    if (length < 2) {
      // original = []
      if (length < 1) return original;
      // original = [x]
      else return [original[start]];
    }

    const midPoint = Math.floor((start + end) / 2);

    // Visualize: First Half
    addToState(
      state,
      original,
      [],
      [...Array(midPoint - start).keys()].map((i) => i + start)
    );
    recursiveMergeSort(original, start, midPoint);

    // Visualize: Second Half
    addToState(
      state,
      original,
      [],
      [...Array(end - midPoint).keys()].map((i) => i + midPoint)
    );
    recursiveMergeSort(original, midPoint, end);

    merge(original, start, midPoint, end);
  }

  recursiveMergeSort(nums, 0, nums.length);

  // Visualize: Mark all elements as sorted
  addToState(state, nums, [...Array(nums.length).keys()]);
  return state;
};

export const MergeSortKey = createKey(
  'Call Merge Sort',
  null,
  'Overwrite from axillary array'
);

export default MergeSort

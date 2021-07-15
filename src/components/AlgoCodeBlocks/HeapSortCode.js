import React, { useEffect } from 'react'
import Prism from 'prismjs'
import './style.css'
function HeapSortCode() {
  useEffect(() => {
    Prism.highlightAll();
  })
  return (
    <div className ="codeBlock">
      <hr/>
      <h3>Code:</h3>
      <pre>
        <code className="language-javascript">
            {
`//index i is the node of violation of the max-heap property
function heapify(arr, n, i){
  let largest = i;
  let l = 2*i; //left child index
  let r = 2*i+1; //right child index
  if (l < n && arr[l] > arr[largest]){
    largest = l;
  }
  if (r < n && arr[r] > arr[largest]){
    largest = r;
  }
  if (i != largest){
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    heapify(arr, n, largest);
  }
}

function heapSort(arr){
  let length = arr.length;
  //leaves are already max-heaps.  So start at 1 level above leaves.
  for (let i = length/2-1; i>=0; i--){  
    heapify(arr, length, i);
  }
  //Now arr is a max-heap, next we move the root to the last element and heapify 1 less element:
  for (let i = length-1; i>0; i--){
    //move largest to the end and run heapify.
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    //violation occurs at index 0 since this element was swapped
    //also the size of the size is now i, since for each iteration, 1 element
    //gets placed at the correct spot
    heapify(arr, i, 0);
  }
}`
          }
        </code>
      </pre>
    </div>
  )
}

export default HeapSortCode

import React, { useEffect } from 'react'
import Prism from 'prismjs'
import './style.css'
function MergeSortCode() {
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
`function merge(arr, l, m, r){  //l is left index, m is 
  //m is calculated by m = l + (r-1)/2
  //sizes of the two arrays:
  var leftSize = new Array(m-l+1);  
  var rightSize = new Array(r-m); 
  var left = new Array(leftSize);
  var right = new Array(rightSize);
  for (var i = 0; i < leftSize; i++){
    left[i] = arr[l+i];
  }
  for (var j = 0; j<rightSize; j++){
    right[j] = arr[1+m+j];  //copy the right half of arr
  }
  var i = 0;  
  var j = 0;
  var k = l; //initial index of merged subarray
  while(i<leftSize && j < rightSize){
    if (left[i] <= right[j]){
      arr[k] = left[i];
      i++;
    }else {
      arr[k] = right[j];
      j++
    }
    k++;
  }
  while(i < leftSize){
    arr[k] = left[i];
    k++;
    i++;
  }
  while(j < rightSize){
    arr[k] = right[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r){
  if (l >= r){
    return;
  }
  var m = l + parseInt((r-l)/2);
  mergeSort(arr, l, m);
  mergeSort(arr, m+1, r);
  merge(arr, l, m, r);
}`
          }
        </code>
      </pre>
    </div>
  )
}

export default MergeSortCode

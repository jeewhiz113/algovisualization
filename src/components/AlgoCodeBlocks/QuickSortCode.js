import React, { useEffect } from 'react'
import Prism from 'prismjs'
import './style.css'
//Look up java code for the quicksort algo with Random pivot.  Link is saved in chrome and translate that algo to here.
function QuickSortCode() {
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
`function pickRandomPivot(arr, low, high){
  let pivotIndex = Math.floor(Math.random()*(high-low+1)+low)
  let temp = arr[pivotIndex];
  arr[pivotIndex] = arr[high];
  arr[high] = temp;
}

function partition(arr, low, high){
  //pick a random pivot and switch that element with high
  pickRandomPivot(arr, low, high);
  let pivot = arr[high];  //set the pivot
  //index of smaller element than pivot, initially it is set to be a trivial index
  let i = (low -1);  
  for (var j = low; j < high; j++){  //strictly less than because at the end, 
    //we found the proper spot for index high
    if (arr[j] < pivot){
      i++;
      //switch the smaller element to the left side.
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp
    }
    
  }
  //move pivot to the correct spot:
  var temp = arr[i+1];
  arr[i+1] = arr[high];
  arr[high] = temp;
  return i+1;
}

function quickSort(arr, low, high){
  if (low < high){
    var pivot = partition(arr, low, high);
    quickSort(arr, low, pivot-1);
    quickSort(arr, pivot+1, high);
  }
}`
          }
        </code>
      </pre>
    </div>
  )
}


export default QuickSortCode

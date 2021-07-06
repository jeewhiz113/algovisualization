import React, {useEffect} from 'react'
import Prism from 'prismjs'
import './style.css'

function SelectionSortCode() {
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
            `function selectionSort(arr,  n)  //arr is the unsorted array and n is its length
  {
      var i, j, min_idx;
  
      // One by one move boundary of unsorted subarray
      for (i = 0; i < n-1; i++)
      {
          // Find the minimum element in unsorted array
          min_idx = i;
          for (j = i + 1; j < n; j++){
            if (arr[j] < arr[min_idx]){  //update min_idx if a smaller value is found
              min_idx = j;  
            }
          }
          // Swap the found minimum element with the first element
          swap(arr,min_idx, i);
      }
  }`
  }
        </code>
      </pre>
    </div>
  )
}

export default SelectionSortCode


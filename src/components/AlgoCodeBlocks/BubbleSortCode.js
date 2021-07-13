import React, { useEffect } from 'react'
import Prism from 'prismjs'
import './style.css'
function BubbleSortCode() {
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
            `function bubbleSort(arr) 
{
  for (var i = 0; i < arr.length-1; i++)
  {
    //Compare indexes j and j+1 and move the larger of the two to the right
    for (j = 0; j < arr.length - i - 1; j++){  
      if (arr[j] > arr[j+1]){  
        swap(arr, j, j+1);
      }
    }
    //Since the larger of j and j+1 is always moved to the right, 
    //index j (before exiting of the for-loop) is the largest of the array
  }
}`
          }
        </code>
      </pre>
    </div>
  )
}

export default BubbleSortCode

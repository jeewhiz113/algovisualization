import React, {useEffect} from 'react'
import Prism from 'prismjs'
import './style.css'

function InsertionSortCode(props) {
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
  `function insertionSort(arr, n) { 
    var i, key, j;  //key stores the value of the current index
    for (i = 1; i < n; i++){ 
        key = arr[i]; 
        j = i - 1; 
        /* Move elements of arr[0..i-1], that are greater than 
        key one position to the right their current position */
        while (j >= 0 && arr[j] > key){ 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key;  //key is now at its sorted position
    } 
  } `
  }
        </code>
      </pre>
    </div>
  )
}

export default InsertionSortCode

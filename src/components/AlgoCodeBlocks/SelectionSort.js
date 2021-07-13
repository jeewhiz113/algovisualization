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
            `function selectionSort(arr) 
{
  for (var i = 0; i < arr.length; i++)
  {
    let minIndex = i;
    for (var j = i+1; j < arr.length; j++){
      //find the minIndex for each iteration
      if (arr[j] < arr[minIndex]){
        minIndex = j;
      }
    }
    //switch the current i value with the value in the minIndex
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}`
          }
        </code>
      </pre>
    </div>
  )
}

export default SelectionSortCode


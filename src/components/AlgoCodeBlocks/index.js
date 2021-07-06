import React from 'react'
import SelectionSort from '../../algorithms/SelectionSort'
import SelectionSortCode from './SelectionSort'
import InsertionSortCode from './InsertionSortCode'

function DisplayCode(props) {
  console.log('In displaycode', props.selectedAlgo)
  const renderCode = ()=>{
    //Fix the hr tag to be in a centered div.
    switch (props.selectedAlgo) {
      case 'Quick':
        return (
          <div>
            <hr />
            <h1>Show Code for Quick Sort</h1>
          </div>
          
        )
      case 'Insertion':
        return (
          <div>
            <InsertionSortCode />
          </div>
          
        )
      case 'Selection':
        return (
          <div>
            
            <SelectionSortCode />
          </div>
          
        )
      case 'Merge':
        return (
          <div>
            <hr />
            <h1>Show Code for Merge Sort</h1>
          </div>
          
        )
      case 'Bubble':
        return (
          <div>
            <hr />
            <h1>Show Code for Bubble Sort</h1>
          </div>
          
        )
      case 'Heap':
        return (
          <div>
            <hr />
            <h1>Show Code for Heap Sort</h1>
          </div>
          
        )
      default:
        return null
    }
  }
  return (
    <div>
      {renderCode()}
    </div>
  )
}

export default DisplayCode

import React from 'react'
import SelectionSortCode from './SelectionSort'
import InsertionSortCode from './InsertionSortCode'
import BubbleSortCode from './BubbleSortCode'
import QuickSortCode from './QuickSortCode'
import MergeSortCode from './MergeSortCode'
import HeapSortCode from './HeapSortCode'

function DisplayCode(props) {
  console.log('In displaycode', props.selectedAlgo)
  const renderCode = ()=>{
    //Fix the hr tag to be in a centered div.
    switch (props.selectedAlgo) {
      case 'Quick':
        return (
          <div>
            <QuickSortCode />
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
            <HeapSortCode />
          </div>
          
        )
      case 'Bubble':
        return (
          <div>
            <BubbleSortCode />
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

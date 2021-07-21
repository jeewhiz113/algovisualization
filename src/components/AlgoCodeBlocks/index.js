import React from 'react'
import SelectionSortCode from './SelectionSort'
import InsertionSortCode from './InsertionSortCode'
import BubbleSortCode from './BubbleSortCode'
import QuickSortCode from './QuickSortCode'
import MergeSortCode from './MergeSortCode'
import HeapSortCode from './HeapSortCode'
import HeapSort from '../../algorithms/HeapSort'

function DisplayCode(props) {
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
            <MergeSortCode />
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
            <HeapSortCode />
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

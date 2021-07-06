import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './style.css';
import qs1 from './CodeScreenshots/quicksort1.png';
import qs2 from './CodeScreenshots/quicksort2.png'

export default function RenderAlgoInfo(props) {
  console.log(props)
  const Quick = () => {
    return (
      <div className='Info'>
        <hr />
        <h2>{props.selectedAlgo + ' Sort'}</h2>
        <div className="InfoBody">
          <div className='Description'>
              Quick Sort(link) is an in-place, Divide and Conqur sorting algorithm.  It picks an element as pivot and partitions the given array around the picked pivot.  After the partition step, the elements smaller than the pivot lies to the left and the elements greater than the pivot lies to the right.  Therefore, after the partitioning step, the pivot is in the correct spot.  The steps of the quickSort is summarized as follows:
              
              <ol>
                <li>Pick a pivot element (demo code picks the end).</li>
                <li>Partitioning: all elements with values less than pivot come before, while all elements with values greater than pivot come after.  The mechanic is simple.  We have indexes i and j.  Index i points at an element that is one before the element that is greater than the pivot.  Index j is the traversing index.  When element at index j is smaller than the pivot, we increment index i by 1 and swap elements are index i and j, keeping all elements smaller than pivot on the left and all elements greater than pivot on the right.</li>
                <li>Recursively apply the above steps to the left half and right half of the subarrays.</li>
              </ol>
          </div>  
          <div className='Complexity'>
              <h4>Performance</h4>
              <p>Space Complexity is O(1) because of the in-place nature of the algorithm.</p>
              <p>Time Complexity:</p>
              <ul>
                <li>Worst-case: O(n^2), occurs when the array is already sorted.  If the array is already sorted, and we always pick the last element as pivot, then each recursive call processes an array of size one less than the previous list.  Consequently, we have a partial sum of (n-i) for i=0 to n, which is a O(n^2) algorithm.</li>
                <li>Best-case: O(n * log n), occurs when the partition divide the list into two equal pieces.  Then we have a call tree that is of height log(n) and on each level, we do n work.  </li>
                <li>Average-case: O(n * log n), this can be derived from its recurrence relations of its best and worst case and applying master theorem for divide and conquer. </li>
              </ul>
          </div>
        </div>
      </div>
    )
  };
  const Selection = ()=>{
    
    return (
      <div className='Info'>
        <hr/>
        <h2>{props.selectedAlgo + ' Sort'}</h2>
        <div className="InfoBody">
          <div className='Description'>
              Selection Sort sorts the array by repeatedly finding the minimium element from the unsorted part and putting it at the beginning.  The steps of the algorithm can be summarized as follows:
              <ol>
                <li>Iterate through the array, find the smallest element and swap it with the first element.</li>
                <li>Repeat the previous step to find the second smallest and so on until the array is sorted.</li>
              </ol>
          </div>  
          <div className='Complexity'>
              <h4>Performance</h4>
              <p>Space Complexity is O(1) because of the in-place nature of the algorithm.</p>
              <p>Time Complexity:</p>
              <ul>
                <li>O(n^2) is the time complexity as there are two nested loops.</li>
              </ul>
          </div>
        </div>
      </div>
    )
  };
  const Bubble = ()=>{
    return (
      <div className='Info'>
        <hr/>
        <h2>{props.selectedAlgo + ' Sort'}</h2>
        <div className="InfoBody">
          <div className='Description'>
              Bubble Sort works by repeatedly swapping the adjacent elements if they are in wrong order.  The pass through the array is repeated until the array is in sorted order.  
          </div>  
          <div className='Complexity'>
              <h4>Performance</h4>
              <p>Space Complexity is O(1) because of the in-place nature of the algorithm.</p>
              <p>Time Complexity:</p>
              <ul>
                <li>Worst-case is O(n^2) because of the nested loops.  This occurs when the array is reverse sorted</li>
                <li>Best-case is O(n) and this occurs when the array is already sorted.</li>
              </ul>
          </div>
        </div>
      </div>
    )
  };
  
  const Insertion = ()=>{
    return (
      <div className='Info'>
        <hr/>
        <h2>{props.selectedAlgo + ' Sort'}</h2>
        <div className="InfoBody">
          <div className='Description'>
              Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.  The steps of the code can be summarized as follows:
              <ol>
                <li>Use an outer loop to iterate through the array using an index i.</li>
                <li>Use an inner loop and start an index j with an initial value of i.</li>
                <li>Move the value at j to the left(sorted) portion of the array, continously swapping elements if the value at j is less than the value at j-1.  When this step is finished, the value the algorithm attempts to insert originally lies in its correct location.</li>
              </ol>
          </div>  
          {/* Talk about the performance nature of this! */}
          <div className='Complexity'>
              <h4>Performance</h4>
              <p>Space Complexity is O(1) because of the in-place nature of the algorithm.</p>
              <p>Time Complexity:</p>
              <ul>
                <li>O(n^2) is the time complexity as there are two nested loops.</li>
              </ul>
          </div>
        </div>
      </div>
    )
  };
  
  const Merge = ()=>{
    return (
      <div className='Info'>
        <hr/>
        <h2>{props.selectedAlgo + ' Sort'}</h2>
        <div className="InfoBody">
          <div className='Description'>
              Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.  The code to Merge Sort can be summerized as follows:
              
              <ol>
                <li>Find the mid point to divide the array: mid = left + (right-1)/2</li>
                <li>Call mergeSort on the left half: mergeSort(arr, left, mid)</li>
                <li>Call mergeSort on the right half: mergeSort(arr, mid+1, right)</li>
                <li>Merge the two previously sorted halves by calling merge(arr, left, mid, right)</li>
              </ol>
          </div>  
          <div className='Complexity'>
              <h4>Performance</h4>
              <p>Space Complexity is O(1) because of the in-place nature of the algorithm.</p>
              <p>Time Complexity:</p>
              
              <p>The algorithm divides the array into halves on each recursive calls.  Therefore, we have Log(n) number of levels and for each level, we do linear amount of work(merge).  So in total, it takes O(n Log n) time.</p>
          </div>
        </div>
      </div>
    )
  }
  
  const Heap = ()=>{
    return (
      <div className='Info'>
        <hr/>
        <h2>{props.selectedAlgo + ' Sort'}</h2>
        <div className="InfoBody">
          <div className='Description'>
              Heap sort is a comparison-based sorting technique based on Binary Heap data structure.  When given an arbitrary array, Heap Sort construct a Min/Max Heap by shifting the elements in the array so that a value in a parent node is smaller than the values in its two children nodes.  Then the order of the array comes by repeatedly removing the first element of the array and re-heapifying the array.  The steps of Heap Sort can be summarized as follows:
  
              <ul>
                <li>Build a min heap from the input array.</li>
                <li>The smallest item is stored at the root(first index of array) of the heap.  Replace it with the last item of the heap followed by reducing the size of the heap by 1.</li>
                <li>Re-heapify the root of the tree.</li>
                <li>Repeat the above two steps.</li>
              </ul>
          </div>  
          <div className='Complexity'>
              <h4>Performance</h4>
              <p>Space Complexity is O(1) because of the in-place nature of the algorithm.</p>
              <p>Time Complexity:</p>
              <ul>
                <li>Worst-case is O(n^2) because of the nested loops.  This occurs when the array is reverse sorted</li>
                <li>Best-case is O(n) and this occurs when the array is already sorted.</li>
              </ul>
          </div>
        </div>
      </div>
    )
  }

  const noAlgo = ()=>{
    return (
      <div className='Info'>
        <hr />
        <h2>Select algorithm</h2>
        <p>You must select an algorithm before you can see its description and time/space performances. </p>
      </div>
    )
  }
  //simply write a separate function for when there is no selectedAlgo props.
  const render = () => {
    return (
      <>
        {props.selectedAlgo ?  renderAlgoDesc() : noAlgo()}
      </>
    )
  }
  const renderAlgoDesc = ()=>{
    switch (props.selectedAlgo) {
      case 'Quick':
        return <Quick />
      case 'Insertion':
        return <Insertion />
      case 'Selection':
        return <Selection />
      case 'Merge':
        return <Merge />
      case 'Bubble':
        return <Bubble />
      case 'Heap':
        return <Heap />
      default:
        return (<h1>Please select an algorithm</h1>)
    }
    
  }   
  return (
    <div>
      {render()}
      
    </div>
    
  )
}


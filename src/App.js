
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Nav';
import VisualArea from './components/VisualArea'
import Controls from './components/Elements/Controls'
import RenderAlgoInfo from './components/AlgoDescription'
import SelectionSort, { SelectionSortKey } from './algorithms/SelectionSort'
import InsertionSort, { InsertionSortKey } from './algorithms/InsertionSort'
import QuickSort, { QuickSortKey } from './algorithms/QuickSort'
import BubbleSort, { BubbleSortKey } from './algorithms/BubbleSort'
import HeapSort, { HeapSortKey } from './algorithms/HeapSort'
import MergeSort, { MergeSortKey } from './algorithms/MergeSort'
import ColorKey from './components/Elements/ColorKey'
import DisplayCode from './components/AlgoCodeBlocks'


function App() {
  const ALGO_KEY = {
    'Selection': SelectionSortKey,
    'Quick': QuickSortKey,
    'Merge': MergeSortKey,
    'Heap': HeapSortKey,
    'Insertion': InsertionSortKey,
    'Bubble': BubbleSortKey
  }
  const [selectedSort, setSelectedSort] = useState(true);
  // const [selectedSearch, setSelectedSearch] = useState(false)
  const [size, setSize] = useState(10);
  const [visState, setVisState] = useState(null);
  const [selectedAlgo, setSelectedAlgo] = useState(null);
  const [algoActions, setAlgoActions] = useState(null);
  const [progress, setProgress] = useState(0);
  const [timeoutIds, setTimeoutIds] = useState([]);
  const [speed, setSpeed] = useState(1)
  const currentStep = useRef(-1);
  console.log('here is algo actions', algoActions)
  const runAlgo = (state)=>{  
    const toIds = [];
    const timer = 500/speed;
    let length = state.length;
    state.forEach((item, i)=>{
      let timeoutId = setTimeout(()=>{
        setVisState(item);
        currentStep.current = currentStep.current+1;
        setProgress(((currentStep.current+1)/length)*100);
      }, timer*i)
      toIds.push(timeoutId);
    });
    let timeoutId = setTimeout(()=>{
      pause();  
    }, length*timer)
    toIds.push(timeoutId);
    setTimeoutIds(toIds);
   
  }
  const pause = () =>{
    timeoutIds.forEach((id) =>{
      clearTimeout(id);
    })
    setTimeoutIds([]);
  }
  const resume = ()=>{
    let newState = algoActions.slice(currentStep.current);
    runAlgo(newState);
  }
  const stepForward = () =>{
    if (currentStep.current < algoActions.length-1){
      currentStep.current = currentStep.current + 1;
      setVisState(algoActions[currentStep.current])
    }
    let length = algoActions.length;
    setProgress(((currentStep.current+1)/length)*100);
  }
  const stepBackward = ()=>{
    if (currentStep.current > 0 && currentStep.current < algoActions.length -1){
      currentStep.current = currentStep.current-1;
      setVisState(algoActions[currentStep.current])
    }
    let length = algoActions.length;
    setProgress(((currentStep.current-1)/length)*100);
  }
  const setSortTrue = () => {
    setSelectedSort(true);
  }

  const generateArray = (size) => {
    const array = Array(size).fill(0).map(() => {
      return Math.floor(Math.random() * 5 * size) + 1;
    })
    return array;
  }
  const algoSelect = (e) => {
    setSelectedAlgo(e.target.innerText);
    pause();
    currentStep.current = -1;
    setProgress(0);
  }
  const repeat = ()=>{
    timeoutIds.forEach((id)=>{
      clearTimeout(id);
    });
    currentStep.current = -1;
    runAlgo(algoActions)
  }
  const speedSelect = (e) => {
    setSpeed(parseFloat(e.target.innerText.slice(0, -1)));
  }
  useEffect(()=>{
    let state;
    if (selectedAlgo){
      switch (selectedAlgo){
        case 'Selection':
          state = SelectionSort(generateArray(size));
          break;
        case 'Insertion':
          state = InsertionSort(generateArray(size));
          break;
        case 'Bubble':
          state = BubbleSort(generateArray(size));
          break;
        case 'Quick':
          state = QuickSort(generateArray(size));
          break;
        case 'Heap':
          state = HeapSort(generateArray(size));
          break;
        case 'Merge':
          state = MergeSort(generateArray(size));
          break;
      }
      setAlgoActions(state);
      setVisState(state[0]);
    }
  }, [size, selectedAlgo])
  const colorKey = ALGO_KEY[selectedAlgo];
  return (
    <div className="App">
      <Navbar fixed="top" selectedAlgo={algoSelect} size={size} sortSelect={selectedSort} setSize={setSize} setSort={setSortTrue} />
      <VisualArea data = {visState} progress = {progress}/>
      <Controls 
      currentSpeed = {speed} 
      speedSelectStatus = {currentStep.current >=0}
      speedSelect = {speedSelect} 
      repeat = {repeat} 
      playing = {timeoutIds ? timeoutIds.length > 0 : false} 
      play = {()=>{runAlgo(algoActions)}} 
      resume={resume} 
      pause={pause} step = {currentStep.current}
      playDisabled ={algoActions ? algoActions.length <= 0 || currentStep.current >= algoActions.length - 1 : true}
      forward = {stepForward}
      backward = {stepBackward}
      forwardStatus = {algoActions ? currentStep.current < algoActions.length-1 : false}
      backwardStatus = {algoActions ? currentStep.current > 0 && currentStep.current < algoActions.length-1 : false }
      pickedAlgo = {selectedAlgo ? true : false}
      />
      <ColorKey colorKey={colorKey}/>
      <RenderAlgoInfo selectedAlgo={selectedAlgo}/>
      
      <DisplayCode selectedAlgo={selectedAlgo} />

    </div>
  );
}

export default App;

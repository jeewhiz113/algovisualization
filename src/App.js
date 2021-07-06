
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Nav';
import VisualArea from './components/VisualArea'
import Controls from './components/Elements/Controls'
import RenderAlgoInfo from './components/AlgoDescription'
import SelectionSort, { SelectionSortKey } from './algorithms/SelectionSort'
import ColorKey from './components/Elements/ColorKey'
import DisplayCode from './components/AlgoCodeBlocks'


function App() {
  const ALGO_KEY = {
    'Selection': SelectionSortKey
  }
  const [selectedSort, setSelectedSort] = useState(true);
  const [selectedSearch, setSelectedSearch] = useState(false)
  const [size, setSize] = useState(10);
  const [visState, setVisState] = useState(null);
  const [selectedAlgo, setSelectedAlgo] = useState(null);
  const [algoActions, setAlgoActions] = useState(null);
  const [progress, setProgress] = useState(-1);
  const [timeoutIds, setTimeoutIds] = useState([]);
  const [speed, setSpeed] = useState(1)
  const currentStep = useRef(-1);
  // const [currentStep, setCurrentStep] = useState(-1);
  //Make this function take the state and when called, pass it algoActions
  const runAlgo = (state)=>{  
    const toIds = [];
    const timer = 500/speed;
    let length = algoActions.length;
    state.forEach((item, i)=>{
      let timeoutId = setTimeout(()=>{
        setVisState(item);
        
        currentStep.current = currentStep.current+1;
        setProgress(((currentStep.current+1)/length)*100);
        //console.log(currentStep)
      }, timer*i)
      toIds.push(timeoutId);
    });
    //clear timeoutIds at the end, so we know we are finished.
    let timeoutId = setTimeout(()=>{
      pause();  //clear the timeout array
    }, length*timer)
    toIds.push(timeoutId);
    setTimeoutIds(toIds);
   // console.log(currentStep.current);
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
    //currentStep.current = currentStep.current + 1;
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
  //code up adjustPlaybackSpeed
  const setSortTrue = () => {
    setSelectedSort(true);
    setSelectedSearch(false);
  }
  const setSearchTrue = () => {
    setSelectedSearch(true);
    setSelectedSort(false);
  }
  const generateArray = (size) => {
    const array = Array(size).fill(0).map(() => {
      return Math.floor(Math.random() * 5 * size) + 1;
    })
    return array;
  }
  const algoSelect = (e) => {
    setSelectedAlgo(e.target.innerText);
    let state = SelectionSort(generateArray(size))
    setAlgoActions(state);
    setVisState(state[0]);
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
    console.log('Algo selected is', selectedAlgo)
  }, [size, selectedAlgo])
  const colorKey = ALGO_KEY[selectedAlgo];
  return (
    <div className="App">
      <Navbar fixed="top" selectedAlgo={algoSelect} size={size} sortSelect={selectedSort} searchSelect={selectedSearch} setSize={setSize} setSort={setSortTrue} setSearch={setSearchTrue} />
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
      <div>Footer Here</div>
    </div>
  );
}

export default App;

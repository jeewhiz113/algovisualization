
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Nav';
import VisualArea from './components/VisualArea'
import Controls from './components/Elements/Controls'
import RenderAlgoInfo from './components/AlgoDescription'
import SelectionSort, { SelectionSortKey } from './algorithms/SelectionSort'
import ColorKey from './components/Elements/ColorKey'


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
  const [timeoutIds, setTimeoutIds] = useState(null);
  const currentStep = useRef(-1);
  const [currentStep, setCurrentStep] = useState(-1);
  const runAlgo = ()=>{
    const toIds = [];
    const timer = 500;
    let length = algoActions.length;
    algoActions.forEach((item, i)=>{
      let timeoutId = setTimeout(()=>{
        setVisState(item);
        setProgress(((i+1)/length)*100);
        currentStep.current = currentStep.current+1;
        console.log(currentStep)
      }, 500*i)
      toIds.push(timeoutId);
    })
    setTimeoutIds(toIds);
   // console.log(currentStep.current);
  }
  const pause = () =>{
    timeoutIds.forEach((id) =>{
      clearTimeout(id);
    })
    setTimeoutIds(null);
  }
  const resume = ()=>{
    setAlgoActions(algoActions.slice(currentStep.current));
    currentStep.current = -1;
    runAlgo();
  }
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
  const algoSelect = (e) => {  //this will only be responsible for selecting the algo as a string
    setSelectedAlgo(e.target.innerText);
    
    let state = SelectionSort(generateArray(size))
    setAlgoActions(state);
    setVisState(state[0]);
  }
  useEffect(()=>{
    //Ok so once the algo has been selected, generate the state with that algo and chosen size.  If no algo was selected (So like the initial boot up of the program), then display a message that directs the user to select an aglo.  This is also useful for generating the color keys.  If  
    // let state = SelectionSort(generateArray(size));  
    // setAlgoActions(state);
    //setVisState(state[0]);
    console.log('Algo selected is', selectedAlgo)
  }, [size, selectedAlgo])
  const colorKey = ALGO_KEY[selectedAlgo];
  //console.log(colorKey);
  return (
    <div className="App">
      <Navbar fixed="top" selectedAlgo={algoSelect} size={size} sortSelect={selectedSort} searchSelect={selectedSearch} setSize={setSize} setSort={setSortTrue} setSearch={setSearchTrue} />
        <VisualArea data = {visState} progress = {progress}/>
        {/* IDea: pass a playing variable to this component that returns if timeoutIds's length is greater than 1.  If it is, then that means we are playing the visualization.  Then in the component, if playing is true, then display the pause button, otherwise display the play button.  ***Problem is once paused, the timeoutIds becomes null ||||| SIMPLY USE CURRENTSTEP, if not 0 || -1 then run continue*/}
        <Controls playing = {algoActions ? algoActions.length > 0 : false} play = {runAlgo} resume={resume} pause={pause}/>
        <ColorKey colorKey={colorKey}/>
      <RenderAlgoInfo selectedAlgo={selectedAlgo}/>
      

      <div>Footer Here</div>
    </div>
  );
}

export default App;

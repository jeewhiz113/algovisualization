import React from 'react'

import {
  MdPlayCircleFilled as Play,
  MdPause as Pause,
  MdSkipNext as Next,
  MdSkipPrevious as Previous,
  MdRepeat as Repeat,
} from 'react-icons/md';
import './style.css'

export default function Controls(props) {
  console.log('forward status', props.forwardStatus)
  console.log('backward status', props.backwardStatus)
  const playOrResume = () =>{
    if (props.playDisabled){
      return;
    }else if (props.step === -1){
      props.play()
    }else {
      props.resume();
    }
  }
  const pauseVis = ()=>{
    props.pause();
  }
  const buttonStatus = ()=>{
    if (props.playDisabled){
      return 'disabled'
    }else {
      return 'enabled'
    }
  }
  const forwardStatus = ()=>{
    if (props.forwardStatus){
      return 'enabled';
    }else {
      return 'disabled';
    }
  }
  const backwardStatus = ()=>{
    if (props.backwardStatus){
      return 'enabled';
    }else {
      return 'disabled';
    }
  }
  const forward = ()=>{
    if (props.forwardStatus){
      props.forward()
    }else {
      return;
    }
  }
  const backward = ()=>{
    if (props.backwardStatus){
      props.backward()
    }else {
      return;
    }
  }
  const speedSelectStat = ()=>{
    if (props.speedSelectStatus){
      //disable it!
      return 'disabled';
    }else {
      return 'enabled';
    }
  }

  const selectSpeed = (e) =>{
    if (speedSelectStat() === 'disabled'){
      return;
    }else {
      props.speedSelect(e);
    }
  }

  const repeatStatus = ()=>{
    if (props.pickedAlgo){
      return 'enabled'
    }else {
      return 'disabled'
    }
  }
  const repeat = ()=>{
    if (props.pickedAlgo){
      props.repeat();
    }else {
      return;
    }
  }
  return (
    <div className="VisControls">
      <Repeat onClick = {repeat} className={`button repeat-button repeat-button-${repeatStatus()}`}/>
      <Previous onClick={backward} className={`button increment-button backward-${backwardStatus()}`}/>
      {props.playing ? <Pause onClick = {pauseVis}color="#ff94c2" className="button"/> : <Play onClick = {playOrResume} className = {`button button-${buttonStatus()}`}/>}
      <Next onClick={forward} className={`button increment-button forward-${forwardStatus()}`}/>
      <div className="dropdown">
        <button className={`dropbtn dropbtn-${speedSelectStat()}`}>{props.currentSpeed}x</button>
        <div className="dropdown-content">
          <a onClick = {selectSpeed}>0.25x</a>
          <a onClick = {selectSpeed}>0.5x</a>
          <a onClick = {selectSpeed}>1x</a>
          <a onClick = {selectSpeed}>2x</a>
          <a onClick = {selectSpeed}>4x</a>
        </div>
      </div>
      
    </div>
  )
}

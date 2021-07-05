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
  
  const playOrResume = (e) =>{
    // console.log(e.target.attributes.getNamedItem('disabled'));
    // console.log(e.target.className);
    if (props.playDisabled){
      return;
    }else if (props.step === -1){
      props.play()
    }else {
      props.resume();
    }
    // if (props.step === -1){
    //   console.log('calling play here!!!!!!')
    //   props.play()
    // }else {
    //   console.log('calling resume in controls')
    //   props.resume();
    // }
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
  
  return (
    <div className="VisControls">
      <Repeat onClick = {()=>{props.repeat()}} className="button repeat-button"/>
      <Previous className="button increment-button"/>
      {props.playing ? <Pause onClick = {pauseVis}color="#ff94c2" className="button"/> : <Play onClick = {playOrResume} className = {`button button-${buttonStatus()}`}/>}
      <Next className="button increment-button"/>
      <div className="dropdown">
        <button className="dropbtn">{props.currentSpeed}x</button>
        <div className="dropdown-content">
          <a onClick = {(e)=>{props.speedSelect(e)}}>0.25x</a>
          <a onClick = {(e)=>{props.speedSelect(e)}}>0.5x</a>
          <a onClick = {(e)=>{props.speedSelect(e)}}>1x</a>
          <a onClick = {(e)=>{props.speedSelect(e)}}>2x</a>
          <a onClick = {(e)=>{props.speedSelect(e)}}>4x</a>
        </div>
      </div>
      
    </div>
  )
}


//className="button button-play"
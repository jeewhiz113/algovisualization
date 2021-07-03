import React, { useState } from 'react'
import {
  MdPlayCircleFilled as Play,
  MdPause as Pause,
  MdSkipNext as Next,
  MdSkipPrevious as Previous,
  MdRepeat as Repeat,
} from 'react-icons/md';
import './style.css'

export default function Controls(props) {
  console.log(props)
  const playOrResume = () =>{

    //When we hit the pause button, this changes the value of playing to be false, so everytime we hit pause, when we hit play, this will always run the else clause.
    if (props.selectedSort){
      console.log('calling resume here!!!!!!')
      props.resume()
    }else {
      console.log('calling runalgo in controls')
      props.play();
    }
  }
  const pauseVis = ()=>{
    props.pause();
  }
  return (
    <div className="VisControls">
      <Repeat className="button repeat-button"/>
      <Previous className="button increment-button"/>
      {!props.playing ? <Pause onClick = {pauseVis}color="#ff94c2" className="button"/> : <Play onClick = {playOrResume} color="green" className="button"/>}
      <Next className="button increment-button"/>
    </div>
  )
}

import React from 'react'
import './style.css'
import Chart from '../Chart'
import Controls from '../Elements/Controls'
import ProgressBar from '../Elements/ProgressBar'
function VisualArea(props) {
  console.log('props in VisualArea', props.data);
  return (
    <div className='VisualWindow'>
      <Chart visState={props.data} />
      <ProgressBar width = {props.width} progress = {props.progress}/>
    </div>
  )
}

export default VisualArea

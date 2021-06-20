import React from 'react'
import './style.css'
import Chart from '../Chart'
function VisualArea(props) {
  
  return (
    <div className='VisualWindow'>
      Here is the visualization window
      We wish to import a component in here call it like chart or something
      <Chart array={props.array}/>
    </div>
  )
}

export default VisualArea

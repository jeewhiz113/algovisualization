import React from 'react'
import './style.css'
const Bar = ({width, height, val, stateA, stateB, stateC, stateD, sorted, style}) => {
  let className = 'Bar';
  if (sorted){
    className += ' Bar_sorted';
  }
  if (stateD) {
    className += ' Bar_stateD';
  }else if (stateC){
    className += ' Bar_stateC';
  }else if (stateB){
    className += ' Bar_stateB';
  }else if (stateA){
    className += ' Bar_stateA';
  }
  let BarStyle = {...style, width:`${width}%`, height:`${height}%`}
  if (stateA || stateB || stateC || stateD){  //any other state other than sorted.
    BarStyle['marginRight'] = `${0.3 * width}%`;
    BarStyle['marginLeft'] = `${0.3 * width}%`;
  }
  return (
    <div style={BarStyle} className={className}>
      <span>{val}</span>
    </div>
  )
}

export default Bar

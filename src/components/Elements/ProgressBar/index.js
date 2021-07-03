import React from 'react';
import './style.css';
function ProgressBar({progress}) {
  return (
    <div className = "ProgressBar">
      <div className = "ProgressBar_Active" style = {{width: `${progress}%`}}>
      </div>
    </div>
  )
}

export default ProgressBar

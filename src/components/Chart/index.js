import React, { useState } from 'react'
import './style.css'
import Bar from '../Elements/Bar'
function Chart(props) {
  const generateBars = ()=>{
    if (!props.visState){
      return null;
    }
    let maxNum = Math.max(...props.visState.array);
    let array = props.visState.array;
    return array.map((num, index)=>{
            let width = 100/array.length;  //what is the function for the width?
            let height = num / maxNum * 100;
            let margin = index === array.length ? '0' : width > 3 ? '0.5rem' : '0.125rem';            let stateA = props.visState.stateA.includes(index);
            let stateB = props.visState.stateB.includes(index);
            let stateC = props.visState.stateC.includes(index);
            let stateD = props.visState.stateD.includes(index);
            let sorted = props.visState.sortedIndexes.includes(index);
            
            return (
              <Bar 
                key={index} 
                val={width >=5 ? num : null}
                width={width}
                height={height}
                style= {{marginRight: `${margin}`}}
                stateA = {stateA}
                stateB = {stateB}
                stateC = {stateC}
                stateD = {stateD}
                sorted = {sorted}
              />
            )
          })
  }
  return (
    <div className = 'Chart'>
      {generateBars()}
    </div>
  )
}

export default Chart

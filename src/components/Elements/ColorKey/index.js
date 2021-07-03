import React from 'react'
import './style.css'
export default function ColorKey(props) {
  //console.log({...props.colorKey})
  const {stateA, stateB, stateC, stateD} = {...props.colorKey};
  //console.log(stateA, 'this is in the color key component')
  const keySorted = stateA || stateB || stateC || stateD ? (<div className="ColorKey_Item">
    <div className="ColorKey_Box ColorKey_Sorted"> </div>
    <span>Sorted</span>
  </div>) :(<div className="ColorKey_Item">
    <div className="">
      <span>***select an algorithm to see color keys</span>
    </div>
  </div>);

  const keyA = stateA ? (<div className="ColorKey_Item">
    <div className="ColorKey_Box ColorKey_StateA">
    </div>
    <span className="text">{stateA}</span>
  </div>) : null;

  const keyB = stateB ? (<div className="ColorKey_Item">
  <div className="ColorKey_Box ColorKey_StateB">
  </div>
  <span>{stateB}</span>
  </div>) : null;

  const keyC = stateC ? (<div className="ColorKey_Item">
  <div className="ColorKey_Box ColorKey_StateC">
    <span>{stateC}</span>
  </div>
  </div>) : null;

  const keyD = stateD ? (<div className="ColorKey_Item">
  <div className="ColorKey_Box ColorKey_StateD">
    <span>{stateD}</span>
  </div>
  </div>) : null;

  return (
    <div className = "ColorKeys">
      {keySorted}
      {keyA}
      {keyB}
      {keyC}
      {keyD}
    </div>
  )
}

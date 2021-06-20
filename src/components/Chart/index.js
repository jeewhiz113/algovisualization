import React from 'react'
import './style.css'
function Chart(props) {
  console.log('in Chart', props.array);
  //const [array, setArray] = useState()

  //Next we try and display the array passed to this component.
  return (
    // So we implement flex box here, which means Chart is the container and some specific properties go on the boxes themselves.
    <div className = 'Chart'>
      {/* These below are going to be bars with a className */}
      <div className='box-1'>Box 1</div>
      <div className='box-2'>Box 2</div>
      <div className='box-3'>Box 3</div>
    </div>
  )
}

export default Chart

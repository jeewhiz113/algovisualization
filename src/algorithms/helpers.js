export const getInitState = (arr) =>{  //this simply returns the init state of the algo viz
  return [{
    array: [...arr],
    stateA: [],
    stateB: [],
    stateC: [],
    stateD: [],
    sortedIndexes: []
  }]
}

export const addToState = (
  state,
  array,
  sortedIndexes = [],  //if no value is provided, then its the empty array
  stateA = [],  //fourth parameter is stateA
  stateB = [],  //fifth parameter is stateB
  stateC = [],
  stateD = [],
) =>{
  state.push({
    array: [...array],
    stateA: [...stateA],
    stateB: [...stateB],
    stateC: [...stateC],
    stateD: [...stateD],
    sortedIndexes: [...sortedIndexes]
  })
}

export const swap = (array, i, j)=>{
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

export const lastSorted = (state) =>{
  return state[state.length-1].sortedIndexes;  //last element in state and the sortedIndexes property (we retrieve the entire array)
}
export const createRange = ()=>{
  console.log('somestuffhere')
}
export const createKey = (stateA, stateB, stateC, stateD)=>{
  return { stateA, stateB, stateC, stateD }
}
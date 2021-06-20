
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
// import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap';
import Navbar from './components/Nav';
import VisualArea from './components/VisualArea'

function App() {
  const [selectedSort, setSelectedSort] = useState(true);
  const [selectedSearch, setSelectedSearch] = useState(false)
  const [size, setSize] = useState(10);
  const [array, setArray] = useState([]);
  //generate the init array based the on the number that was selected.
  useEffect(()=>{
    setArray(generateArray(size));
  }, [size])  //****size is important here, only if size has been changed, do I re-render WITH the new size vairable!****!!!
  
  const setSortTrue = ()=>{
    setSelectedSort(true);
    setSelectedSearch(false);
  }
  const setSearchTrue = ()=>{
    setSelectedSearch(true);
    setSelectedSort(false);
  }
  //this is going to take size as parameter and generate an array of such size.
  const generateArray = (size)=>{
    const array = Array(size).fill(0).map(()=>{
      return Math.floor(Math.random()*5*size)+1;  //generate a number from 1 to size*5
    })
    return array;
  }
  
  return (
    <div className="App">
     <Navbar fixed="top" size = {size} sortSelect = {selectedSort} searchSelect = {selectedSearch} setSize = {setSize} setSort = {setSortTrue} setSearch={setSearchTrue}/>
     <VisualArea array = {array}/>
     <h2>Div here for: the progress bar</h2>
     <h2>Div here for the controls of the visualization, code in functionalities for: Pause, Speed, Forward One Step, Backward One Step and a start over button.</h2>

     <h2>Div here for the color keys, each color representing the specific internal computation: Sorted, Comparing, Swapping and Perhaps a pivot key.</h2>

      <Row>
       <Col>
        This here we do a sort description of the algo
       </Col>
       <Col>
        This here we specify the Performance of the algo.
       </Col>
     </Row>
      
     
    </div>
  );
}

export default App;

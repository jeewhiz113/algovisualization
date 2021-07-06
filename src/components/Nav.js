import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
// import { useAppContext, useAppUpdateContext } from '../utils/AppContext'
//use a useContext hook to keep track of the global context, and depending on the algo that the user's on, we generate the drop down for the size.  So it would be 10 - 500 for an array size and it would be say 100-1000? for the size of a grid.  
export default (props) => {
  const setNumber = (e) =>{
    props.setSize(parseInt(e.target.dataset.number));
  }
  const setSort = ()=>{
    props.setSize(10);
    props.setSort();
  }
  const setSearch = ()=>{
    props.setSize(50);
    props.setSearch();
  }
  const renderSizeOption = () => {
    if (props.sortSelect) {
      return (
        <NavDropdown className='mr-4' title={"Array Size:  " + props.size} id="basic-nav-dropdown">
          <NavDropdown.Item data-number={10} onClick = {setNumber} >10</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item data-number={20} onClick = {setNumber} >20</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item data-number={50} onClick = {setNumber} >50</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item data-number={100} onClick = {setNumber} >100</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item data-number={200} onClick = {setNumber} >200</NavDropdown.Item>
        </NavDropdown>
      )
    } else if (props.searchSelect) {
      return (
        <NavDropdown className='mr-4' title={"Grid Size:  " + props.size} id="basic-nav-dropdown">
          <NavDropdown.Item data-number={50} onClick = {setNumber} >50</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item data-number={100} onClick = {setNumber} >100</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item data-number={200} onClick = {setNumber} >200</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item data-number={400} onClick = {setNumber} >400</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item data-number={1000} onClick = {setNumber} >1000</NavDropdown.Item>
        </NavDropdown>
      )
    }
  }
  return (
    <div>
      <Navbar bg="light" variant='light' expand="lg">
        <Navbar.Brand href="#home">Algo Visualization</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavDropdown className='mr-4' onClick={setSort} title="Sorting Algos" id="basic-nav-dropdown">
              <NavDropdown.Item onClick = {props.selectedAlgo} >Bubble </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick = {props.selectedAlgo} >Selection </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick = {props.selectedAlgo} >Insertion </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick = {props.selectedAlgo} >Merge </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick = {props.selectedAlgo} >Quick </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick = {props.selectedAlgo} >Heap </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='mr-4' onClick={setSearch} title="Seaching Algos" id="basic-nav-dropdown">
              <NavDropdown.Item >Breadth-First-Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >Depth-First-Search</NavDropdown.Item>
              
            </NavDropdown>
            {renderSizeOption()}
            <Nav.Link className='mr-4'>Topological </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

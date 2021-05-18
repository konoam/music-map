import React from "react";
import {Dropdown} from 'react-bootstrap'

const Filter = (props) => {
  const {genres} = props
  // const {years} = props
console.log(genres)
const handleFilter=()=>{

}

  return (
  <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
Filter Name  </Dropdown.Toggle>

  <Dropdown.Menu>
    {genres.map((g)=>{
      <Dropdown.Item key={g.id}
      as="button"
      onClick={handleFilter}
      >{g.name}</Dropdown.Item>
    })}
   
  </Dropdown.Menu>
</Dropdown>
 ) 
 
};

export default Filter;
{/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> */}
import React from 'react'
import "./style.css"
const ButtonSelectGraph = (props) => {
    let name = props.name_of_graph
  return (
    <div className='btn'>{name}</div>
  )
}

export default ButtonSelectGraph
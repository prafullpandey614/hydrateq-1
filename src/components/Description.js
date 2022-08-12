import React from 'react'

const Description = (props) => {
  return (
    <div>
    <div>MainProcess</div>
    <div>{props.pro.project_name}</div>
    <div>{props.pro.project_description}</div>
    </div>
  )
}

export default Description
import React from 'react'


export const MainProcess = (props) => {
    console.log(props.pro)
  return (
    <div>
    <div>MainProcess</div>
    <div>{props.pro.project_name}</div>
    <div>{props.pro.project_description}</div>
    </div>

  )
}

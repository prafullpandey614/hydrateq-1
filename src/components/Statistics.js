import React from 'react'

const Statistics = (props) => {
    console.log(props.statisticsData.mean)
    console.log(props.statisticsData.median)
  return (
    <div>
    {/* {props.statisticsData.map((item,index)=>{
        return(
            <div key={index}>
            {item.name} : {item.value}
            </div>
        )
    }
        )
    } */}
</div>
  )
}
export default Statistics
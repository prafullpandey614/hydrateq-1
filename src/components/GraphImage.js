import React, { useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Stack } from '@mui/material';
const GraphImage = (props) => {
  console.log(props.id)
  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={2}>
          <img
            src={`http://127.0.0.1:5000/graph/trianglePiperdiagram/${props.id}`}
            alt="gibsDiagram"
            loading="lazy"
            width="250px"
            height="176.57px"
          />
        
          <img
            src={`http://127.0.0.1:5000/graph/gibbsDiagram/${props.id}`}
            alt="gibsDiagram"
            loading="lazy"
            width="250px"
            height="176.57px"
          />
        
          <img
            src={`http://127.0.0.1:5000/graph/rectanglePiper/${props.id}`}
            alt="gibsDiagram"
            loading="lazy"
            width="250px"
            height="176.57px"
          />
          <img
            src={`http://127.0.0.1:5000/graph/durvoDiagram/${props.id}`}
            alt="gibsDiagram"
            loading="lazy"
            width="250px"
            height="176.57px"
          />
        
      </Stack>
      <Stack direction="row" spacing={2}>
        <img
          src={`http://127.0.0.1:5000/graph/hfedDiagram/${props.id}`}
          alt="gibsDiagram"
          loading="lazy"
          width="250px"
          height="176.57px"
        />
        <img
          src={`http://127.0.0.1:5000/graph/chadhaDiagram/${props.id}`}
          alt="gibsDiagram"
          loading="lazy"
          width="250px"
          height="176.57px"
        />
        <img
            src={`http://127.0.0.1:5000/graph/gibbsDiagram/${props.id}`}
            alt="gibsDiagram"
            loading="lazy"
            width="250px"
            height="176.57px"
          />
          <img
            src={`http://127.0.0.1:5000/graph/schoellerDiagram/${props.id}`}
            alt="gibsDiagram"
            loading="lazy"
            width="250px"
            height="176.57px"
          />
      </Stack>
    </Stack>
  )
}
export default GraphImage
import React, { useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Stack } from '@mui/material';
const GraphImage = (props) => {
  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={2}>
          <img
            src="http://127.0.0.1:5000/graph/gibbsDiagram/4"
            alt="gibsDiagram"
            loading="lazy"
            Width="250px"
            Height="176.57px"
          />
        
          <img
            src="http://127.0.0.1:5000/graph/trianglePiperdiagram/4"
            alt="gibsDiagram"
            loading="lazy"
            Width="250px"
            Height="176.57px"
          />
        
          <img
            src="http://127.0.0.1:5000/graph/gibbsDiagram/4"
            alt="gibsDiagram"
            loading="lazy"
            Width="250px"
            Height="176.57px"
          />
          <img
            src="http://127.0.0.1:5000/graph/gibbsDiagram/4"
            alt="gibsDiagram"
            loading="lazy"
            Width="250px"
            Height="176.57px"
          />
        
      </Stack>
      <Stack direction="row" spacing={2}>
        <img
          src="http://127.0.0.1:5000/graph/trianglePiperdiagram/4"
          alt="gibsDiagram"
          loading="lazy"
          Width="250px"
          Height="176.57px"
        />
        <img
          src="http://127.0.0.1:5000/graph/gibbsDiagram/4"
          alt="gibsDiagram"
          loading="lazy"
          Width="250px"
          Height="176.57px"
        />
        <img
            src="http://127.0.0.1:5000/graph/gibbsDiagram/4"
            alt="gibsDiagram"
            loading="lazy"
            Width="250px"
            Height="176.57px"
          />
          <img
            src="http://127.0.0.1:5000/graph/trianglePiperdiagram/4"
            alt="gibsDiagram"
            loading="lazy"
            Width="250px"
            Height="176.57px"
          />
      </Stack>
    </Stack>
  )
}
export default GraphImage
import React , {useState} from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const GraphImage = (props) => {
  return (
    <div>
      { props.statisticsData !=0 ? (
        <ImageList sx={{ width: 500, height: 450 }}>
          <ImageListItem key="Subheader" cols={2}>
          <img
            src=""
            alt="gibsDiagram"
            loading="lazy"
          />
          </ImageListItem>
        </ImageList>
      ):(<div>no data</div>)
      }

    </div>
  )
}
export default GraphImage
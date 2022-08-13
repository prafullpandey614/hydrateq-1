import React, { useState } from 'react'
import { Stack, Button ,Card} from '@mui/material'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import GraphImage from './GraphImage';
import CardMedia from '@mui/material/CardMedia';
import AddchartIcon from '@mui/icons-material/Addchart';
import axios from "axios";
const Graph = (props) => {
  const [image, setImage] = useState("gibbsDiagram");
  const [imageUrl, setImageUrl] = useState('');
  const [display, setDisplay] = useState(false);
  
  const handeleClick = (item) => {
    setImage(item);
    axios.get(`http://localhost:5000/graph/${image}/${props.project_id}`)
      .then(response => {
        setDisplay(true);
        setImageUrl(`http://localhost:5000/graph/${image}/${props.project_id}`)
      }).catch(error => {
        console.log(error)
      }
      )
  }
  console.log(image)
return (
  <Stack>
    <Stack direction="row" spacing={1} m={1}>
      {graphs.map((item, index) => {
        
        return (
          <Button key={index}
            variant="contained"
            style={{ backgroundColor: "#FDD037", }}
            onClick={() => { handeleClick(item) }}
            // color="#FDD037"
            startIcon={<AddchartIcon />}
          >
            {item}
          </Button>)
      }
      )}
    </Stack>



     {display?
     
     
     
     <Card sx={{ maxWidth: 300 }}>
      {/* <img
        src={imageUrl}
        alt={image}
      /> */}
      <CardMedia
                  style={{
                    width: "auto",
                    maxHeight: "200px"
                  }}
                  component="img"
                  image={imageUrl}
                  title={ image}
                />
    </Card>
    
    
    :""}
  </Stack>
)
}

const graphs = [
  "color_piper",
  "gibbsDiagram",
  "trianglePiperDaigram",
  // "rectangle_piper",
  "chadha",
  "chernoff",
  "color_piper",
  // "contour_piper",
  "durvo",
  // "gaillardet",
  // "hfed",
  // "schoeller",
  "stiff"
]
export default Graph
import React from 'react'
import {Grid , FormControl , InputLabel , Select ,MenuItem ,Stack} from "@mui/material"
import NewSidebar from '../components/NewSidebar'
import { useParams } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import { Dropdown } from 'bootstrap'
const GraphSingle = () => {
    const params = useParams()
    const [age, setAge] = React.useState('');
    const [link , setLink] = React.useState();
  const handleChange = (event) => {
    setAge(event.target.value);
    setLink(`http://127.0.0.1:5000/graph/${event.target.value}/${params.id}`)
    console.log(event.target.value)
  };
    
   return (
   <Grid container>
    <Grid item xs={2}>
        <NewSidebar/>
    </Grid>
    <Grid item xs ={10}>
        <Stack mt={2}>
    <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Graph</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Graphs"
    onChange={handleChange}
  >
    <MenuItem value={"trianglePiperdiagram"}>Piper diagram</MenuItem>
    <MenuItem value={"gibbsDiagram"}>gibbs Diagram</MenuItem>
    <MenuItem value={"durvoDiagram"}>durvo Diagram</MenuItem>
    <MenuItem value={"chadhaDiagram"}>chadha Diagram</MenuItem>
    {/* <MenuItem value={50}>ussl</MenuItem> */}
  </Select>
</FormControl>
</Stack>
<Stack>
    <img 
    src = {link}
    alt="graph"
    width="400px"
    height="400.57px"
    />
</Stack>
    </Grid>
   </Grid>
  )
}

export default GraphSingle
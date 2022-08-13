import React  ,{useState} from 'react'
import { Stack } from '@mui/system'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import GraphImage from './GraphImage';
const Graph = (props) => {
  return (
     <Stack>
      <Stack> 
      <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Checkbox />}
          label="Top"
          labelPlacement="start"
        />
        <FormControlLabel
          value="start"
          control={<Checkbox />}
          label="Start"
          labelPlacement="start"
        />
        <FormControlLabel
          value="bottom"
          control={<Checkbox />}
          label="Bottom"
          labelPlacement="start"
        />
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          label="End"
          labelPlacement="start"
        />
      </FormGroup>
    </FormControl>
      </Stack>
      <GraphImage project_id={props.project_id}/>
    </Stack>
  )
}
export default Graph
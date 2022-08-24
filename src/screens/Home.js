import React from 'react'
import { Onbording } from './Onbording'
import NewSidebar from '../components/NewSidebar'
import {Grid ,Box} from "@mui/material"
export const Home = () => {
  return (
  <Box>
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={2}>
        <NewSidebar/> 
      </Grid>
      <Grid xs={10} item><Onbording/></Grid>
    </Grid>
    </Box>
  )
}

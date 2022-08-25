import React from 'react'
import {Grid , Box } from "@mui/material"
import NewSidebar from '../components/NewSidebar'
import HelpComponents from '../components/HelpComponents'
export const Help = () => {
  return (
    <Grid container>
        <Grid item xs={2}>
        <NewSidebar  />
        </Grid>
        <Grid item xs={10}>
          <Box 
          pl={1}
          bgcolor="#FBF9F9 "
          >
<HelpComponents/>
          </Box></Grid></Grid>
  )
}

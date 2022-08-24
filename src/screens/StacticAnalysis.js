import { Grid } from '@mui/material'
import React from 'react'
import NewSidebar from '../components/NewSidebar'
import {Typography, Card, CardContent , Box} from '@mui/material'
const StacticAnalysis = () => {
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
            analysis
          </Box>
          </Grid>
    </Grid>
  )
}

export default StacticAnalysis
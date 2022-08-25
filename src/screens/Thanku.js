import React from 'react'
import {Box, Typography ,Stack ,Grid} from "@mui/material"
import NewSidebar from "../components/NewSidebar"
const Thanku = () => {
  return (
    <Grid container>
        <Grid item xs={2}>
        <NewSidebar  />
        </Grid>
        <Grid item xs={10}>  
    <Box
    display="flex"
  justifyContent="center"
  alignItems="center"
  minHeight="100vh"
    >
        <Stack>
        <Stack><Typography variant="h3" gutterBottom component="div"
    >Thank you </Typography></Stack>
    <Stack>
        <Typography>We will get back to you soon with data if you reason is sound</Typography>
    </Stack> 
    </Stack></Box>
    </Grid>
    </Grid>
  )
}

export default Thanku
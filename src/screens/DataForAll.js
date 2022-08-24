import React from 'react'
import {Grid , Typography, Stack ,TextField} from '@mui/material'
import NewSidebar from '../components/NewSidebar'

const DataForAll = () => {
  return (
    <Grid container >
        <Grid item xs={2}
          mt={2}
          direction="row"
          justify="space-between"
          // alignItems="center"
          >
          <NewSidebar />
        </Grid>
        <Grid xs={10} item
        >
            <Typography variant="h4" p={3} gutterBottom align='center'>Data for all </Typography>
            <Stack  py={2} px={2} mt={5}>
                <Typography variant="h6" gutterBottom align='center'>Data really powers everything that we do.” — Jeff Weiner</Typography>
            </Stack>
            <Stack  py={2} px={2} >
                <Typography variant="subtitle1" >We are here to help you to get the data you need for your project and research </Typography> 
            </Stack>
            <Stack 
            alignItems="center"  
            justifyContent="center" 
            py={2} px={2}
            >
            <form >
            <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
        />
            </form>
            </Stack>
        </Grid>
        </  Grid>
  )
}

export default DataForAll
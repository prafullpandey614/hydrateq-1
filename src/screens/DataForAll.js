import React from 'react'
import {Grid , Typography, Stack ,TextField, Button} from '@mui/material'
import NewSidebar from '../components/NewSidebar'
import { useNavigate } from "react-router-dom";
const DataForAll = () => {
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked create")
    navigate("/thanks");
  }
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
              <label> Request for data </label>
              <Stack spacing={2} mt={3}>
              <Stack>
              <TextField
              style={{ width: 500 }}
          id="outlined-textarea"
          label="Email"
          placeholder="@gmail.com"
          multiline
        />
              </Stack>
           <Stack >
           <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={4}
          defaultValue="I need data for :"
        />
           </Stack>
           <Stack>
           <Button type = "submit"  onClick={handleSubmit}> Request data</Button>
           </Stack>
           </Stack>
            </form>
            </Stack>
        </Grid>
        </  Grid>
  )
}

export default DataForAll
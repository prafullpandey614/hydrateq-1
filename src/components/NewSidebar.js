import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Divider, Typography, Link, Box, Card } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const NewSidebar = () => {
  const navigate = useNavigate();
  console.log(window.location.pathname)
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000`)
      .then(response => {
        console.log(response.data)
        setPro(response.data.projects)
      }).catch(error => {
        console.log(error)
      }
      );
  } , []);
  const [pro,setPro] = React.useState([]);
  return (
    <Box

            bgcolor="white"
        >
    <Stack spacing={5}>
      <Typography fontWeight="fontWeightBold" variant='h5' style={{ color: "#FF9900" }} align="center" > Hydrateq</Typography>
      <Stack py={6}  px={4}>
        <Typography variant="subtitle1" align="center" >
          <Link href="/" underline="none" color="black">
            DashBoard
          </Link></Typography>
          
          <Stack
            spacing={2}
            alignItems="center"
            justifyContent="center"
          ><Typography>
            Projects</Typography>
            </Stack>
            {window.location.pathname==="/"? "":   pro.map((item, index) => {
              return (
                <Stack 
              alignItems="center"
              justifyContent="center"
              ml={1}>
                <Typography>
                  <Link href={`/project/${item[0]}`} underline="none" color="black">
                    {item[1]}
                  </Link>
                </Typography>
              </Stack>
              )
            }
              )}
          <Divider/>
          <Stack mt={1}>
          <Typography variant="subtitle1" align="center" >
          <Link href="/help" underline="none" color="black">
            Help
          </Link></Typography>
          <Typography variant="subtitle1" align="center" >
          <Link href="/analysis" underline="none" color="black">
            process
          </Link></Typography>
          <Typography variant="subtitle1" align="center" >
          <Link href="/" underline="none" color="black">
            Settings
          </Link></Typography>
          <Typography variant="subtitle1" align="center" >
          <Link href="/data" underline="none" color="black">
          Data for all 
          </Link></Typography>
          <Typography variant="subtitle1" align="center" >
          <Link href="/" underline="none" color="black">
          About Project
          </Link></Typography>
          </Stack>
      </Stack>
    </Stack>
    </Box>
  )
}

export default NewSidebar
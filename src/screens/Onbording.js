import React, { useEffect } from 'react'
import axios from "axios";
import Box from "@mui/material/Box"
import Projects from '../components/Projects'
import { Typography } from '@mui/material';


export const Onbording = () => {
    useEffect(() => {
        axios.get(`http://127.0.0.1:5000`)
          .then(response =>{ setPro(response.data.projects)
        //   console.log(response.data.projects)
        });
      }, []);

    const [pro,setPro] = React.useState([]);

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#FBF9F9"
        >
        <Projects project={pro} />
        </Box>
    )
}
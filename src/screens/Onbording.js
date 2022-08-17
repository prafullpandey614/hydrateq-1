import React, { useEffect } from 'react'
import axios from "axios";
import Box from "@mui/material/Box"
import Projects from '../components/Projects'
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
            bgcolor="#12ADC1"
        >
        <Projects project={pro} />
        </Box>
    )
}

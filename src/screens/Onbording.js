import React, { useEffect } from 'react'
import axios from "axios";
import Box from "@mui/material/Box"
import Projects from '../components/Projects'
export const Onbording = () => {
    useEffect(() => {
        axios.get("http://sih-hydrateq.herokuapp.com/")
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

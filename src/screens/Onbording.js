import React, { useEffect } from 'react'
import axios from "axios";
import Box from "@mui/material/Box"
import Projects from '../components/Projects'
export const Onbording = () => {
    const [pro,setPro] = React.useState([]);
    useEffect(() => {
      axios.get("http://sih-hydrateq.herokuapp.com/")
        .then(response =>{ setPro(response.data.projects.project)
        console.log(response.data.projects.project)});
    }, []);
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#d2e2d8"
        >
            <Projects project={pro}/>
        </Box>
    )
}

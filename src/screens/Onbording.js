import React, { useEffect } from 'react'
import axios from "axios";
import Box from "@mui/material/Box"
import Projects from '../components/Projects'
export const Onbording = () => {
    const [pro,setPro] = React.useState([]);
    
    const handleAddProject = (name,desc) => {
        console.log("callback")  //clicked
        const newProject = [...pro];        
        newProject.push([" ",name,desc]);       
        setPro(newProject);
    }   //clicked
    useEffect(() => {
      axios.get("http://sih-hydrateq.herokuapp.com/")
        .then(response =>{ setPro(response.data.projects)
        console.log(response.data.projects)});
        
    }, []);
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#d2e2d8"
        >
        <Projects project={pro} handleAddProject={handleAddProject}/>
        </Box>
    )
}

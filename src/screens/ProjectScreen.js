import React ,{useEffect}from 'react'
import axios from "axios";
import {Stack ,Box} from "@mui/material"
import { useParams } from 'react-router-dom';
import { MainProcess } from '../components/MainProcess';

const ProjectScreen = () => {
  const params = useParams();
  const [pro,setPro] = React.useState([]);
  useEffect(() => {
    axios.get(`http://sih-hydrateq.herokuapp.com/project/${params.id}`)
      .then(response =>{ setPro(response.data.projects)
      console.log(response.data.projects)});
  }, [params.id]);
  return (
    <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#d2e2d8"
        >
          <MainProcess/>
        </Box>
  )
}

export default ProjectScreen
import React ,{useEffect ,useState}from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

import {Box ,Stack ,Button} from "@mui/material";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

import { CssBaseline, ThemeProvider} from "@material-ui/core";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Graph from '../components/Graph';
import Statistics from '../components/Statistics';
import { makeStyles } from "@material-ui/core/styles";
const ProjectScreen = () => {
  const handleRoute = (id) => {
    console.log("route", id)
    navigate(`/analysis/${id}`); //clicked 
  }
  const navigate = useNavigate();
  const params = useParams();
  const [pro,setPro] = React.useState({}); 
  useEffect(() => {
    axios.get(`http://sih-hydrateq.herokuapp.com/project/${params.id}`)
      .then(response =>{ setPro(response.data)
      });
  }, [params.id]);
  console.log(pro)
  return ( 
    <Stack>
    <Button onClick={() => handleRoute(params.id)}>Analysis</Button>
    </Stack>
  )
}
export default ProjectScreen
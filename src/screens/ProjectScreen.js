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
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft:0
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: (drawerWidth)
  },
    }
))
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
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(true);
    navigate(`/`);
  };
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const[statisticsData , setStatisticsData] = useState([]);
  const statistics=(value)=>{
    setStatisticsData(value);
  } 
  const classes = useStyles();
  return ( 
    <Stack>
    <Button onClick={() => handleRoute(params.id)}>Analysis</Button>
    </Stack>
  )
}
export default ProjectScreen
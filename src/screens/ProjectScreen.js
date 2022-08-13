import React ,{useEffect ,useState}from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

import {Box ,Stack} from "@mui/material";
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
    <Header
        handleDrawerToggle={handleDrawerToggle}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        pro={pro.project_name}
      />
            <Sidebar handleDrawerClose={handleDrawerClose} open={open} project_id={params.id}  statistics={statistics}/>
      <main      className={clsx(classes.content, {
          [classes.contentShift]: open
        })}>
    <Box  
    mt={8}
            minHeight="100vh"
            bgcolor="#12ADC1">
      <Stack>
        <Graph  project_id ={params.id}/>
        <Statistics statisticsData={statisticsData}/>
      </Stack>
    </Box>
    </main>
    </Stack>
  )
}
export default ProjectScreen
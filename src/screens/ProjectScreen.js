import React ,{useEffect ,useState}from 'react'
import axios from "axios";
import {Stack ,Box , Grid ,Paper} from "@mui/material"
import { useParams } from 'react-router-dom';

import { Description } from '@mui/icons-material';
import { GraphButtons } from '../components/GraphButtons';
import { styled } from '@mui/material/styles';
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, ThemeProvider} from "@material-ui/core";
// import Content from "./Content";
import { createTheme } from "@material-ui/core/styles";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Graph from '../components/Graph';
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));
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
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    navigate(`/`);
  };

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return ( 
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <CssBaseline />
      <Header
        handleDrawerToggle={handleDrawerToggle}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        pro={pro.project_name}
      />
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Graph  project_id ={params.id} />
      </main>
    </div>
  </ThemeProvider>










    
//     <Box sx={{ flexGrow: 1 }}
//     display="flex"
//             minHeight="100vh"
//             bgcolor="#d2e2d8"
//         >
//           <Grid container spacing={1} justifyContent="space-evenly"  alignItems="stretch">
//   <Grid item xs="auto">
//     <Item><Description pro={pro}/></Item>
//   </Grid>
//   <Grid item xs={6}>
//     <Item><MainProcess/></Item>
//   </Grid>
//   <Grid   alignItems="flex-end" item xs ="auto">
//     <Item>
//     <GraphButtons/>
//     </Item>
//   </Grid>
// </Grid>
//           <Stack >
//           <Description pro={pro}/>
//           </Stack>
//           <Stack justifyContent="center"
//   alignItems="baseline">
//           <MainProcess/>
//           </Stack>
//           <Stack 
//   justifyContent="flex-end"
//   alignItems="stretch">
            
//           </Stack>
//         </Box>
        
  )
}
export default ProjectScreen
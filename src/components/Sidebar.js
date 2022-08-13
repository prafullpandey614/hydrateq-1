import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import DevicesIcon from "@mui/icons-material/Devices";
// import EventIcon from "@mui/icons-material/Event";
// import ExploreIcon from "@mui/icons-material/Explore";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import { Button } from "@mui/material";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import axios from "axios"
const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#0295A9",
    color: "  #FFFFFF",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
   
  }
}));
export default function Sidebar({ open, handleDrawerClose , project_id ,statistics}) {
const [State , setState] = useState(null)
// const submit =() =>{
//   console.log(state)
//   axios.post(`https://sih-hydrateq.herokuapp.com/csv/${project_id}`, state)
//   .then(res => { 
//       console.log(res.data)})
// }
const handleSubmit = async (event) => { // Reset status
  const data = {
    name : "file" ,
    file: State
  }
  event.preventDefault();
  const resp = await axios.post(`http://127.0.0.1:5000/csv/${project_id}`, data, {
    headers: {
      "content-type": "multipart/form-data",
    },
  });
  // console.log(resp.data);
  statistics(resp.data);
};
const handleInputChange =(e)  =>{
    setState(e.target.files[0])
}

  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        {/* <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton> */}
      </div>
      <Divider />
      <div className="">
        {/* <List>
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary="Mail" />
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <EventIcon />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ExploreIcon />
            </ListItemIcon>
            <ListItemText primary="Explore" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favorites" />
          </ListItem>
        </List> */}
        <Divider />
        <List>
          {/* <ListItem button>
            <ListItemIcon>
              <DevicesIcon />
            </ListItemIcon>
            <ListItemText primary="Devices" />
          </ListItem> */}
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
          <ListItem button onClick={handleDrawerClose} >
            <ListItemIcon  >

              <ChevronLeftIcon />

            </ListItemIcon >
            <ListItemText primary="Back" />
          </ListItem>
        </List>
        <Divider />
        <List>
        <form onSubmit={handleSubmit}>
          <ListItem>
          {/* <ListItemIcon button >          
         < UploadFileIcon/>
            </ListItemIcon> */}
              <input
                type="file"
                onChange={handleInputChange}
                inputProps={{
                  accept:
                    ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
                }}
              />
          </ListItem>
          <ListItem>
          <button type="submit">Save</button>
          </ListItem>
          </form>
        </List>
      </div>
    </Drawer>
  );
}

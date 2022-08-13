import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from '@mui/material';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#0295A9",
    color: "  #FFFFFF",
    [theme.breakpoints.up("sm")]: {
      zIndex: theme.zIndex.drawer + 1
    }
  },
  rightIcons: {
    marginLeft: theme.spacing(0.5)
  },
  spacer: {
    flexGrow: 1
  }
}));

export default function Header({
  handleDrawerToggle,
  // toggleDarkMode,
  // darkMode,
  pro
}) {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          {pro}
        </Typography>
        <div className={classes.spacer} />
        {/* <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDarkMode}
          edge="start"
          className={classes.rightIcons}
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton> */}
      </Toolbar>
    </AppBar>
  );
}

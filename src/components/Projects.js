import React, { useEffect } from "react"
import { Typography, Stack, Card, Button, CardActionArea } from "@mui/material";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DialogTitle from '@mui/material/DialogTitle';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
const Projects = (props) => {
  const [newProject, setNewProject] = React.useState(null)
  useEffect(() => {
    setNewProject(props.project)
  }, [props.project]);
  console.log(newProject)

  const [name, setName] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [desc, setDesc] = React.useState("");
  let navigate = useNavigate();
  const handleRoute = (id) => {
    console.log("route", id)
    navigate(`/project/${id}`); //clicked 
  }
  const handleOnclick = () => {

    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    console.log("clicked create")
    setOpen(false);
    console.log(name, desc)
    axios.post(`https://sih-hydrateq.herokuapp.com/`, { "name": name, "desc": desc })
      .then(res => {
        console.log(res.data);
        console.log("callback")  //clicked
        const newP = [...newProject];
        newP.push([res.data.id, name, desc]);
        setNewProject(newP);
        console.log(newProject)
      }).catch(err => {
        console.log(err);
      })

  }

  return (
    <Stack>
      <Stack>
        {newProject === null ? "" : (newProject.map((project, index) => (
          <Stack my={1} py={1} key={index}>
            <Card sx={{ minWidth: 275, minHeight: 40 }} style={{ backgroundColor: "white" }}>
              <CardActionArea onClick={() => handleRoute(project[0])}>
                <Stack pt={1} alignItems="center"  ><Typography variant="subtitle1">Project name : {project[1]}</Typography></Stack>
              </CardActionArea>
            </Card>
          </Stack>
        )))}
        <Stack>
          <Card sx={{ minWidth: 275, minHeight: 40 }} style={{ backgroundColor: "white" }}>
            <CardActionArea onClick={handleOnclick}>
              <Stack direction='row' spacing={1} alignItems="center" justifyContent="center" px={2} py={2}>
                <CreateNewFolderIcon />
                <p>new Project</p>
              </Stack>
            </CardActionArea>
          </Card>
        </Stack>
      </Stack>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Project</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={name}
            label="Project Name"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Project Description"
            value={desc}
            id="place"
            fullWidth
            variant="standard"
            onChange={(e) => setDesc(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Create</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  )
}

export default Projects
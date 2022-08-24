import React, { useEffect } from "react"
import { Typography, Stack, Card, Button, CardActionArea , Box ,Chip} from "@mui/material";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DialogTitle from '@mui/material/DialogTitle';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import Logo from "../images/hydrateq.svg";
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
    axios.post(`http://127.0.0.1:5000`, { "name": name, "desc": desc })
      .then(res => {
        console.log(res.data);
        console.log("callback")  //clicked
        const newP = [...newProject];
        newP.push([res.data.id, name, desc]);
        setNewProject(newP);
        console.log(newProject)
        navigate("/project/" + res.data.id);
      }).catch(err => {
        console.log(err);
      })
      
  }
  return (
    <Box>
      <Stack direction="column">
        <Stack spacing={1} alignItems="center" justifyContent="center"  py={5.5}>
          <Stack>
          <img
          height={400}
          width={400} 
          src={Logo} alt="hydrateq"/></Stack>
          <Card sx={{ width: 275, height: 40 }} style={{ backgroundColor: "white" }}>
            <CardActionArea onClick={handleOnclick}>
              <Stack spacing={2} direction="row" alignItems="center" justifyContent="center"  mt={1} >
                <Stack> <CreateNewFolderIcon /></Stack>
                <p>new Project</p>
              </Stack>
            </CardActionArea>
          </Card>
        </Stack>
  </Stack>
  <Box  style={{backgroundColor :"white"}} sx={{ width: 1067 }}>
    <Typography variant="subtitle1" align="center"> Previous Projects</Typography>
    <Stack  spacing={2} direction="row" alignItems="center" justifyContent="center">
{newProject === null ? "" : (newProject.map((project, index) => (
          <Stack my={1} py={1} key={index}>
            <Chip label={project[1]} variant="outlined" onClick={() => handleRoute(project[0])} />
          </Stack>
        )))}
        </Stack>
    </Box>
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
    </Box>
  )
}

export default Projects
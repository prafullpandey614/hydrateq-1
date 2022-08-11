import React from "react"
import { Typography  , Stack ,Card, Button ,CardActionArea} from "@mui/material";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import axios from "axios";
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
const Projects = (props) => {
  const [name, setName] = React.useState( "");
  const [open, setOpen] = React.useState(false);
  const [desc, setDesc] = React.useState( "");

  const handleOnclick=()=>{
    console.log("clicked")
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };
  const handleCreate = (e) => {
    e.preventDefault();
    console.log("clicked create")
    setOpen(false);
    console.log(name,desc)
    const Project = {
      name:name,
      aqurename: desc
    };
    axios.post(`https://sih-hydrateq.herokuapp.com/`,{Project})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    }
  return (
    <Stack>
    <Stack>
      {props.project.map((project, index) => (
          <Stack my={1} py={1} key={index}>
            <Card   sx={{ minWidth: 275 ,minHeight:40 }} style={{backgroundColor: "white"}}>
              <CardActionArea href="localhost">
              <Stack pt={1} alignItems="center"  ><Typography variant="subtitle1">Project name : {project[1]}</Typography></Stack>
              </CardActionArea>
            </Card>
          </Stack>
      ))}
       <Stack>
            <Card   sx={{ minWidth: 275 ,minHeight:40 }} style={{backgroundColor: "white"}}>
            <CardActionArea onClick={handleOnclick}>
              <Stack alignItems="center" justifyContent="center" px={2} py={2}>
              <Button ><CreateNewFolderIcon />new Project</Button>
                </Stack>
                </CardActionArea>
            </Card>
          </Stack>
    </Stack>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Project</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Creat
          </DialogContentText> */}
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
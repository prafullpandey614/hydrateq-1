import React, { useState } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Stack  , Card ,CardContent ,Typography} from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { saveAs } from "file-saver"


const GraphImage = (props) => {
  //model

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xl'));
 
  const [open, setOpen] = React.useState(false);
  const [graphName, setGraphName] = React.useState('');
  // const [graphLink, setGraphLink] = React.useState('');

  const handleDownload =(value , name)=>{
    console.log(value)
    console.log(name)
    // saveAs('', 'image.jpg')
    saveAs(`${value}`, `${name}.jpg`);
  }
  const handleClose = () => {
    setOpen(false);
  };
// Button onclick
  console.log(props.id)
  const imageClick=(image)=>{
    console.log("image clicked " + image)
    setOpen(true);
    setGraphName(image);
    // setGraphLink(`http://127.0.0.1:5000/graph/${graphName}/${props.id}`);
  }
  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={3}>
      <Card sx={{ minWidth: 250 }} onClick={() => imageClick("trianglePiperdiagram")}>
          <img
            src={`http://127.0.0.1:5000/graph/trianglePiperdiagram/${props.id}`}
            alt="trianglePiperdiagram"
            loading="lazy"
            width="250px"
            height="176.57px"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Triangle Piper Diagram
            </Typography>
          </CardContent>
          </Card>
          <Card sx={{ minWidth: 250 }} onClick={() => imageClick("gibbsDiagram")}>
          <img
            src={`http://127.0.0.1:5000/graph/gibbsDiagram/${props.id}`}
            alt="gibsDiagram"
            loading="lazy"
            width="250px"
            height="176.57px"
          />
          <CardContent>   
            <Typography gutterBottom variant="h5" component="div">
              Gibbs Diagram
            </Typography>
          </CardContent>

        </Card>
        <Card sx={{ minWidth: 250 }} onClick={() => imageClick("rectanglePiper")}>
          <img
            src={`http://127.0.0.1:5000/graph/rectanglePiper/${props.id}`}
            alt="rectanglePiper"
            loading="lazy"
            width="250px"
            height="176.57px"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rectangle Piper
            </Typography>
          </CardContent>

          </Card>
          <Card sx={{ minWidth: 250 }} onClick={() => imageClick("durvoDiagram")}>
          <img
            src={`http://127.0.0.1:5000/graph/durvoDiagram/${props.id}`}
            alt="durvoDiagram"
            loading="lazy"
            width="250px"
            height="176.57px"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Durvo Diagram
            </Typography>
          </CardContent>

        </Card>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Card sx={{ minWidth: 250 }} onClick={() => imageClick("hfedDiagram")}>
        <img
          src={`http://127.0.0.1:5000/graph/hfedDiagram/${props.id}`}
          alt="hfedDiagram"
          loading="lazy"
          width="250px"
          height="176.57px"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hfed Diagram
        </Typography>
      </CardContent>
        </Card>
        <Card sx={{ minWidth: 250 }} onClick={() => imageClick("chadhaDiagram")}>
        <img
          src={`http://127.0.0.1:5000/graph/chadhaDiagram/${props.id}`}
          alt="chadhaDiagram"
          loading="lazy"
          width="250px"
          height="176.57px"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Chadha Diagram
        </Typography>
      </CardContent>

        </Card>
        <Card sx={{ minWidth: 250 }} onClick={() => imageClick("color_piperDiagram")} >
        <img
            src={`http://127.0.0.1:5000/graph/color_piperDiagram/${props.id}`}
            alt="gibsDiagram"
            loading="lazy"
            width="250px"
            height="176.57px"
          />


          <CardContent>


            <Typography gutterBottom variant="h5" component="div">
              Color Piper Diagram
            </Typography>
          </CardContent>

        </Card>
        <Card sx={{ minWidth: 250 }} onClick={() => imageClick("schoellerDiagram")}>
          <img
            src={`http://127.0.0.1:5000/graph/schoellerDiagram/${props.id}`}
            alt="schoellerDiagram"
            loading="lazy"
            width="250px"
            height="176.57px"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Schoeller Diagram
            </Typography>
          </CardContent>
          
        </Card>
      </Stack>
      <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
        <DialogTitle>{graphName}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <img
            src={`http://127.0.0.1:5000/graph/${graphName}/${props.id}`}
            alt={graphName}
            loading="lazy"
            width="fit-content"
            height="700px"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>handleDownload(`http://127.0.0.1:5000/graph/${graphName}/${props.id}`,graphName) }>Download</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  )
}
export default GraphImage
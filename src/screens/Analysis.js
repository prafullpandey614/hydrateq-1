import React, { useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack  , Button} from '@mui/material';
import { Typography ,Card ,CardContent } from '@mui/material';
import NewSidebar from '../components/NewSidebar';
import GraphImage from '../components/GraphImage';
import Interpretaion from '../components/Interpretaion';
import Statistics from '../components/Statistics';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import SampleData from '../components/SampleData';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { saveAs } from "file-saver"
const Analysis = () => {
  const params = useParams();
  const [Display, setDisplay] = React.useState(true);
  const [pro, setPro] = React.useState([]);
  const [description, setDescription] = React.useState([]);
  const [sar , setSar] = React.useState([]);
  const [MeanSar , setMeanSar] = React.useState([]);
  const [wqi , setWqi] = React.useState([]);
  const [ShowData ,setShowData] = React.useState(false);
  const [Samples ,setSamples] = React.useState();
  const [alignment, setAlignment] = React.useState('Interpretaion');
  
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    setShowData(!ShowData)
  };
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/wqi/${params.id}`)
            .then(res => {
                setMeanSar(res.data.sar.mean)
                setWqi(res.data.wqi.mean)
            })
            .catch(err => console.log(err))
    axios.get(`http://127.0.0.1:5000/project/${params.id}`)
      .then(response => {
        setPro(response.data)
      });
    axios.get(`http://127.0.0.1:5000/csv/${params.id}`)
      .then(response => { setDescription(response.data) })
      .catch(err => (console.log(err)));

    axios.get(`http://127.0.0.1:5000/sar/${params.id}`)
      .then(response => {
        setSar(response.data)
      })
      .catch(err => {
        console.log(err)
      })
    axios.get(`http://127.0.0.1:5000/sample/${params.id}`)
    .then(response => { setSamples(response.data)
      console.log(response.data)})
  }, [params.id]);
  console.log(description)
  if(description == null){
    setDisplay(false)}
  const [project, setProject] = React.useState({});
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000`)
      .then(res => {
        setProject(res.data.projects)
      })
      .catch(err => console.log(err))
  }, [])

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
  const imageClick=(image)=>{
    console.log("image clicked " + image)
    setOpen(true);
    setGraphName(image);
    // setGraphLink(`http://127.0.0.1:5000/graph/${graphName}/${props.id}`);
  }
  return (
    <Box
      minHeight="100vh"
      // bgcolor="#FBF9F9 "
    >
      <Stack>
      <ToggleButtonGroup
  color="primary"
  exclusive
  onChange={handleChange}
  aria-label="Platform"
>
  
  {/* <ToggleButton value="web">Interpretaion</ToggleButton>
  <ToggleButton value="android">Data</ToggleButton> */}
</ToggleButtonGroup>
      </Stack>
{!Display ? (<Typography>No sample found in your Project </Typography>): ShowData?(
<Stack>
  <SampleData Samples={Samples}/>
  </Stack>
  ):
      (<div>
      <Grid container spacing={2}  mt={3}>
        <Grid item xs={2}>
        <NewSidebar project={pro} all_projects={project} />
        </Grid>
        <Grid item xs={10}>
          <Box 
          pl={1}
          bgcolor="#FBF9F9 "
          >
          <Stack spacing={3} mt={2}>
          <Typography variant='h5' align='center' sx={{ textDecoration: 'underline' }} > Data Processing</Typography>
          <Stack direction="row" spacing={3}>
      <Card sx={{ minWidth: 250 }} onClick={() => imageClick("cleandata")} >
        <img
            src={`http://127.0.0.1:5000/graph/cleandata/${params.id}`}
            alt="cleandata"
            loading="lazy"
            width="250px"
            height="176.57px"
          />
          <CardContent>

            <Typography gutterBottom variant="h5" component="div">
              Heat Map
            </Typography>
          </CardContent>
        </Card>
        {/* <Card sx={{ minWidth: 250 }} onClick={() => imageClick("clustring")} >
        <img
            src={`http://127.0.0.1:5000/graph/clustring/${params.id}`}
            alt="clustring"
            loading="lazy"
            width="250px"
            height="176.57px"
          />
          <CardContent>

            <Typography gutterBottom variant="h5" component="div">
              Clustring 
            </Typography>
          </CardContent>

        </Card> */}
    </Stack>
            <Typography variant='h5' style={{ color: "black" }} align="center"
              sx={{ textDecoration: 'underline' }} > Visualization</Typography>
              {(description.length===0)? (<Typography>No data avialble </Typography>):
            ( <Stack spacing={5}><GraphImage id={params.id} /></Stack>)}
           
            {(description.length===0)? (<Typography>No data avialble </Typography>):
            (<Statistics desc={description}  sar={sar}/>)
            }
          </Stack>
          </Box>
        </Grid>
      </Grid> 
      <Stack spacing={2} mt={2}> <Typography  sx={{ textDecoration: 'underline' }} variant='h5' align='center'> Interpretaion</Typography></Stack>
      <Box mx={2} my={2} px={1} py={2} bgcolor="#D9D9D9">
      {(description.length===0)? (<Typography>No data avialble </Typography>):
            (<Interpretaion desc={description}  project_id={params.id} MeanSar={MeanSar} wqi={wqi}/>)
            }
        
      </Box>
      </div>)}
      {/* <Button onClick={handelDocument}>DOWNLOAD ANALYSIS</Button> */}
      <Dialog open={open} onClose={handleClose} fullScreen={fullScreen}>
        <DialogTitle>{graphName}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <img
            src={`http://127.0.0.1:5000/graph/${graphName}/${params.id}`}
            alt={graphName}
            loading="lazy"
            width="fit-content"
            height="700px"
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>handleDownload(`http://127.0.0.1:5000/graph/${graphName}/${params.id}`,graphName) }>Download</Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

export default Analysis
import React, { useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack  , Button} from '@mui/material';
import { Typography } from '@mui/material';
import NewSidebar from '../components/NewSidebar';
import GraphImage from '../components/GraphImage';
import Interpretaion from '../components/Interpretaion';
import Statistics from '../components/Statistics';
import ReactDOMServer from 'react-dom/server';
import jsPDF from 'jspdf';
const Analysis = () => {
  // const navigate = useNavigate();
  const params = useParams();
  const [Display, setDisplay] = React.useState(true);
  const [pro, setPro] = React.useState([]);
  const [description, setDescription] = React.useState([]);
  const [sar , setSar] = React.useState([]);
  // const handelDocument =()=>{
  //     let doc = new jsPDF();
  //     doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
  //     doc.save("myDocument.pdf");
  // }
  useEffect(() => {
    axios.get(`http://127.0.0.1:5000/project/${params.id}`)
      .then(response => {
        setPro(response.data)
      });
    axios.get(`http://127.0.0.1:5000/csv/${params.id}`)
      .then(response => { setDescription(response.data) })
      .catch(err => {
        // console.log(err)
      })
      axios.get(`http://127.0.0.1:5000/sar/${params.id}`)
      .then(response => {
        setSar(response.data)
        // console.log(response.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [params.id]);
  // console.log(description)
  // console.log(pro)
  // console.log(params.id)
  if(description == null){
    setDisplay(false)}
  const [project, setProject] = React.useState({});
  useEffect(() => {
    axios.get(`http://sih-hydrateq.herokuapp.com/`)
      .then(res => {
        setProject(res.data.projects)
        // console.log(res.data.project)
      })
      .catch(err => console.log(err))
  }, [])

  // console.log(sar)
  return (
    <Box
      minHeight="100vh"
      bgcolor="#F9F9F9"
    // sx={{ flexGrow: 1 }}
    >
{!Display ? (<Typography>No sample found in your data </Typography>):
      (<div>
      <Grid container spacing={2} >
        <NewSidebar project={pro} all_projects={project} />
        <Grid item xs={9} mr={1}>
          <Stack spacing={2} mt={2}>
            <Typography variant='h5' style={{ color: "black" }} align="center"
              sx={{ textDecoration: 'underline' }} > Visualization</Typography>
              {(description.length===0)? (<Typography>No data avialble </Typography>):
            ( <Stack spacing={5}><GraphImage id={params.id} /></Stack>)}
            
            {(description.length===0)? (<Typography>No data avialble </Typography>):
            (<Statistics desc={description}  sar={sar}/>)
            }
          </Stack>
        </Grid>
      </Grid>
      <Box mx={2} my={2} px={1} py={2} bgcolor="#D9D9D9">
        <Interpretaion />
      </Box>
      </div>)}
      {/* <Button onClick={handelDocument}>DOWNLOAD ANALYSIS</Button> */}
    </Box>

  )
}

export default Analysis
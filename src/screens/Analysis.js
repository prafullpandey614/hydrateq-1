import React , {useEffect} from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import NewSidebar from '../components/NewSidebar';
import GraphImage from '../components/GraphImage';
import Statistics from '../components/Statistics';
import Interpretaion from '../components/Interpretaion';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const Analysis = () => {
    // const navigate = useNavigate();
    const params = useParams();
    const [pro,setPro] = React.useState([]); 
    useEffect(() => {
      axios.get(`http://sih-hydrateq.herokuapp.com/project/${params.id}`)
        .then(response =>{ setPro(response.data)
        });
    }, [params.id]);
    console.log(pro)
    console.log(params.id)
    const [project,setProject] = React.useState({});
    useEffect(() => {
        axios.get(`http://sih-hydrateq.herokuapp.com/`)
        .then(res=>{
            setProject(res.data.projects)
            console.log(res.data.project)
        })
        .catch(err =>console.log(err))
    },[])
  return (


    <Box 
    minHeight="100vh"
    bgcolor="#F9F9F9"
    // sx={{ flexGrow: 1 }}
    >
      <Grid container spacing={2} >
        <NewSidebar project ={pro} all_projects={project}/>
        <Grid item xs={9} mr={1}>
            <Stack spacing={2} mt={2}>
                <Typography variant='h5' style={{color:"black"}} align="center"
                 sx={{textDecoration: 'underline'}} > Visualization</Typography>
                 <Stack spacing={5}>
                    <GraphImage/>
                 </Stack>
                 <Statistics />
        </Stack>
        </Grid>
      </Grid>
      

      <Box mx={2} my={2} px={1} py={2} bgcolor="
#D9D9D9">
    <Interpretaion/>
</Box>
    </Box>
 
  )
}

export default Analysis
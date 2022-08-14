import React , {useEffect}from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Divider, Typography  ,Link} from '@mui/material';
import axios from 'axios';
const NewSidebar = (props) => {
    // const [project,setProject] = React.useState(props.all_projects);
    // useEffect(()=>{
    //     axios.get("http://sih-hydrateq.herokuapp.com/")
    //     .then(res=>{
    //         setProject(res.data.projects) 
    //     })
    //     .catch(err=>console.log(err))
    // },[])
    // console.log(project)
  return (
    <Grid item xs={2}>
          <Stack spacing={2} mt={5}>
            <Typography  fontWeight="fontWeightBold" variant='h5' style={{color:"#6956E5"}} align="center" > Hydrateq</Typography>
            <Stack spacing={2}>
                <Divider/>
            <Typography fontWeight="fontWeightBold"  align="center"> project: {props.project.project_name}</Typography>
            <Divider/>
            {/* <Typography ml={1}>ALL Projects</Typography>
            {project.lenght ===0 ?"": project.map((project,index)=>{
                return(
                    <Typography align="center" >{project[1]}</Typography>
                        // <Link href="#" underline="hover">
                        //             {project[1]}
                        //     </Link>
                )
            })} */}
          </Stack>
          
          </Stack>
          
        </Grid>
  )
}

export default NewSidebar
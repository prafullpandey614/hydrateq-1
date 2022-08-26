import React, { useEffect, useState, useCallback } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Box, Stack, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import drop from "../images/drop.svg";
import sideupper from "../images/sideupper.svg"
import EditableTable from '../components/EditableTable';
import fieldsArr from "../utils/fields";
import Tabular_input from '../components/Tabular_input';
import CircularProgress from '@mui/material/CircularProgress';

import { useDropzone } from "react-dropzone";
import csv from "csv";

import NewSidebar from '../components/NewSidebar'

const ProjectScreen = () => {



  const [csvFile , setCsvFile] = useState("");
  const handleData = (data) => {
    console.log(data);
    setCsvFile(data);
  }


  const handleRoute = (id) => {
    console.log("route", id)
    navigate(`/analysis/${id}`); //clicked 
  }
  const navigate = useNavigate();
  const params = useParams();
  const [pro, setPro] = React.useState({});
  const [analysis, setAnalysis] = React.useState(true);
  const [loading, setLoading] = React.useState(false);


  const [files, setFiles] = React.useState();
  const [fileName, setFileName] = React.useState();
  const onChange = (e) => {
    setFiles(e.target.files[0]);

    setFileName(e.target.files[0].name);
  }

  const handleSubmit = async (event) => {
    const data = {
      name: "file",
      file: files
    }
    console.log("submit clicked")
    setLoading(true);
    event.preventDefault();
    const resp = await axios.post(`http://127.0.0.1:5000/csv/${params.id}`, data, {
      headers: {
        "content-type": "multipart/form-data",
      }
    });
    console.log(resp.data);
    setLoading(false);
    setAnalysis(false);
  }


  useEffect(() => {
    axios.get(`http://sih-hydrateq.herokuapp.com/project/${params.id}`)
      .then(response => {
        setPro(response.data)
      });
  }, [params.id]);
// data
  const defaultData = [
    {
      name: "Yash",
      age: "23",
      relationShip: "haqSeSingle"
    }
  ];
  const getData = row => {
    console.log(row, "rows data");
  };

  return (
    <Box>
      <Grid container >
        <Grid item xs={2}
          mt={2}
          direction="row"
          justify="space-between"
          // alignItems="center"
          >
          <NewSidebar />
        </Grid>
        <Grid xs={10} item>
          <Box
            display="flex"
            minHeight="90vh"
            bgcolor="#FBF9F9"
            justifyContent="center"
          >
            <Stack px={2} py={2} mb={5}>
              <Stack direction="row">
                <Stack direction="column" >
                  <img
                    height={124}
                    width={216}
                    src={drop} alt="file Upload" />
                  <form onSubmit={handleSubmit}>
                    <label htmlFor="file">{fileName}</label>
                    <br />
                    <input
                      id="file"
                      type="file"
                      name="selectedFile"
                      variant="outlined"
                      onChange={event => onChange(event)}
                    />
                  </form>
                  <Stack mt={2}>
                  <Button variant="contained" type="submit" onClick={handleSubmit}>Submit</Button></Stack>
                  <Stack mt={1}
            justifyContent="flex-end"
            alignItems="center">
            <Button variant="contained" disabled={analysis} onClick={() => handleRoute(params.id)}>Analysis</Button></Stack>
                  {/* <EditableTable
        initWithoutHead
        defaultData={defaultData}
        getData={getData}
        fieldsArr={fieldsArr}
      /> */}
                </Stack>

                <Stack justifyContent="flex-end"
                        alignItems="flex-start"
                    spacing={6}
                    ml={4}>
                  <img src={sideupper} alt="sideupper" 
                    height="274"
                    width="300" />
                </Stack>
              </Stack>
              {!loading ? "" : <Stack mt={5}>
                <Box justifyContent="center" sx={{ display: 'flex' }}>
                  <CircularProgress />
                </Box>
              </Stack>}
            </Stack>
          </Box>
          <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={6}> 
          <Tabular_input />
            </Stack>
            <Stack mt={1}
            justifyContent="flex-end"
            alignItems="center">
            <Button variant="contained" disabled={analysis} onClick={() => handleRoute(params.id)}>Analysis</Button></Stack>
            <Stack mt={1}></Stack>
        </Grid>
      </Grid>
    </Box>

  )
}
export default ProjectScreen
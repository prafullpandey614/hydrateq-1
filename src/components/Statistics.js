import React, { useEffect } from 'react'
import {Stack ,Typography } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const Statistics = (props) => {
  const [data, setData] = React.useState(props.desc);
  // useEffect(()=>{
  //   setData(props.desc);
  //   // console.log(props.desc);
  // },[props.desc] ) 

  function createData(name , mean  , std , min ,max ,percentile75) {
    if(data.length === 0) {
      return null
    }
    return { name,mean , std , min ,max , percentile75};
  }
  // console.log(props.desc)
  
  
  // console.log(data)
  // props.desc.map((item,index)=>{
  //   console.log(item)
  // })
  // const arr =[]  
  // for (const [key, value] of Object.entries(props.desc)) {
  //   // console.log(`${key}: ${value}`);
  //   arr.push(key)
  // }
  // for (let i = 1; i < arr.length; i++) {
  //   console.log(arr[i])
  //   // createData(arr[i],()
  // }
  const rows = [
    createData('pH',data.pH[1],data.pH[2],data.pH[3], data.pH[7],data.pH[6]),
    createData('Ca',data.Ca[1],data.Ca[2],data.Ca[3], data.Ca[7],data.Ca[6]),
    createData('Cl',data.Cl[1],data.Cl[2],data.Cl[3], data.Cl[7],data.Cl[6]),
    createData('F',data.F[1],data.F[2],data.F[3], data.F[7],data.F[6]),
    createData('HCO3',data.HCO3[1],data.HCO3[2],data.HCO3[3], data.HCO3[7],data.HCO3[6]),
    createData('KNa',data.KNa[1],data.KNa[2],data.KNa[3], data.KNa[7],data.KNa[6]),
    createData('Mg',data.Mg[1],data.Mg[2],data.Mg[3], data.Mg[7],data.Mg[6]),
    createData('NO3',data.NO3[1],data.NO3[2],data.NO3[3], data.NO3[7],data.NO3[6]),
    createData('SO4',data.SO4[1],data.SO4[2],data.SO4[3], data.SO4[7],data.SO4[6]),
    createData('TDS',data.TDS[1],data.TDS[2],data.TDS[3], data.TDS[7],data.TDS[6]),
  ];
  return (
    <Stack spacing={3} >
   <Stack >
    <Typography variant='h5' style={{color:"black"}} align="center"
                 sx={{textDecoration: 'underline'}} > Analysis</Typography>
                 <Stack>
          <Typography variant='outline1' style={{color:"black"}} align="center">Max ,Min , SD, Varience </Typography></Stack>
   </Stack>
<Stack>


{/* ------------------------TBALE --------------------------------------------------- */}
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Descriptive analysis</TableCell>
            <TableCell align="right">Mean</TableCell>
            <TableCell align="right">STD.</TableCell>
            <TableCell align="right">Max</TableCell>
            <TableCell align="right">Min</TableCell>
            <TableCell align="right">75%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.mean}</TableCell>
              <TableCell align="right">{row.std}</TableCell>
              <TableCell align="right">{row.max}</TableCell>
              <TableCell align="right">{row.min}</TableCell>
              <TableCell align="right">{row.percentile75}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

</Stack>


{/* ------------------------tBALE2 ----------------------> */}
<Stack >

                 <Stack>
          <Typography variant='outline1' style={{color:"black"}} align="center">SAR,Soluble Na %,RSC And WQI </Typography></Stack>
   </Stack>
<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</Stack>

  )
}
export default Statistics
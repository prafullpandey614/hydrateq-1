import React, { useEffect } from 'react'
import {Stack ,Typography } from "@mui/material"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { Button } from "@mui/material";
import {CSVLink, CSVDownload} from 'react-csv'; 
const columns = [
  { id: 'name', label: 'Sample Name', minWidth: 120 },
  { id: 'sar', label: 'Sodium adsorption ratio (SAR)', minWidth: 170 },
  {
    id: 'solNa',
    label: 'Soluble Na%',
    minWidth: 150,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'rsc',
    label: 'residual sodium carbonate(RSC)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'wqi',
    label: 'Water Quality Index(WQI)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];
const Statistics = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const data = props.desc
  const sar_data = props.sar;


  function createData1(name,rsc,sar,solNa,wqi) {
    if(data.length === 0) { 
      return null
    }
    return {name , rsc,sar,solNa,wqi};
  }
  const rows1 = [
  ];
  sar_data.map((data , index) => {
    let name = "sample" + (index+1);
    let item = createData1(name ,data.rsc, data.sar, data.solNa, data.wqi);
    rows1.push(item);
  });
  console.log(rows1)
  // ----------------------------Table 1---------------------------------------
  function createData(name , mean  , std , min ,max ,percentile75) {
    if(data.length === 0) {
      return null
    }
    return { name ,mean , std , min ,max , percentile75};
  }
  
  // console.log(sar_data)
  // console.log(data)
  
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
                  
                    <Button><CSVLink data={rows} >Download</CSVLink></Button>
          <Typography variant='outline1' style={{color:"black"}} align="center">Max ,Min , SD, Varience </Typography></Stack>
   </Stack>
<Stack>


{/* ------------------------TBALE 1--------------------------------------------------- */}
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


<Paper sx={{ width: '100%' }} mt={3}>
<Button><CSVLink data={rows1} >Download</CSVLink></Button>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={6}>
              SAR,Soluble Na %,RSC And WQI
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows1
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
</Stack>

  )
}
export default Statistics
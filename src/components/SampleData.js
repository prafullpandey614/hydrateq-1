import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// Icons
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import DoneIcon from '@mui/icons-material/Done';

// styling
const useStyles = makeStyles(theme => ({
    root: {
      width: "auto",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    table: {
      minWidth: 650
    },
    selectTableCell: {
      width: 60
    },
    tableCell: {
      width: "auto",
      height: 40
    },
    input: {
      width: 130,
      height: 40
    }
  }));

  //data function
const createData = (id,sample_name ,tds,sulfate,sodium,potassiumSodium,ph,nitrate,magnesium,bicarbonate,calcium,alk) => {
    return {id,sample_name,tds,sulfate,sodium,potassiumSodium,ph,nitrate,magnesium,bicarbonate,calcium,alk}};


const CustomTableCell = ({ row, sample_name, onChange }) => {
    const classes = useStyles();
    const { isEditMode } = row;
    return (
      <TableCell align="left" className={classes.tableCell}>
        {isEditMode ? (
          <Input
            value={row[sample_name]}
            name={sample_name}
            onChange={e => onChange(e, row)}
            className={classes.input}
          />
        ) : (
          row[sample_name]
        )}
      </TableCell>
    );
  };
  
 
const SampleData = (props) => {


    const rows1 = [];
    props.Samples.map((data , index) => {
      let item = createData(index,data.sample_name ,data.tds, data.sulfate, data.sodium, data.ph, data.nitrate, data.magnesium, data.bicarbonate, data.calcium, data.alk);
      rows1.push(item);
    });


    console.log(rows1)
    const [rows, setRows] = React.useState(rows1);
    console.log(rows[0].sample_name)



const [previous, setPrevious] = React.useState({});
const classes = useStyles();



  const onToggleEditMode = id => {
    setRows(state => {
      return rows.map(row => {
        if (row.id === id) {
          return { ...row, isEditMode: !row.isEditMode };
        }
        return row;
      });
    });
  };

  const onChange = (e, row) => {
    if (!previous[row.id]) {
      setPrevious(state => ({ ...state, [row.id]: row }));
    }
    const value = e.target.value;
    const name = e.target.name;
    const { id } = row;
    const newRows = rows.map(row => {
      if (row.id === id) {
        return { ...row, [name]: value };
      }
      return row;
    });
    setRows(newRows);
  };

//   const onRevert = id => {
//     const newRows = rows.map(row => {
//       if (row.id === id) {
//         return previous[id] ? previous[id] : row;
//       }
//       return row;
//     });
//     setRows(newRows);
//     setPrevious(state => {
//       delete state[id];
//       return state;
//     });
//     onToggleEditMode(id);
//   };
  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="caption table">
        {/* <caption>A barbone structure table example with a caption</caption> */}
        <TableHead>
          <TableRow>
            <TableCell align="left" />
            <TableCell align="left">Sample name</TableCell>
            <TableCell align="left">tds</TableCell>
            <TableCell align="left">sulfate</TableCell>
            <TableCell align="left">sodium</TableCell>
            <TableCell align="left">potassiumSodium</TableCell>
            <TableCell align="left">ph</TableCell>
            <TableCell align="left">nitrate</TableCell>
            <TableCell align="left">magnesium</TableCell>
            <TableCell align="left">bicarbonate</TableCell>
            <TableCell align="left">calcium</TableCell>
            <TableCell align="left">alk</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell className={classes.selectTableCell}>
                {row.isEditMode ? (
                  <>
                    <IconButton
                      aria-label="done"
                      onClick={() => onToggleEditMode(row.id)}
                    >
                      <DoneIcon />
                    </IconButton>
                    {/* <IconButton
                      aria-label="revert"
                      onClick={() => onRevert(row.id)}
                    >
                      
                    </IconButton> */}
                  </>
                ) : (
                  <IconButton
                    aria-label="delete"
                    onClick={() => onToggleEditMode(row.id)}
                  >
                    <ModeEditOutlineIcon/>
                  </IconButton>
                )}
              </TableCell>
              <CustomTableCell {...{ row, sample_name: "sample0", onChange }} />
              <CustomTableCell {...{ row, name: "calories", onChange }} />
              <CustomTableCell {...{ row, name: "fat", onChange }} />
              <CustomTableCell {...{ row, name: "carbs", onChange }} />
              <CustomTableCell {...{ row, name: "protein", onChange }} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}

export default SampleData
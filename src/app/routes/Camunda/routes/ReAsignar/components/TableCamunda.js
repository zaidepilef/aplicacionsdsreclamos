import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Checkbox from '@material-ui/core/Checkbox';
import ListCamunda from "./ListCamunda";
import { SkeletonTable } from "util/Skeleton";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#CBCBD5",
    color: "rgb(39, 70, 77)"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700
  }
});

const TableCamunda = props => {
  const { dataTable, setDataTable, checkedAll, setCheckedAll,loading, users } = props;

  const classes = useStyles();

  if (loading) {
    return <SkeletonTable />;
  }

  if (!dataTable.length) {
    return (
      <div className="col d-flex justify-content-center">
        <h3 className="text-center mt-2">No se encontraron datos</h3>
      </div>
    );
  }

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              <Checkbox color="primary" checked={checkedAll} onChange={e => {
                let checked = e.target.checked
                setCheckedAll(checked)
                setDataTable(prevState => prevState.map(d => {
                  d.select = checked;
                  return d
                }))
              }}/>
            </StyledTableCell>
            <StyledTableCell align="center">N° Reclamo</StyledTableCell>
            <StyledTableCell align="center">Tarea</StyledTableCell>
            <StyledTableCell align="center">Rut Reclamante</StyledTableCell>
            <StyledTableCell align="center">
              Usuario Responsable
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map(task => (
            <ListCamunda
              key={task.id}
              task={task}
              setDataTable={setDataTable}
              users={users}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCamunda;

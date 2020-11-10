import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { SkeletonTable } from "util/Skeleton";

import HeaderTable from "./HeaderTable";
import ClaimList from "./ClaimList";

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

const ClaimTable = props => {
  const {
    tasks = [],
    totalTask,
    loading,
    error,
    submitClaim,
    appendIdInstance
  } = props;

  const classes = useStyles();

  if (error) {
    return (
      <div className="col d-flex justify-content-center">
        <h3>Error al cargar las instancias</h3>
      </div>
    );
  }

  if (loading) {
    return <SkeletonTable />;
  }

  if (!tasks.length) {
    return (
      <div className="col d-flex justify-content-center">
        <h3> No se han encontrado instancias</h3>
      </div>
    );
  }

  return (
    <>
      <HeaderTable totalTask={totalTask} submitClaim={submitClaim}/>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Reclamar</StyledTableCell>
              <StyledTableCell align="left">N° Reclamo</StyledTableCell>
              <StyledTableCell align="left">Tarea</StyledTableCell>
              <StyledTableCell align="left">Rut</StyledTableCell>
              <StyledTableCell align="left">Nombre</StyledTableCell>
              <StyledTableCell align="left">Estado</StyledTableCell>
              <StyledTableCell align="left">Fecha Problema</StyledTableCell>
              <StyledTableCell align="left">Fecha Reclamo</StyledTableCell>
              <StyledTableCell align="left">Fecha Respuesta</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map(task => (
              <ClaimList
                key={task.id}
                task={task}
                appendIdInstance={appendIdInstance}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ClaimTable;

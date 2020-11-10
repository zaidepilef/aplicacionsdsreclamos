import React, { Fragment } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import ListaObservaciones from "./ListaObservaciones";

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

const TablaObservaciones = props => {
  const classes = useStyles();

  const { dataObservation = [], loading, error } = props;

  if (error) {
    return (
      <div className="col d-flex justify-content-center">
        <h3>Error al cargar las observaciones</h3>
      </div>
    );
  }

  if (loading) {
    return <SkeletonTable />;
  }

  if (!dataObservation.length) {
    return (
      <div className="col d-flex justify-content-center">
        <h3> No se han encontrado observaciones</h3>
      </div>
    );
  }

  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Descripción</StyledTableCell>
              <StyledTableCell align="left">Usuario</StyledTableCell>
              <StyledTableCell align="left">Tarea</StyledTableCell>
              <StyledTableCell align="left">Fecha</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataObservation.map(observacion => (
              <ListaObservaciones
                key={observacion.id}
                observacion={observacion}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default TablaObservaciones;

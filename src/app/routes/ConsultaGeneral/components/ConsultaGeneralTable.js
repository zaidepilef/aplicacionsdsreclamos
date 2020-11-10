import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import ConsultaGeneralList from "./ConsultaGeneralList";
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

const ConsultaGeneralTable = props => {
  const { dataTable, setDataTable, loading, users } = props;

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
            <StyledTableCell align="center">N° Reclamo</StyledTableCell>
            <StyledTableCell align="center">Tarea</StyledTableCell>
            <StyledTableCell align="center">Rut Reclamante</StyledTableCell>
            <StyledTableCell align="center">Nombre Reclamante</StyledTableCell>
            <StyledTableCell align="center">Fecha Inicio Reclamo</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
            <StyledTableCell align="center">Proceso</StyledTableCell>
            <StyledTableCell align="center">Usuario Responsable</StyledTableCell>
            <StyledTableCell align="center">Materia</StyledTableCell>
            <StyledTableCell align="center">Sub Materia</StyledTableCell>
            <StyledTableCell align="center">Region</StyledTableCell>
            <StyledTableCell align="center">Comuna</StyledTableCell>
            {/* <StyledTableCell align="center">Acciones</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map(task => (
              <ConsultaGeneralList key={task.id} task={task} setDataTable={setDataTable} users={users}/>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConsultaGeneralTable;

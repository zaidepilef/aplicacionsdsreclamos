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
import ListaDocumentos from "./ListaDocumentos";

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

const TablaDocumentos = props => {
  const classes = useStyles();
  const { loading, plantillas, error } = props;

  if (loading) {
    return <SkeletonTable />;
  }

  if (!plantillas.results.length) {
    return (
      <div className="col d-flex justify-content-center">
        <h3> No se han encontrado plantillas</h3>
      </div>
    );
  }

  if (error) {
    return (
      <div className="col d-flex justify-content-center">
        <h3>Error al cargar las plantillas</h3>
      </div>
    );
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">
                Tipo de Documento
              </StyledTableCell>
              <StyledTableCell align="center">
                Nombre del Documento
              </StyledTableCell>
              <StyledTableCell align="center">
                Creado por
              </StyledTableCell>
              <StyledTableCell align="center">
                Fecha de Creación
              </StyledTableCell>
              <StyledTableCell align="center">
                Versión
              </StyledTableCell>
              <StyledTableCell align="center">
                Documento electrónico
              </StyledTableCell>
              <StyledTableCell align="center">
                Firma Electrónica Avanzada
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {plantillas.results.map(plantilla => (
              <ListaDocumentos
                key={plantilla.id}
                plantilla={plantilla}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TablaDocumentos;

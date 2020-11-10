import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import ListaDocumentacion from "./ListaDocumentacion";
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

const TablaDocumentacion = props => {
  const { dataFolders = [], appendDocument, loading, error, token } = props;
  const classes = useStyles();

  if (error) {
    return (
      <div className="col d-flex justify-content-center">
        <h3>Error al cargar los documentos</h3>
      </div>
    );
  }

  if (loading) {
    return <SkeletonTable />;
  }

  if (!dataFolders.length) {
    return (
      <div className="col d-flex justify-content-center">
        <h3> No se han encontrado documentos por firmar</h3>
      </div>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Enviar</StyledTableCell>
            <StyledTableCell align="left">Formato</StyledTableCell>
            <StyledTableCell align="left">Nombre</StyledTableCell>
            <StyledTableCell align="left">Tipo de Documento</StyledTableCell>
            <StyledTableCell align="left">Firmado Por</StyledTableCell>
            <StyledTableCell align="left">Fecha Creación</StyledTableCell>
            <StyledTableCell align="left">Fecha Modificación</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataFolders.map(document => (
            <ListaDocumentacion
              token={token}
              key={document.id}
              document={document}
              appendDocument={appendDocument}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TablaDocumentacion;

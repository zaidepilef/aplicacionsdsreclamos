import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Checkbox } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "rgb(33, 144, 171  )",
    color: "rgb(39, 70, 77)"
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    },
    "&:hover": {
      backgroundColor: "#EDEDF3"
    }
  }
}))(TableRow);



const ListaDocsPendientes = ({ plantilla,checkSelectDocument }) => {

  return (
    <>
      <StyledTableRow style={{ textDecoration: "none" }} onClick={(e) => checkSelectDocument(e, plantilla.id)}>
        <StyledTableCell align="center">
          <Checkbox color="primary" />
        </StyledTableCell>
        <StyledTableCell align="center">
          {plantilla.tipo_documento}
        </StyledTableCell>
        <StyledTableCell align="center">
          {plantilla.nombre_documento}
        </StyledTableCell>
        <StyledTableCell align="center">{plantilla.creador}</StyledTableCell>
        <StyledTableCell align="center">
          {plantilla.fecha_creacion}
        </StyledTableCell>
        <StyledTableCell align="center">{plantilla.version}</StyledTableCell>
        <StyledTableCell align="center">
          <Checkbox color="primary" checked={plantilla.firma_electronica} />
        </StyledTableCell>
        <StyledTableCell align="center">
          <Checkbox color="primary" checked={plantilla.firma_electronica} />
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default ListaDocsPendientes;

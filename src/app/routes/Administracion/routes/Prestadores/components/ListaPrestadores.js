import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
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

const ListaPrestadores = props => {

  const { prestador } = props;


  return (
    <>
      <StyledTableRow style={{ textDecoration: "none" }}>
        <StyledTableCell align="center">{prestador.nombre}</StyledTableCell>
        <StyledTableCell align="center">{prestador.direccion}</StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default ListaPrestadores;

import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";

import PropTypes from "prop-types";

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

const ClaimList = ({ task = [], appendIdInstance }) => {
  return (
    <StyledTableRow key={task.id} style={{ textDecoration: "none" }}>
      <StyledTableCell align="left">
        <Checkbox
          color="primary"
          onChange={e => appendIdInstance(e, task.id)}
        />
      </StyledTableCell>
      <StyledTableCell align="left">
        <Link to={`/app/tareas/detalle/${task.id}`}>{task.n_reclamo}</Link>
      </StyledTableCell>
      <StyledTableCell align="left">{task.nombre_task_camunda}</StyledTableCell>
      <StyledTableCell align="left">{task.cotizante.full_rut}</StyledTableCell>
      <StyledTableCell align="left">{`${task.cotizante.nombres} ${task.cotizante.apellido_paterno} ${task.cotizante.apellido_materno} `}</StyledTableCell>
      <StyledTableCell align="left">
        {task.finalizada ? "Finalizada" : "Abierta"}
      </StyledTableCell>
      <StyledTableCell align="left">
        {task.fecha_inicio_reclamo}
      </StyledTableCell>
      <StyledTableCell align="left">
        {task.fecha_inicio_reclamo}
      </StyledTableCell>
      <StyledTableCell align="left">
        {task.fecha_carta_respuesta}
      </StyledTableCell>
    </StyledTableRow>
  );
};

ClaimList.propTypes = {
  task: PropTypes.object.isRequired
};

export default ClaimList;

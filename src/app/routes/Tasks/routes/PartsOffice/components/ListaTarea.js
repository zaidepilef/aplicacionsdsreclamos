import React from "react";
import { Checkbox, TableCell, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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

const ListaTarea = ({ task = [] }) => {
  return (
    <StyledTableRow key={task.id} style={{ textDecoration: "none" }}>
      <StyledTableCell align="left">
        <Link to={`/app/tareas/detalle/${task.id}`}>{task.n_reclamo}</Link>
      </StyledTableCell>
      <StyledTableCell align="left">{task.nombre_task_camunda}</StyledTableCell>
      <StyledTableCell align="left">{task.cotizante.full_rut}</StyledTableCell>
      <StyledTableCell align="left">{`${task.cotizante.nombres} ${task.cotizante.apellido_paterno} ${task.cotizante.apellido_materno} `}</StyledTableCell>
      <StyledTableCell align="left">Abierta</StyledTableCell>
      <StyledTableCell align="left">{task.fecha_desde}</StyledTableCell>
      <StyledTableCell align="left">{task.fecha_hasta}</StyledTableCell>
      <StyledTableCell align="left">
        {task.fecha_carta_respuesta}
      </StyledTableCell>
    </StyledTableRow>
  );
};

ListaTarea.propTypes = {
  task: PropTypes.object.isRequired
};

export default ListaTarea;

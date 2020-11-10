import React from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import styled from "styled-components";

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

const Svg = styled(Icon)`
  color: #18630a;
  :hover {
    color: #2d9e19;
  }
`;
const ConsultaGeneralList = ({ task }) => {
  return (
    <>
      <StyledTableRow key={task.id} style={{ textDecoration: "none" }}>
        <StyledTableCell align="center">
          <Link to={`/app/tareas/detalle/${task.id}`}>{task.n_reclamo}</Link>
        </StyledTableCell>
        <StyledTableCell align="center">
          {task.nombre_task_camunda}
        </StyledTableCell>
        <StyledTableCell align="center">
          {task.cotizante.full_rut}
        </StyledTableCell>
        <StyledTableCell align="center">{`${task.cotizante.nombres} ${task.cotizante.apellido_paterno} ${task.cotizante.apellido_materno} `}</StyledTableCell>
        <StyledTableCell align="center">
          {task.fecha_inicio_reclamo}
        </StyledTableCell>
        <StyledTableCell align="center">Abierta</StyledTableCell>
        <StyledTableCell align="center">
          {task.process_definition.tipo_admisibilidad}
        </StyledTableCell>
        <StyledTableCell align="center">
          {task.usuario ? task.usuario : "Usuario no Asignado"}
        </StyledTableCell>
        <StyledTableCell align="center">
          {task.materia.descripcion}
        </StyledTableCell>
        <StyledTableCell align="center">
          {task.sub_materia.descripcion}
        </StyledTableCell>
        <StyledTableCell align="center">{task.region.nombre}</StyledTableCell>
        <StyledTableCell align="center">{task.comuna.nombre}</StyledTableCell>
        {/* <StyledTableCell align="center">

          <span>
            <Tooltip title="Exportar a Excel">
              <Svg path={mdiFileExcel} size={0.95} />
            </Tooltip>
          </span>

        </StyledTableCell> */}
      </StyledTableRow>
    </>
  );
};

export default ConsultaGeneralList;

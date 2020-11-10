import React, { useState } from "react";
import { TableCell, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";


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

const ConsultaGeneralList = ({
  task,
  handleClick,
  isSelected
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);



  const isItemSelected = isSelected(task.id);
  return (
    <>
      <StyledTableRow
        key={task.id}
        style={{ textDecoration: "none" }}
        onClick={e => {
          handleClick(e, task.id);
        }}
      >
        <StyledTableCell align="center">
          <Checkbox checked={isItemSelected} color="primary" />
        </StyledTableCell>
        <StyledTableCell align="center">
          <Link to={`/app/tareas/detalle/${task.id}`}>{task.n_reclamo}</Link>
        </StyledTableCell>
        <StyledTableCell align="center">{task.cotizante.rut}</StyledTableCell>
        <StyledTableCell align="center">{`${task.cotizante.nombres} ${task.cotizante.apellido_paterno} ${task.cotizante.apellido_materno} `}</StyledTableCell>
        <StyledTableCell align="center">{task.nombre_task_camunda}</StyledTableCell>
        <StyledTableCell align="center">Abierta</StyledTableCell>
        <StyledTableCell align="center">
          {task.process_definition.tipo_admisibilidad || ""}
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default ConsultaGeneralList;

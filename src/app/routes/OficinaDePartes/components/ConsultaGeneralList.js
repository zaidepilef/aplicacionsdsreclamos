import React, { useState } from "react";
import { Button, TableCell, TableRow } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import NewCustomDialog from "util/NewCustomDialog";
import Checkbox from "@material-ui/core/Checkbox";

// Modals
import DerivarUsuario from "./Modals/DerivarUsuario";
import AsignarUsuario from "./Modals/AsignarUsuario";

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

const ConsultaGeneralList = ({ task, setDataTable, users, handleClick, isSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState(null);

  const handeDialogClose = () => {
    setIsOpen(false);
    setModalTitle("");
    setModalContent(null);
  };

  const handleViewAsign = () => {
    setModalTitle("Asignar Instancia");
    setModalContent(
      <AsignarUsuario
        users={users}
        task={task}
        setDataTable={setDataTable}
        handeDialogClose={handeDialogClose}
      />
    );
    setIsOpen(true);
  };

  const handleViewDerivate = task => {
    setModalTitle("Derivar Instancia");
    setModalContent(<DerivarUsuario />);
    setIsOpen(true);
  };

  const isItemSelected = isSelected(task.id);
  return (
    <>
      <StyledTableRow key={task.id} style={{ textDecoration: "none" }} onClick={(e) => {handleClick(e, task.id)}}>
        <StyledTableCell align="left">
          <Checkbox
            checked={isItemSelected}
            color="primary"
          />
        </StyledTableCell>
        <StyledTableCell align="left">
          <Link to={`/app/tareas/detalle/${task.id}`}>{task.n_reclamo}</Link>
        </StyledTableCell>
        <StyledTableCell align="left">
          {task.nombre_task_camunda}
        </StyledTableCell>
        <StyledTableCell align="left">{task.cotizante.rut}</StyledTableCell>
        <StyledTableCell align="left">{`${task.cotizante.nombres} ${task.cotizante.apellido_paterno} ${task.cotizante.apellido_materno} `}</StyledTableCell>
        <StyledTableCell align="left">Abierta</StyledTableCell>
        <StyledTableCell align="left">
          {task.process_definition.tipo_admisibilidad || ""}
        </StyledTableCell>
        <StyledTableCell align="left">
          {task.usuario ? task.usuario : "Usuario no Asignado"}
        </StyledTableCell>
        <StyledTableCell align="left">
          {task.materia.descripcion}
        </StyledTableCell>
        <StyledTableCell align="left">
          {task.sub_materia.descripcion}
        </StyledTableCell>
        <StyledTableCell align="left">{task.region.nombre}</StyledTableCell>
        <StyledTableCell align="left">{task.comuna.nombre}</StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default ConsultaGeneralList;

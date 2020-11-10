import React, { useState } from "react";
import { Button, TableCell, TableRow } from "@material-ui/core";
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

const ListCamunda = ({ task, setDataTable }) => {
  return (
    <>
      <StyledTableRow key={task.id} style={{ textDecoration: "none" }}>
        <StyledTableCell align="center">
          <Checkbox
            checked={task.select}
            color="primary"
            onChange={e => {
              let checked = e.target.checked;
              setDataTable(prevState =>
                prevState.map(data => {
                  if (task.id == data.id) {
                    data.select = checked;
                  }
                  return data;
                })
              );
            }}
          />
        </StyledTableCell>
        <StyledTableCell align="center">
          <Link to={`/app/tareas/detalle/${task.id}`}>{task.n_reclamo}</Link>
        </StyledTableCell>
        <StyledTableCell align="center">
          {task.nombre_task_camunda}
        </StyledTableCell>
        <StyledTableCell align="center">
          {task.cotizante.full_rut}
        </StyledTableCell>
        <StyledTableCell align="center">
          {task.usuario ? task.usuario : "Usuario no Asignado"}
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default ListCamunda;

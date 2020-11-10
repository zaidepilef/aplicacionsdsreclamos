import React, { useState } from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import ConsultaGeneralList from "./ConsultaGeneralList";
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

const ConsultaGeneralTable = props => {
  const { dataTable, setDataTable, loading, users } = props;

  const [selected, setSelected] = useState([]);
  const classes = useStyles();

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = dataTable.map(n => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const isSelected = id => selected.indexOf(id) !== -1;

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  if (loading) {
    return <SkeletonTable />;
  }

  if (!dataTable.length) {
    return (
      <div className="col d-flex justify-content-center">
        <h3 className="text-center mt-2">No se encontraron datos</h3>
      </div>
    );
  }

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
              <Checkbox
                color="primary"
                indeterminate={
                  selected.length > 0 && selected.length < dataTable.length
                }
                checked={
                  dataTable.length > 0 && selected.length === dataTable.length
                }
                onChange={handleSelectAllClick}
                inputProps={{ "aria-label": "select all desserts" }}
              />
            </StyledTableCell>
            <StyledTableCell align="center">N° Reclamo</StyledTableCell>
            <StyledTableCell align="center">Tarea</StyledTableCell>
            <StyledTableCell align="center">Rut Reclamante</StyledTableCell>
            <StyledTableCell align="center">Nombre Reclamante</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
            <StyledTableCell align="center">Proceso</StyledTableCell>
            <StyledTableCell align="center">
              Usuario Responsable
            </StyledTableCell>
            <StyledTableCell align="center">Materia</StyledTableCell>
            <StyledTableCell align="center">Sub Materia</StyledTableCell>
            <StyledTableCell align="center">Region</StyledTableCell>
            <StyledTableCell align="center">Comuna</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataTable.map(task => (
            <ConsultaGeneralList
              handleClick={handleClick}
              isSelected={isSelected}
              key={task.id}
              task={task}
              setDataTable={setDataTable}
              users={users}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ConsultaGeneralTable;

import React from "react";
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
  const {
    dataTable,
    setDataTable,
    loading,
    users,
    setSelected,
    selected,
    setWhoIs,
  } = props;

  const classes = useStyles();

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = dataTable.map(n => {
        if (
          n.slug_task_camunda === (selected[0] ? dataTable.filter(t => t.id === selected[0])[0].slug_task_camunda : dataTable[0].slug_task_camunda)
        ) {
          return n.id;
        }
      });
      
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const isSelected = id => {
    return selected.indexOf(id) !== -1;
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    console.log(id);

    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
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

    console.log(newSelected)
    let taskCheck = dataTable.filter(t => t.id === id)[0];
    let fistCheck = dataTable.filter(t => t.id === newSelected[0])[0];
    if (
      taskCheck.slug_task_camunda === (fistCheck ? fistCheck.slug_task_camunda : taskCheck.slug_task_camunda )
      ) {    
        setSelected(()=> newSelected);
      } else {
        alert("Favor escojer instancias que esten en la misma tarea");
      }
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
            <StyledTableCell align="center">Rut Reclamante</StyledTableCell>
            <StyledTableCell align="center">Nombre Reclamante</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
            <StyledTableCell align="center">Tarea</StyledTableCell>
            <StyledTableCell align="center">Proceso</StyledTableCell>
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
